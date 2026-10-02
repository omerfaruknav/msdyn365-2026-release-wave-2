/**
 * The one place that talks to a language model.
 *
 * Backends:
 *   cli  (default) runs `claude -p` on the logged-in Claude subscription. No API key.
 *   api  only when ANTHROPIC_API_KEY is set and LLM_BACKEND=api. Plain fetch, no SDK.
 *
 * Every call is cached on disk under pipeline/.cache/<tag>/<hash>.json, keyed by a hash
 * of (prompt version, model, system prompt, prompt, schema). The cache is committed, so a
 * rebuild from a clean clone never calls a model. LLM_CACHE_ONLY=1 turns a cache miss into
 * an error instead of a network call (that is what CI uses).
 */
import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { existsSync } from "node:fs";
import Ajv from "ajv";
import { CACHE } from "./config.js";
import { readJson, writeJson } from "./fsx.js";
import { sha256 } from "./text.js";

export type ModelAlias = "sonnet" | "opus" | "haiku" | "fable" | string;

export interface LlmRequest {
  tag: string;            // cache folder, e.g. "02-extract"
  promptVersion: string;  // bump to invalidate the cache for a step
  system: string;
  prompt: string;
  schema: Record<string, unknown>;
  model?: ModelAlias;
  label?: string;         // for logs
  maxBudgetUsd?: number;
}
export interface LlmMeta {
  backend: "cli" | "api";
  model: string;
  prompt_version: string;
  created_at: string;
  hash: string;
  usage?: unknown;
  cost_usd?: number;
  duration_ms?: number;
  attempts: number;
}
export interface LlmResult<T> { output: T; cached: boolean; meta: LlmMeta }

const ajv = new Ajv({ strict: false, allErrors: true });
const API_MODELS: Record<string, string> = {
  sonnet: "claude-sonnet-5-5", opus: "claude-opus-5-5", haiku: "claude-haiku-4-5-20251001", fable: "claude-fable-5-1",
};

export function defaultModel(step: "extract" | "merge" | "match" | "narrative" | "misc"): string {
  if (process.env.LLM_MODEL) return process.env.LLM_MODEL;
  switch (step) {
    case "merge": case "match": return "opus";
    default: return "sonnet";
  }
}

export function cacheKey(req: LlmRequest, model: string): string {
  return sha256(JSON.stringify({ v: req.promptVersion, model, system: req.system, prompt: req.prompt, schema: req.schema }));
}

export async function complete<T = unknown>(req: LlmRequest): Promise<LlmResult<T>> {
  const model = req.model ?? defaultModel("misc");
  const hash = cacheKey(req, model);
  const path = resolve(CACHE, req.tag, `${hash}.json`);
  if (existsSync(path)) {
    const entry = readJson<{ meta: LlmMeta; output: T }>(path);
    return { output: entry.output, cached: true, meta: entry.meta };
  }
  if (process.env.LLM_CACHE_ONLY === "1") {
    throw new Error(`LLM cache miss for ${req.tag}/${req.label ?? hash} while LLM_CACHE_ONLY=1. Run the step locally (npm run wave) and commit pipeline/.cache.`);
  }
  const backend = process.env.LLM_BACKEND === "api" && process.env.ANTHROPIC_API_KEY ? "api" : "cli";
  const validate = ajv.compile(req.schema);
  let lastErr = "";
  const started = Date.now();
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const prompt = attempt === 1 ? req.prompt : `${req.prompt}\n\nYour previous answer was rejected: ${lastErr.slice(0, 600)}\nReturn JSON that satisfies the schema exactly.`;
      const raw = backend === "cli" ? await callCli({ ...req, prompt }, model) : await callApi({ ...req, prompt }, model);
      const output = raw.output;
      if (!validate(output)) {
        lastErr = "schema validation failed: " + ajv.errorsText(validate.errors, { separator: "; " });
        log(`${req.label ?? req.tag}: attempt ${attempt} ${lastErr}`);
        continue;
      }
      const meta: LlmMeta = {
        backend, model: raw.model ?? model, prompt_version: req.promptVersion, created_at: new Date().toISOString(), hash,
        usage: raw.usage, cost_usd: raw.cost_usd, duration_ms: Date.now() - started, attempts: attempt,
      };
      writeJson(path, { meta, request: { tag: req.tag, label: req.label, system: req.system, prompt: req.prompt, schema: req.schema }, output });
      return { output: output as T, cached: false, meta };
    } catch (e: any) {
      lastErr = String(e?.message ?? e);
      log(`${req.label ?? req.tag}: attempt ${attempt} failed: ${lastErr.slice(0, 300)}`);
      await sleep(2000 * attempt);
    }
  }
  throw new Error(`LLM call failed after 3 attempts (${req.label ?? req.tag}): ${lastErr}`);
}

