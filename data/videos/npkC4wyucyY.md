---
id: npkC4wyucyY
title: What's new in BC-Bench
wave: 2026w2
url: https://www.youtube.com/watch?v=npkC4wyucyY
thumbnail: https://i.ytimg.com/vi/npkC4wyucyY/hqdefault.jpg
duration_seconds: 898
area: developer-tools
audience:
  - developer
  - partner
presenters:
  - Yos?
  - Mharen?
  - Javan?
features:
  - bc-bench-code-review
  - bc-bench-contamination-detection
  - bc-bench
  - bc-bench-own-data-set
  - al-code-review-approaches
  - al-mcp-server-coding-agents
  - bc-bench-bug-fixing
  - bc-bench-harness-comparison
status_mentions:
  unclear: 9
chapters: 5
quotes: 8
disclaimers: 2
docs_matched: 0
transcript: data/transcripts/full/npkC4wyucyY.md
---

# What's new in BC-Bench

> This session covers what is new in BC-Bench, a benchmark that tests AI coding agents on real AL development tasks. It recaps the bug fixing category and shows that the AL MCP server improves agent results by almost 10% on pass@5, while the choice of agent harness matters little. It explains a contamination check that asks models to guess file paths without the codebase, and only 1 of 101 tasks matched. It then introduces a new code review category with three review approaches and an LLM-as-judge method, with results still being worked on. It closes with advice for partners to fork the open-source repository and run it on their own data.

Watch: https://www.youtube.com/watch?v=npkC4wyucyY (14:58). Area: Developer tools. Audience: developer, partner. Presenters as heard: Yos (low confidence), Mharen (low confidence), Javan (low confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=npkC4wyucyY&t=0s) Recap: what BC-Bench is and why AL needs its own benchmark (3 min)
- [2:46](https://www.youtube.com/watch?v=npkC4wyucyY&t=166s) Bug fixing results and the AL MCP server (2 min)
- [5:10](https://www.youtube.com/watch?v=npkC4wyucyY&t=310s) Contamination detection (3 min)
- [8:34](https://www.youtube.com/watch?v=npkC4wyucyY&t=514s) New code review category (5 min)
- [13:05](https://www.youtube.com/watch?v=npkC4wyucyY&t=785s) How partners can use BC-Bench and where to find it (2 min)

## Features in this video

- [BC-Bench evaluation framework](../features/bc-bench.md) - status not stated - [0:06 to 2:46](https://www.youtube.com/watch?v=npkC4wyucyY&t=6s) - A reproducible open-source framework evaluates AI coding agents on real AL tasks from real PRs and tests.
- [BC-Bench bug fixing category](../features/bc-bench-bug-fixing.md) - status not stated - [2:46 to 3:19](https://www.youtube.com/watch?v=npkC4wyucyY&t=166s) - Agents fix bugs in the real codebase across 101 tasks from bugs human engineers fixed.
- [AL MCP server for coding agents](../features/al-mcp-server-coding-agents.md) - status not stated - [3:19 to 4:40](https://www.youtube.com/watch?v=npkC4wyucyY&t=199s) - The AL MCP server exposes compile, publish and search to agents without VS Code.
- [Agent harness comparison](../features/bc-bench-harness-comparison.md) - status not stated - [4:40 to 5:10](https://www.youtube.com/watch?v=npkC4wyucyY&t=280s) - With the same model, GitHub Copilot CLI and Claude Code showed no significant difference.
- [Contamination detection](../features/bc-bench-contamination-detection.md) - status not stated - [5:10 to 8:34](https://www.youtube.com/watch?v=npkC4wyucyY&t=310s), demo [6:25 to 7:38](https://www.youtube.com/watch?v=npkC4wyucyY&t=385s) - Models get only the repo name and bug description and must name files to modify.
- [BC-Bench code review category](../features/bc-bench-code-review.md) - status not stated - [8:34 to 13:05](https://www.youtube.com/watch?v=npkC4wyucyY&t=514s), demo [10:55 to 12:54](https://www.youtube.com/watch?v=npkC4wyucyY&t=655s) - A category tests whether AI can review AL changes against an expected comment.
- [AL code review approaches](../features/al-code-review-approaches.md) - status not stated - [9:24 to 10:55](https://www.youtube.com/watch?v=npkC4wyucyY&t=564s) - BC-Bench compares plain Copilot CLI, BC Quality as a plug-in and the AL review agent.
- [Run BC-Bench on your own data set](../features/bc-bench-own-data-set.md) - status not stated - [13:05 to 14:41](https://www.youtube.com/watch?v=npkC4wyucyY&t=785s) - Partners can fork the open-source repo and use their own bug fixes, tests and PRs.

## Quotes

- [1:13](https://www.youtube.com/watch?v=npkC4wyucyY&t=73s) "the general coding benchmarks like SWEBench don't uh reflect the AL development realities" - States the core reason BC-Bench exists as a separate benchmark.
- [1:35](https://www.youtube.com/watch?v=npkC4wyucyY&t=95s) "there's only 400 um that are written in AL. Well, there's 3.3 million in Python and 650,000 in C." - Gives the numbers showing how small the open-source AL ecosystem is.
- [4:07](https://www.youtube.com/watch?v=npkC4wyucyY&t=247s) "we find that AMCP uh gives the coding agents a meaningful improvement over uh when the coding agent don't have access to it." - Main result: the AL MCP server helps coding agents on AL tasks.
- [4:30](https://www.youtube.com/watch?v=npkC4wyucyY&t=270s) "Well, it does take a bit longer but I think that makes sense because the agent now has to uh publish apps" - Names the cost of the MCP server gain: longer runs.
- [4:57](https://www.youtube.com/watch?v=npkC4wyucyY&t=297s) "So the choice of models probably matter more than the choice of agent harness at least using our data set." - Design guidance: pick the model carefully, the harness matters less.
- [7:54](https://www.youtube.com/watch?v=npkC4wyucyY&t=474s) "for all three models they only managed to uh come up with one out of 101 tasks" - Key number showing very little sign of memorization of the data set.
- [12:54](https://www.youtube.com/watch?v=npkC4wyucyY&t=774s) "we are still working hard on the results. Uh so please check back uh on our GitHub repository" - Code review results are not final in this video.
- [13:47](https://www.youtube.com/watch?v=npkC4wyucyY&t=827s) "you want to fork our repository and replace the data set that we have created for our own AL app issues" - Concrete advice for partners on adapting BC-Bench to their own apps.

## Disclaimers and status moments

- [8:14](https://www.youtube.com/watch?v=npkC4wyucyY&t=494s) other: "this is not a one-time effort we will be continuous continuously monitoring the signs of contamination"
- [12:54](https://www.youtube.com/watch?v=npkC4wyucyY&t=774s) coming-later: "we are still working hard on the results"

## Documented features matched

- none of the features in this video matched an item in the documented features baseline

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/npkC4wyucyY.md](../transcripts/full/npkC4wyucyY.md) (JSON segments: [npkC4wyucyY.json](../transcripts/full/npkC4wyucyY.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/npkC4wyucyY/hqdefault.jpg_
