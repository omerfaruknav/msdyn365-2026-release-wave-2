---
slug: profiling-mcp
name: Profiling MCP for agents
wave: 2026w2
area: developer-tools
status: ga
status_source: implied
status_conflict: false
videos:
  - id: UFLo2XGGS14
    t_start: 671.6
    t_end: 853.4
  - id: D_Lur52IrIg
    t_start: 1799.5
    t_end: 1977.4
airtime_seconds: 360
demoed: true
release_plan:
  matched: true
  id: profile-slow-business-central-sessions-with-ai-agents
  title: Profile slow Business Central sessions with AI agents
  confidence: high
  url: https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#profile-slow-business-central-sessions-with-ai-agents
  doc_status: ga
tags:
  - mcp
  - profiling
  - performance
  - agents
  - al
  - vs-code
  - permissions
  - copilot
  - sql
  - demo
dev_relevance: high
quotes: 6
---

# Profiling MCP for agents

> A coding agent can start, monitor and stop a sampling profile through the AL tool proxy or the Business Central MCP server, given a session ID. It returns CPU profile files and an overview of duration, SQL and HTTP calls, and the demo found a background codeunit producing 30,000 rows.

Area: [Developer tools](../areas/developer-tools.md). Status: **GA**. Developer relevance: high. Airtime: 6 min across 2 videos, demoed.

## Status evidence

- Nothing said about status; launch event convention: generally available unless stated otherwise.

## Where they talk about it

- [What's new: Agentic Developer Loop](../videos/UFLo2XGGS14.md): [11:11 to 14:13](https://www.youtube.com/watch?v=UFLo2XGGS14&t=671s), demo at [13:05](https://www.youtube.com/watch?v=UFLo2XGGS14&t=785s) (called "Sampling profiling MCP server" and "Profiling a slow session with a user-provided session ID (demo)" there)
- [What's new in AL and Tools](../videos/D_Lur52IrIg.md): [29:59 to 32:57](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1799s), demo at [31:39](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1899s) (called "Launch profiling MCP proxy" there)

## Quotes

- [11:26](https://www.youtube.com/watch?v=UFLo2XGGS14&t=686s) "To start a profiling schedule, the agent needs the numeric business central session ID that it should target." - Key difference from snapshot debugging: profiling needs a known session ID.
- [12:22](https://www.youtube.com/watch?v=UFLo2XGGS14&t=742s) "It also returns an overview of activity duration, CQL calls, HTTP calls and only for the MCP server memory information." - Lists what the profiling output contains, including the memory information limit to the MCP server.
- [12:35](https://www.youtube.com/watch?v=UFLo2XGGS14&t=755s) "The permissions are again checked by Business Central for the signin user." - Agents run with the signed-in user's permissions, with the same rules as the manual workflow.
- [12:51](https://www.youtube.com/watch?v=UFLo2XGGS14&t=771s) "To profile another user session, you need the D365 attach debug permission set." - Names the permission set required to profile someone else's session.
- [30:48](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1848s) "coding agents can now capture the performance profiles and the snapshot recordings themselves through dedicated MCP uh tools with no active debugging session" - Core announcement: agents can start profiles and snapshots without a debugging session set up by the developer.
- [31:01](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1861s) "You still need to judge uh what the evidence that it find means" - Sets the limit: the agent captures evidence but the human interprets it.

## Caveats mentioned

- No actual profiling was run in the demo, only the command and its parameters were shown
- The developer still has to judge what the captured evidence means
- Work happens on the server, the proxy is only an interface for the client
- The agent needs the numeric Business Central session ID to start a profiling schedule, unlike snapshot debugging.
- The session ID can come from the help and support page of the web client or be inferred from telemetry.
- The brief overview depends on the prompt; a detailed result needs a detailed prompt.

## Prerequisites mentioned

- The AL tool
- An agentic framework that can use the MCP proxy
- A target environment
- To profile your own session: permission to create profile schedules and read the performance profile
- To profile another user session: D365 attach debug permission set
- MCP server configured with environment and environment type

## Documented features match

- [Profile slow Business Central sessions with AI agents](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#profile-slow-business-central-sessions-with-ai-agents) - high confidence (llm). Docs say: General availability, roadmap id 573335. Agent-driven profiling with CPU, SQL and HTTP summary

Docs checked on 2026-10-02: the match is against Microsoft's what's new pages for the wave as they were on that date. Microsoft keeps filling the documentation, so "no documented item" can go stale. The wider product documentation on learn.microsoft.com was searched for this feature on the same date; the feature's data lists an article when one was found.

Tags: mcp, profiling, performance, agents, al, vs-code, permissions, copilot, sql, demo

_Generated by pipeline step 06. Source: YouTube auto-captions of the launch event videos, see the deep links. Not official._