function log(msg: string) { console.error(`  [llm] ${msg}`); }
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface RawResult { output: unknown; model?: string; usage?: unknown; cost_usd?: number }

async function callCli(req: LlmRequest, model: string): Promise<RawResult> {
  const args = [
    "-p", "--model", model, "--tools", "", "--strict-mcp-config", "--no-session-persistence",
    "--disable-slash-commands", "--permission-prompts", "none",
    "--system-prompt", req.system, "--output-format", "json", "--json-schema", JSON.stringify(req.schema),
    "--max-budget-usd", String(req.maxBudgetUsd ?? 6),
  ];
  const { stdout, stderr, code } = await run("claude", args, req.prompt, 15 * 60_000);
  if (code !== 0 && !stdout.trim()) throw new Error(`claude exited ${code}: ${stderr.slice(-500)}`);
  let envelope: any;
  try { envelope = JSON.parse(stdout); } catch {
    // sometimes extra lines precede the JSON; take the last JSON object
    const idx = stdout.lastIndexOf("\n{");
    envelope = JSON.parse(idx >= 0 ? stdout.slice(idx + 1) : stdout);
  }
  if (envelope.is_error) throw new Error(`claude error: ${String(envelope.result).slice(0, 400)}`);
  let output = envelope.structured_output;
  if (output === undefined) output = parseJsonLoose(String(envelope.result ?? ""));
  const modelUsed = envelope.modelUsage ? Object.keys(envelope.modelUsage)[0] : model;
  return { output, model: modelUsed, usage: envelope.usage, cost_usd: envelope.total_cost_usd };
}

async function callApi(req: LlmRequest, model: string): Promise<RawResult> {
  const apiModel = API_MODELS[model] ?? model;
  const body = {
    model: apiModel, max_tokens: 16000, system: req.system,
    messages: [{ role: "user", content: req.prompt }],
    tools: [{ name: "emit", description: "Emit the structured result", input_schema: req.schema }],
    tool_choice: { type: "tool", name: "emit" },
  };
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": process.env.ANTHROPIC_API_KEY!, "anthropic-version": "2023-06-01" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 400)}`);
  const data: any = await res.json();
  const tool = (data.content ?? []).find((c: any) => c.type === "tool_use");
  if (!tool) throw new Error("API returned no tool_use block");
  return { output: tool.input, model: data.model, usage: data.usage };
}

function parseJsonLoose(text: string): unknown {
  const t = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  try { return JSON.parse(t); } catch { /* fall through */ }
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a >= 0 && b > a) return JSON.parse(t.slice(a, b + 1));
  throw new Error("no JSON object in model output");
}

function run(cmd: string, args: string[], stdin: string, timeoutMs: number): Promise<{ stdout: string; stderr: string; code: number | null }> {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(cmd, args, { stdio: ["pipe", "pipe", "pipe"], env: { ...process.env, CLAUDE_CODE_ENABLE_TELEMETRY: "0" } });
    let stdout = "", stderr = "";
    const timer = setTimeout(() => { child.kill("SIGKILL"); reject(new Error(`timeout after ${timeoutMs} ms`)); }, timeoutMs);
    child.stdout.on("data", (d) => (stdout += d));
    child.stderr.on("data", (d) => (stderr += d));
    child.on("error", (e) => { clearTimeout(timer); reject(e); });
    child.on("close", (code) => { clearTimeout(timer); resolvePromise({ stdout, stderr, code }); });
    child.stdin.end(stdin);
  });
}

/** Run async tasks with a concurrency limit, preserving order of results. */
export async function pMap<T, R>(items: T[], fn: (item: T, i: number) => Promise<R>, concurrency = 3): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (next < items.length) { const i = next++; results[i] = await fn(items[i], i); }
  });
  await Promise.all(workers);
  return results;
}
