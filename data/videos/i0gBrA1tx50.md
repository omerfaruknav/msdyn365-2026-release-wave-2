---
id: i0gBrA1tx50
title: "What's new: ALGraph"
wave: 2026w2
url: https://www.youtube.com/watch?v=i0gBrA1tx50
thumbnail: https://i.ytimg.com/vi/i0gBrA1tx50/hqdefault.jpg
duration_seconds: 402
area: developer-tools
audience:
  - developer
  - partner
presenters:
  - Thaddeus?
features:
  - al-graph
  - al-graph-debuggable-boundary-audit
  - al-graph-http-client-callers
  - al-graph-meta-model-extraction
  - al-graph-dgml-sarif-export
  - al-graph-query-language
status_mentions:
  unclear: 6
chapters: 6
quotes: 9
disclaimers: 0
docs_matched: 6
transcript: data/transcripts/full/i0gBrA1tx50.md
---

# What's new: ALGraph

> This session introduces AL graph, a new tool in the AL tools package that builds call graphs of AL code. You first extract a meta model of caller and callee relationships once, then run as many queries on it as you like. The demo shows two queries: all callers of the HTTP client, and the calls from non-debuggable to debuggable methods. Results export as DGML for people to read or SARIF for agents to act on. The speaker says the team uses the tool internally to strengthen security, which matters more as agents make vulnerabilities easier to find.

