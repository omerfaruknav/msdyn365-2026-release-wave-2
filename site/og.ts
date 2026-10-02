/** og:image generation: an SVG card rendered to PNG with resvg. Falls back to SVG files if resvg cannot load. */
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export function ogSvg(opts: { title: string; number: string; line: string; wave: string }): string {
  const t = opts.title.length > 42 ? opts.title.slice(0, 41) + "…" : opts.title;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b4f5c"/><stop offset="1" stop-color="#0e1619"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
<g opacity=".18" fill="none" stroke="#35b3c6" stroke-width="2">${Array.from({ length: 7 }, (_, i) => `<circle cx="1020" cy="330" r="${80 + i * 55}"/>`).join("")}</g>
<path d="M90 70 123 89v38l-33 19-33-19V89z" fill="#35b3c6"/><path d="M90 70v38l33-19z" fill="#6fd3e0"/>
<text x="140" y="105" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" fill="#bfe6ee">Business Central ${esc(opts.wave)} · unofficial launch event map</text>
<text x="90" y="300" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="150" font-weight="700" fill="#ffffff" letter-spacing="-4">${esc(opts.number)}</text>
<text x="90" y="380" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="44" font-weight="600" fill="#e6eef1">${esc(t)}</text>
<text x="90" y="440" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" fill="#9db2bb">${esc(opts.line)}</text>
<text x="90" y="570" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="26" fill="#6fd3e0">waldo1001.github.io/msdyn365-2026-release-wave-2 · built from YouTube auto-captions, every quote deep-linked</text>
</svg>`;
}

export async function writeOg(dir: string, name: string, svg: string): Promise<"png" | "svg"> {
  mkdirSync(dir, { recursive: true });
  try {
    const { Resvg } = await import("@resvg/resvg-js");
    const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 }, font: { loadSystemFonts: true } }).render().asPng();
    writeFileSync(resolve(dir, `${name}.png`), png);
    return "png";
  } catch (e: any) {
    writeFileSync(resolve(dir, `${name}.svg`), svg);
    return "svg";
  }
}
