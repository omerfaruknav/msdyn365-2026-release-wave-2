import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
export const DATA = resolve(ROOT, "data");
export const CACHE = resolve(ROOT, "pipeline", ".cache");
export const OUT = resolve(ROOT, "pipeline", "out");

export interface AreaDef { slug: string; name: string }
export interface WaveDef {
  name: string; short: string; event: string; channel: string; event_date: string;
  bc_version?: string; transcript_prefix: string;
  docs_baseline: { kind: string; url: string }[];
  compare_with_wave?: string; diff_only?: boolean;
}
export interface WavesConfig {
  default: string;
  waves: Record<string, WaveDef>;
  areas: AreaDef[];
  statuses: string[];
  audiences: string[];
}

export function loadWaves(): WavesConfig {
  return JSON.parse(readFileSync(resolve(ROOT, "config", "waves.json"), "utf8"));
}

/** Parse --wave, --only, --limit style args. Returns { wave, flags } */
export function parseArgs(argv = process.argv.slice(2)) {
  const flags: Record<string, string | boolean> = {};
  const positional: string[] = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("--")) { flags[key] = next; i++; }
      else flags[key] = true;
    } else positional.push(a);
  }
  const cfg = loadWaves();
  const wave = String(flags.wave || process.env.WAVE || cfg.default);
  if (!cfg.waves[wave]) throw new Error(`Unknown wave '${wave}'. Add it to config/waves.json.`);
  const only = typeof flags.only === "string" ? flags.only.split(",").map((s) => s.trim()).filter(Boolean) : null;
  return { wave, waveDef: cfg.waves[wave], cfg, flags, positional, only };
}

export function isPublicBuild(): boolean {
  if (process.env.PUBLIC_BUILD === "1") return true;
  return !existsSync(resolve(DATA, "transcripts", "full"));
}

export const AREA_SLUGS = () => loadWaves().areas.map((a) => a.slug);
