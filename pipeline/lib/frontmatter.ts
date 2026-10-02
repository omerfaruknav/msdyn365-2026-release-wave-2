import YAML from "yaml";

export function withFrontmatter(meta: Record<string, unknown>, body: string): string {
  const yaml = YAML.stringify(meta, { lineWidth: 0 }).trimEnd();
  return `---\n${yaml}\n---\n\n${body.trimEnd()}\n`;
}

export function parseFrontmatter(text: string): { meta: Record<string, any>; body: string } {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {}, body: text };
  return { meta: YAML.parse(m[1]) ?? {}, body: text.slice(m[0].length) };
}
