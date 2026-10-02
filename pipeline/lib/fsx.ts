import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname } from "node:path";

export function writeJson(path: string, value: unknown, pretty = true) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, pretty ? JSON.stringify(value, null, 2) + "\n" : JSON.stringify(value));
}
export function readJson<T = any>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}
export function readJsonIf<T = any>(path: string, fallback: T): T {
  return existsSync(path) ? readJson<T>(path) : fallback;
}
export function writeText(path: string, text: string) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text);
}
export function readText(path: string): string {
  return readFileSync(path, "utf8");
}
export function listFiles(dir: string, ext?: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => !f.startsWith(".") && (!ext || f.endsWith(ext)) && statSync(`${dir}/${f}`).isFile())
    .sort();
}
export { existsSync, mkdirSync };
