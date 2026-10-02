/**
 * Pipeline runner.
 *   tsx pipeline/run.ts all            steps 01-07 (LLM calls allowed unless LLM_CACHE_ONLY=1)
 *   tsx pipeline/run.ts deterministic  steps 04-07 only (what CI runs for a new wave)
 *   tsx pipeline/run.ts wave <wave>    steps 01-07 for that wave with LLM calls allowed
 *   extra args are passed to every step (e.g. --only id1,id2 --wave 2026w2)
 */
import { spawnSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const [mode = "all", ...rest] = process.argv.slice(2);
const steps: Record<string, string[]> = {
  all: ["01-clean-vtt", "02-extract", "03-merge-features", "04-match-release-plan", "05-analytics", "06-render-markdown", "07-build-search-index"],
  deterministic: ["04-match-release-plan", "05-analytics", "06-render-markdown", "07-build-search-index"],
  wave: ["01-clean-vtt", "02-extract", "03-merge-features", "04-match-release-plan", "05-analytics", "06-render-markdown", "07-build-search-index"],
};
if (!steps[mode]) { console.error(`unknown mode ${mode}; use all | deterministic | wave`); process.exit(2); }
const args = [...rest];
const env = { ...process.env };
if (mode === "wave") {
  delete env.LLM_CACHE_ONLY;
  const w = args.find((a) => !a.startsWith("--"));
  if (w) { env.WAVE = w; args.splice(args.indexOf(w), 1); }
}
const t0 = Date.now();
for (const step of steps[mode]) {
  const started = Date.now();
  const r = spawnSync(process.execPath, [resolve(here, "..", "node_modules", "tsx", "dist", "cli.mjs"), resolve(here, step, "index.ts"), ...args], { stdio: "inherit", env });
  if (r.status !== 0) { console.error(`pipeline: step ${step} failed (exit ${r.status})`); process.exit(r.status ?? 1); }
  console.log(`pipeline: ${step} ok (${Math.round((Date.now() - started) / 1000)}s)`);
}
console.log(`pipeline: ${mode} done in ${Math.round((Date.now() - t0) / 1000)}s`);