Watch: https://www.youtube.com/watch?v=i0gBrA1tx50 (6:42). Area: Developer tools. Audience: developer, partner. Presenters as heard: Thaddeus (medium confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=i0gBrA1tx50&t=0s) Introduction: what AL graph is and why it helps (2 min)
- [1:38](https://www.youtube.com/watch?v=i0gBrA1tx50&t=98s) Query language and export formats (1 min)
- [2:19](https://www.youtube.com/watch?v=i0gBrA1tx50&t=139s) Demo: building the meta model (1 min)
- [3:15](https://www.youtube.com/watch?v=i0gBrA1tx50&t=195s) Demo: finding callers of the HTTP client (1 min)
- [4:24](https://www.youtube.com/watch?v=i0gBrA1tx50&t=264s) Demo: auditing non-debuggable to debuggable calls (2 min)
- [5:58](https://www.youtube.com/watch?v=i0gBrA1tx50&t=358s) Wrap-up and internal security use (1 min)

## Features in this video

- [AL graph](../features/al-graph.md) - status not stated - [0:18 to 1:38](https://www.youtube.com/watch?v=i0gBrA1tx50&t=18s), demo [2:19 to 5:58](https://www.youtube.com/watch?v=i0gBrA1tx50&t=139s) - A graph command in the AL tool builds a static call graph across an extension and its dependencies.
- [AL graph query language](../features/al-graph-query-language.md) - status not stated - [1:38 to 1:56](https://www.youtube.com/watch?v=i0gBrA1tx50&t=98s), demo [3:26 to 5:05](https://www.youtube.com/watch?v=i0gBrA1tx50&t=206s) - A query language supports complex queries such as all callers of an object or methods touching a table.
- [DGML and SARIF export](../features/al-graph-dgml-sarif-export.md) - status not stated - [1:56 to 2:19](https://www.youtube.com/watch?v=i0gBrA1tx50&t=116s), demo [3:26 to 4:13](https://www.youtube.com/watch?v=i0gBrA1tx50&t=206s) - Results export as DGML for humans or SARIF for agents.
- [AL graph meta model extraction](../features/al-graph-meta-model-extraction.md) - status not stated - [2:19 to 3:15](https://www.youtube.com/watch?v=i0gBrA1tx50&t=139s), demo [2:41 to 3:15](https://www.youtube.com/watch?v=i0gBrA1tx50&t=161s) - An extract subcommand builds a JSON meta model of caller-callee relationships once.
- [HTTP client caller query](../features/al-graph-http-client-callers.md) - status not stated - [3:15 to 4:24](https://www.youtube.com/watch?v=i0gBrA1tx50&t=195s), demo [3:26 to 4:13](https://www.youtube.com/watch?v=i0gBrA1tx50&t=206s) - A query exports everything calling the HTTP client, excluding tests, as a call path tree.
- [Non-debuggable boundary audit](../features/al-graph-debuggable-boundary-audit.md) - status not stated - [4:24 to 5:58](https://www.youtube.com/watch?v=i0gBrA1tx50&t=264s), demo [4:53 to 5:58](https://www.youtube.com/watch?v=i0gBrA1tx50&t=293s) - A query finds debuggable callees of non-debuggable methods, where a breakpoint could leak content.

## Quotes

- [1:10](https://www.youtube.com/watch?v=i0gBrA1tx50&t=70s) "one big one um, that we're quite focused on is the non-debuggable to debuggable boundary." - Names the main security use case the AL team built the tool for.
- [1:24](https://www.youtube.com/watch?v=i0gBrA1tx50&t=84s) "because, you know, you can inadvertently expose secrets that way." - Explains the risk behind crossing from non-debuggable to debuggable code.
- [2:08](https://www.youtube.com/watch?v=i0gBrA1tx50&t=128s) "there's also the SARIF format, you know, if you're interested in something more flat uh that um agent can act on easily." - Shows the design choice of a machine-friendly output format for agents next to the human-readable one.
- [3:04](https://www.youtube.com/watch?v=i0gBrA1tx50&t=184s) "you construct the meta model once and then you run your queries on the meta model." - Describes the core workflow: a single extraction step, then repeated queries.
- [4:24](https://www.youtube.com/watch?v=i0gBrA1tx50&t=264s) "this query language that all the different operations you can do this is all well documented on our um MS Learn website." - Points developers to MS Learn for the query syntax.
- [4:53](https://www.youtube.com/watch?v=i0gBrA1tx50&t=293s) "You generate the graph once and then you query it multiple times." - Repeats that the graph is reusable, so each query is cheap after the first extraction.
- [5:48](https://www.youtube.com/watch?v=i0gBrA1tx50&t=348s) "So, even though like the main procedure is non-debuggable and this is a local procedure, you're still leaking information this way." - Shows the non-obvious leak the tool finds, even when the entry procedure is non-debuggable.
- [5:58](https://www.youtube.com/watch?v=i0gBrA1tx50&t=358s) "we are using this quite heavily internally as well to strengthen our security posture." - States that the team uses the tool internally for security work.
- [6:12](https://www.youtube.com/watch?v=i0gBrA1tx50&t=372s) "it's more imperative that we have the tools to find them and fix them sooner." - Gives the reason for the tool: agents make vulnerabilities easier to discover.

## Documented features matched

- AL graph -> [Audit AL app accessibility and debugging boundaries](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#audit-al-app-accessibility-and-debugging-boundaries) (high confidence, docs say GA)
- Non-debuggable boundary audit -> [Audit AL app accessibility and debugging boundaries](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#audit-al-app-accessibility-and-debugging-boundaries) (high confidence, docs say GA)
- HTTP client caller query -> [Audit AL app accessibility and debugging boundaries](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#audit-al-app-accessibility-and-debugging-boundaries) (medium confidence, docs say GA)
- AL graph meta model extraction -> [Audit AL app accessibility and debugging boundaries](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#audit-al-app-accessibility-and-debugging-boundaries) (medium confidence, docs say GA)
- DGML and SARIF export -> [Audit AL app accessibility and debugging boundaries](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#audit-al-app-accessibility-and-debugging-boundaries) (medium confidence, docs say GA)
- AL graph query language -> [Audit AL app accessibility and debugging boundaries](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#audit-al-app-accessibility-and-debugging-boundaries) (medium confidence, docs say GA)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/i0gBrA1tx50.md](../transcripts/full/i0gBrA1tx50.md) (JSON segments: [i0gBrA1tx50.json](../transcripts/full/i0gBrA1tx50.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/i0gBrA1tx50/hqdefault.jpg_
