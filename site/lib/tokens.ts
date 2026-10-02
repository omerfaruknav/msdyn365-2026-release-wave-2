/**
 * design/tokens.json -> CSS custom properties and the map config the client reads.
 * The tokens file is the single source for colors, sizes and motion; site.css only consumes the variables.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ROOT } from "../../pipeline/lib/config.js";

export const TOKENS_FILE = resolve(ROOT, "design", "tokens.json");
export const tokens = JSON.parse(readFileSync(TOKENS_FILE, "utf8"));

const val = (v: any): string => (typeof v === "object" && v !== null ? v.value : v);

function themeVars(theme: "light" | "dark"): string {
  const c = tokens.color[theme];
  const vars: Record<string, string> = {
    "--bg": val(c.bg), "--surface": val(c.surface), "--text": val(c.text), "--muted": val(c.muted),
    "--line": val(c.line), "--border": "var(--line)", "--link": val(c.link), "--accent": val(c.accent),
    "--accent-strong": "var(--link)", "--focus": "var(--link)",
    "--surface-2": "color-mix(in srgb, var(--line) 45%, var(--surface))",
    "--chip-bg": c.chip.bg, "--chip-text": c.chip.fg, "--on-area": c.onArea,
  };
  for (const slug of tokens.area.order) vars[`--area-${slug}`] = tokens.area[slug][theme];
  return Object.entries(vars).map(([k, v]) => `${k}: ${v};`).join(" ");
}

export function tokensCss(): string {
  const m = tokens.map, mo = tokens.motion, r = tokens.radius, sp = tokens.space;
  const shared = [
    `--font: ${tokens.font.ui};`, `--mono: ${tokens.font.mono};`,
    `--wm-dim: ${m.dimOpacity};`, `--wm-unselected: ${m.unselectedOpacity};`,
    `--wm-stroke: ${m.nodeStroke.width}px;`, `--wm-stroke-narrow: ${m.nodeStroke["widthUnder1.2deg"]}px;`,
    `--wm-hover-ms: ${mo.hover.duration}ms;`, `--wm-hover-ease: ${mo.hover.easing};`,
    `--wm-dim-ms: ${mo.filterDim.duration}ms;`, `--wm-dim-ease: ${mo.filterDim.easing};`,
    `--wm-panel-ms: ${mo.panelOpen.duration}ms;`, `--wm-panel-ease: ${mo.panelOpen.easing};`, `--wm-panel-from: ${mo.panelOpen.from.replace(/,\s*opacity.*$/, "")};`,
    `--wm-sheet-ms: ${mo.sheetOpen.duration}ms;`, `--wm-sheet-ease: ${mo.sheetOpen.easing};`,
    `--r-chip: ${r.chip}px;`, `--r-pill: ${r.pill}px;`, `--r-card: ${r.card}px;`, `--r-panel: ${r.panel}px;`, `--r-sheet: ${r.sheet}px;`,
    `--gutter: ${sp.gutter}px;`, `--panel-desktop: ${sp.panelDesktop}px;`, `--panel-tablet: ${sp.panelTablet}px;`, `--left-column: ${sp.leftColumn}px;`, `--topbar: ${sp.topbar}px;`,
  ].join(" ");
  const dark = themeVars("dark");
  return `/* generated from design/tokens.json by site/lib/tokens.ts - do not edit */
:root { ${shared} ${themeVars("light")} color-scheme: light; }
:root[data-theme="dark"] { ${dark} color-scheme: dark; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ${dark} color-scheme: dark; } }
@media (prefers-reduced-motion: reduce) { :root { --wm-hover-ms: 0ms; --wm-dim-ms: 0ms; --wm-panel-ms: 0ms; --wm-sheet-ms: 0ms; } }
`;
}

/** The numbers map.js needs that CSS cannot carry (geometry, zoom tween, breakpoints, ring order). */
export function mapConfig() {
  return {
    radii: tokens.map.radii,
    labelMargin: { large: tokens.map.labelMargin["S>=640"], small: tokens.map.labelMargin["S<640"] },
    narrowDeg: 1.2,
    featureLabelMinAngle: tokens.map.featureLabelMinAngle,
    zoom: tokens.motion.zoom,
    breakpoints: tokens.breakpoints,
    areaOrder: tokens.area.order,
  };
}
