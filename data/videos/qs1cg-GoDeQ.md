---
id: qs1cg-GoDeQ
title: "What's new: MCP Server"
wave: 2026w2
url: https://www.youtube.com/watch?v=qs1cg-GoDeQ
thumbnail: https://i.ytimg.com/vi/qs1cg-GoDeQ/hqdefault.jpg
duration_seconds: 495
area: copilot-and-agents
audience:
  - developer
  - consultant
  - admin
  - partner
presenters:
  - Kenny Pontabidan?
  - Pushad Dvidi (also heard as Porsch, Purad, Porchard, Porshad)?
features:
  - mcp-data-tools
  - mcp-server-toggle
  - mcp-server-features-box
  - mcp-server-landing-page
status_mentions:
  unclear: 5
chapters: 7
quotes: 9
disclaimers: 0
docs_matched: 1
transcript: data/transcripts/full/qs1cg-GoDeQ.md
---

# What's new: MCP Server

> This launch video covers two changes to the MCP server in Business Central. The first is a set of four new data tools. They let an MCP host such as Copilot Studio or VS Code have an LLM write AL queries that Business Central compiles and runs, so no APIs are needed. A live demo shows an agent finding tables, reading schemas and relations, compiling queries and analysing customers and orders. The second part covers a new "server features" box in the MCP configuration page and a new toggle on the Copilot and agent capabilities page that turns the MCP server on or off. The video notes that the data tools inherit the limits of AL queries, including limits on data volume and run time, and points to aka.ms/bcmcp for more.

Watch: https://www.youtube.com/watch?v=qs1cg-GoDeQ (8:15). Area: Copilot and agents. Audience: developer, consultant, admin, partner. Presenters as heard: Kenny Pontabidan (low confidence), Pushad Dvidi (also heard as Porsch, Purad, Porchard, Porshad) (low confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=0s) Introduction and presenters (1 min)
- [0:36](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=36s) Overview of the four new data tools (1 min)
- [1:44](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=104s) Demo: agent explores tables and docs (3 min)
- [4:17](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=257s) Demo: relations, compiling and running AL queries (1 min)
- [5:05](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=305s) Limits of query-based data access (1 min)
- [6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) New MCP configuration UX and server toggle (1 min)
- [7:32](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=452s) Landing page and wrap-up (1 min)

## Features in this video

- [MCP data tools](../features/mcp-data-tools.md) - status not stated - [0:36 to 6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=36s), demo [1:44 to 5:05](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=104s) - Four system tools (find tables, table relations, table schema, data query) let an LLM write AL queries that Business Central compiles and runs, with no APIs needed.
- [MCP server on/off toggle](../features/mcp-server-toggle.md) - status not stated - [6:04 to 7:32](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) - A toggle on the Copilot and agent capabilities page activates or deactivates the MCP server as a whole.
- [Server features box in MCP configuration](../features/mcp-server-features-box.md) - status not stated - [6:04 to 7:14](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s), demo [6:30 to 7:14](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=390s) - The MCP configuration page separates server features from APIs and shows which system tools each feature enables.
- [MCP server landing page](../features/mcp-server-landing-page.md) - status not stated - [7:32 to 7:47](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=452s) - The Business Central MCP server has its own session and a landing page at aka.ms/bcmcp.

## Quotes

- [1:03](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=63s) "there's basically no need to use APIs or anything it just works like that" - Design decision: data access through queries instead of purpose-built APIs.
- [1:16](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=76s) "we have uh introduced four new system tools" - States the scope of the release: four new system tools for data access.
- [2:01](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=121s) "it completely depends on the permissions that you already have the tables that you have access to in business central" - Access is governed by the user's existing table permissions, not by API definitions.
- [2:46](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=166s) "takes 30 steps. It takes 2 minutes. It's a good example of a longunning agent" - Gives a concrete figure for how long a data-analysis run takes in the demo.
- [3:49](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=229s) "we have seen that newer models are actually pretty good at writing EL query" - Explains why the optional Microsoft Docs MCP server is not needed much with newer models.
- [4:38](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=278s) "the compilation messages you get is directly from our compiler" - Agents get real compiler errors, which lets them fix their own queries.
- [5:25](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=325s) "So whatever you can express in an AL query is now available to agents." - Defines the capability boundary of the data tools.
- [5:48](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=348s) "there are also limitations in queries in business central on how much data can be returned and for how long the query can run" - States a limitation that affects what analysis is practical.
- [7:14](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=434s) "a new toggle in uh in the copilot and agent capabilities page where you can uh activate or deactivate the MCP server as such" - Admins get a single switch to turn the MCP server off entirely.

## Documented features matched

- MCP data tools -> [Run data queries with MCP Server](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#run-data-queries-with-mcp-server) (high confidence, docs say GA)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/qs1cg-GoDeQ.md](../transcripts/full/qs1cg-GoDeQ.md) (JSON segments: [qs1cg-GoDeQ.json](../transcripts/full/qs1cg-GoDeQ.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/qs1cg-GoDeQ/hqdefault.jpg_
