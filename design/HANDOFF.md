# HANDOFF - BC 2026 wave 2, mapped

Unofficial, made by waldo. This file goes with `design/tokens.json` and the artboards on the canvas. Component names below are the names to use in code.

## Decisions

- **Direction: sunburst. Confirmed by waldo on 2026-10-02.** The Facets and Circle packing thumbnails on the Directions board are rejected alternatives. Do not build them.
- Defaults that stand unless waldo says otherwise: features sit under the video they appear in and keep their own area color; `unclear` is the calm pale default; fonts are Schibsted Grotesk and JetBrains Mono; area order is `tokens.area.order`.

## How to use this folder

1. Read this file top to bottom.
2. Take every color, size, radius and duration from `design/tokens.json`. Do not eyeball them from the artboards.
3. Open `design/artboards/Main.dc.html` and read its script block. It has working arc math, status fills, filter and dim logic and label placement. Port the logic, not the markup: the prototype stacks one svg per node and bakes the data in. Production is one svg, D3, and the pipeline's JSON.
4. The other artboards are reference for layout and copy. The ten `Home*.dc.html` files only set props on Main.
5. The BC icon is not in this folder. Use waldo's original PNG, unmodified.

## 0. Things to know before you start

- **The icon is round, not faceted.** The attached Business Central icon is four overlapping circles and two 45 degree sweeps. The visual language is derived from that: circles, rings, rounded joins, 45 degree hatch. Nothing angular.
- **Status reality check.** In the current data 26 of 30 features are `unclear` and 4 are `ga`. Zero are `preview`. So `unclear` is designed as the calm default (a pale tint) and `ga` / `preview` are the ones that pop. Do not style `unclear` as a warning.
- **Only 3 of 38 videos have features.** The prototype fills the other 35 videos with unnamed "slots" (one per ~180 s of video) so the geometry is tested at ~158 nodes. Slots are a prototype device. In production, a video with a transcript but no features yet renders as ONE ghost node (see board "State - videos without features as ghosts").
- **Video to area mapping** in the prototype is by title and reproduces 89 min / 73 min / 7h09. Take the real mapping from the pipeline.
- Never use em-dashes in copy. Plain hyphen.

## 1. Map (sunburst)

### Sizing rule (the one thing to implement exactly)

1. Wave level: each **area** gets an angle = sum of its videos' `duration_seconds` / total seconds x 360.
2. Inside an area, each **video** gets its share of the area's angle by `duration_seconds`. Videos are not drawn at wave level, they only position the features.
3. Inside a video's angle, each **feature** gets `airtime_seconds / sum(airtime_seconds of that video's features)`. Normalising is needed because feature ranges overlap (3457 s of features in 2284 s of video).
4. A feature is placed under the video it appears in, and colored by its own `area`. That is why two slate "Admin and platform" nodes sit inside the violet Copilot arc: the MCP toggle was shown in the MCP video. Keep this, it is information.
5. Area level: ring 1 = the area's videos over the full 360 degrees, ring 2 = features, same rules 2-3.
6. Start at 12 o'clock, clockwise. Area order = `tokens.area.order`.

### SVG structure

One `<svg>` per map. (The prototype stacks one svg per node only because of the prototyping tool. Do not copy that.)

```
svg.wm-map[data-level="wave|area|feature"][viewBox="0 0 S S"]
  defs
    pattern#wm-hatch            45 degree stripes in color.bg
  g.wm-ring.wm-ring--1
    a.wm-node.wm-node--area[data-area][href="#/a/<slug>"]      (wave level)
    a.wm-node.wm-node--video[data-video]                        (area level)
      path.wm-node__shape
  g.wm-ring.wm-ring--2
    a.wm-node.wm-node--feature[data-slug][data-area][data-status][data-dev][href="#/f/<slug>"]
      path.wm-node__shape        fill by status treatment
      path.wm-node__hatch        only when status=preview, fill url(#wm-hatch)
      path.wm-node__dev          outer tick, only when dev=high
    a.wm-node.wm-node--ghost[data-video]
  g.wm-labels
    text.wm-label / foreignObject
  g.wm-center
    image (the BC icon, unmodified)   wave level
    g.wm-center__back                 area level: area name, minutes, esc hint
```

State classes: `.is-dim` (filter miss, opacity .13), `.is-selected` (2.5px stroke in color.text), `.is-hover` (1.5px stroke in color.text), `.is-unselected` (opacity .4 while a sibling is selected).

Radii are fractions of R in `tokens.map.radii`. Gaps between nodes are a stroke in `color.bg` with round joins, not a pad angle. That gives the soft, icon-like corners for free.

### Zoom levels

- **wave**: ring 1 areas, ring 2 all features. Center = icon. Area labels outside the rings (name + minutes).
- **area**: center becomes a round button with the area name, minutes and `esc`. Ring 1 = videos, numbered; the left column lists the same numbers with titles and lengths. Feature labels outside for arcs of 8 degrees or more.
- **feature**: same as area, selected node outlined, siblings at 40%, detail panel open.

Routing: `#/` wave, `#/a/<area-slug>` area, `#/f/<feature-slug>` feature (implies its area). Use `history.pushState` per level so browser back walks feature -> area -> wave.

Keyboard: nodes are `<a>` elements in DOM order. Left/Right move between siblings on the current ring, Enter zooms in or opens the panel, Escape goes up one level. Focus ring = the hover stroke plus 2px offset outline in `color.link`.

### Not pixel-exact on purpose

- Label positions. The prototype places labels at the arc midpoint with no collision handling. Add simple collision avoidance (nudge along the tangent, drop the smallest first).
- The zoom animation. The prototype fades and scales the whole map. Production should tween each arc's start/end angle and radii (d3.interpolate on angles, 450 ms, `cubic-bezier(.2,.8,.2,1)`), so the clicked arc visibly grows into the full ring.
- Slot sizes (pseudo-random, prototype only).
- Timeline "compact row" demo bands are approximate.

## 2. Components

| Name | Notes |
|---|---|
| **map node** | See above. Three zoom levels. Hover shows a tooltip: name, minutes, status. |
| **detail panel** | Right side 400px (>=1200), 340px (700-1199), bottom sheet at 66% height (<700). Order: area, feature name, status badge + minutes + dev relevance, "the sentence that proves it" (status_evidence quote with chip, or the fallback line when null), summary, quotes, videos, docs match + confidence badge, tags, share. Scrolls internally. Escape or the close button closes it and returns to area level. |
| **timestamp chip** | `12:34` + play triangle, mono 12/700, 24px high, radius 6. It is always an `<a>` to `https://www.youtube.com/watch?v=<id>&t=<seconds>s`. Hover: the chip widens to the right to reveal the video title in regular weight (max 28 chars, ellipsis), 120 ms. Also set `title`. Light: navy chip, mint text. Dark: mint chip, navy text. |
| **filter bar** | Status pills (with glyph and count), dev relevance pills (mono), search field. Area filter = the area legend rows in the left column on desktop, a scrolling chip row on mobile. Filters dim, never remove. Multiple status pills are OR, different filter groups are AND. |
| **breadcrumb** | `Wave 2026w2 / Area / Feature`. Last crumb bold and not a link. |
| **status badge** | Pill with the status glyph + label. Glyph is the same treatment as the map node. |
| **confidence badge** | Mono, 4 steps by border weight, not hue: high = filled, medium = 1.5px solid, low = 1px solid muted, none = 1px dashed muted. |
| **video card** | Thumbnail 96x54 (`https://i.ytimg.com/vi/<id>/hqdefault.jpg`, object-fit cover), title, length, start chip. Thumbnails are placeholders on the canvas because the design tool blocks external images. |
| **timeline strip** | 28px track, radius 14. Chapters = alternating 42% / 30% tints of the video's area color. Demo ranges = inset band in the full area color. Disclaimer moments = 2px ticks in the expense-agent orange, below the track. Feature mentions = 8px dots above the track. Whole strip is one click target; x position maps to seconds. Hover shows a playhead and a timestamp chip. Compact row (12px track, no dots) for the 38-row list; width is proportional to video length. |
| **legend/headline block** | Display type. Slots: `{total h mm} of video. {n} min developer tools. {n} min Expense Agent. {N} min of the word agentic.` The first three come from airtime data, the last from the buzzword counts. Collapses to one line at 1024. |
| **bingo cell** | Square, radius 12. Default, marked (mint fill, rotated -3 degrees, weight 800), free square (always marked, not rotated). Print: black on white, 1px borders, no rotation. |
| **search result row** | Timestamp chip in an 84px left column, passage with `<mark>` on matched words, mono caption with video title and feature. |

## 3. States

- **Loading**: two pulsing ring outlines + the icon. No spinner.
- **Empty filters**: map stays, fully dimmed, with a small card and a "Clear filters" button.
- **Ghosts**: a video with no features (or no transcript) is one dashed outline node sized by video length. Never a gap.

## 4. Responsive

- **1440**: left column 280 (headline + legend), map, panel overlays the right 400.
- **1024**: no left column, headline as one line above the breadcrumb, panel 340.
- **390**: no sunburst. Stacked list of areas, each with a mini donut showing its slice of the wave, minutes and video count. Tap goes to a feature list (status glyph, name, minutes). Feature detail is the bottom sheet. All targets 44px or more.

## 5. Social and favicon

- Social 1200x630: icon, wave name, one big number, one short line, the map bleeding off the right edge. Home is dark, feature is light.
- Favicon: see the design system board. Two concentric broken rings on navy, from the map geometry. Not the BC icon.
