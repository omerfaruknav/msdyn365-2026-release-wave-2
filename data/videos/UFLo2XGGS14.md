---
id: UFLo2XGGS14
title: "What's new: Agentic Developer Loop"
wave: 2026w2
url: https://www.youtube.com/watch?v=UFLo2XGGS14
thumbnail: https://i.ytimg.com/vi/UFLo2XGGS14/hqdefault.jpg
duration_seconds: 1146
area: developer-tools
audience:
  - developer
  - partner
presenters:
  - Kberis (also addressed as Coleman / Common)?
  - Artur Wensel (also heard as Arthur)?
features:
  - al-language-server-agents
  - profiling-mcp
  - telemetry-triggered-snapshot
  - snapshot-debugging-mcp
  - agentic-slow-sql-analysis
  - agentic-developer-loop
  - snapshot-mcp-connection
status_mentions:
  unclear: 8
chapters: 8
quotes: 10
disclaimers: 2
docs_matched: 6
transcript: data/transcripts/full/UFLo2XGGS14.md
---

# What's new: Agentic Developer Loop

> This session shows how AI agents can troubleshoot Business Central problems in a loop: read the source, collect evidence from the real environment, then explain and fix. It covers the snapshot debugging MCP server, the AL language server protocol made available to agents, and the sampling profiling MCP server, all reached through the Business Central MCP server and the AL tool proxy. One demo uses an agent with telemetry polling to catch a posting error in a later user session and find which fields were blank. Another demo profiles a slow session, either from a session ID given by the user or fully by the agent through telemetry, and ends with a verdict on slow SQL and a missing index.

Watch: https://www.youtube.com/watch?v=UFLo2XGGS14 (19:06). Area: Developer tools. Audience: developer, partner. Presenters as heard: Kberis (also addressed as Coleman / Common) (low confidence), Artur Wensel (also heard as Arthur) (low confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=UFLo2XGGS14&t=0s) Introduction and agenda (1 min)
- [0:45](https://www.youtube.com/watch?v=UFLo2XGGS14&t=45s) The agentic developer loop and architecture (1 min)
- [2:11](https://www.youtube.com/watch?v=UFLo2XGGS14&t=131s) Snapshot debugging MCP: scenario and setup (2 min)
- [4:23](https://www.youtube.com/watch?v=UFLo2XGGS14&t=263s) Demo: snapshot debugging with telemetry polling (6 min)
- [10:16](https://www.youtube.com/watch?v=UFLo2XGGS14&t=616s) AI language server protocol (1 min)
- [11:11](https://www.youtube.com/watch?v=UFLo2XGGS14&t=671s) Sampling profiling MCP: session ID and permissions (2 min)
- [13:05](https://www.youtube.com/watch?v=UFLo2XGGS14&t=785s) Demos: profiling a slow session (5 min)
- [18:29](https://www.youtube.com/watch?v=UFLo2XGGS14&t=1109s) Key takeaway (1 min)

## Features in this video

- [Agentic developer loop](../features/agentic-developer-loop.md) - GA - [0:45 to 2:11](https://www.youtube.com/watch?v=UFLo2XGGS14&t=45s), demo [4:23 to 18:29](https://www.youtube.com/watch?v=UFLo2XGGS14&t=263s) - The agent plans an investigation and uses ALSP, the AL tool proxy and the Business Central MCP server for call stacks, variables and CPU profiles.
- [Snapshot debugging MCP for agents](../features/snapshot-debugging-mcp.md) - GA - [2:11 to 4:23](https://www.youtube.com/watch?v=UFLo2XGGS14&t=131s), demo [4:23 to 10:16](https://www.youtube.com/watch?v=UFLo2XGGS14&t=263s) - Agents can target an environment and start a snapshot recording for the next matching session, capturing values and call stacks.
- [Connecting to the snapshot debugging MCP server](../features/snapshot-mcp-connection.md) - GA - [3:28 to 4:23](https://www.youtube.com/watch?v=UFLo2XGGS14&t=208s) - Connect through the AL tool as MCP host, Visual Studio Code via launch.json starting the snapshot MCP proxy, or your own MCP host.
- [Telemetry-triggered snapshot capture](../features/telemetry-triggered-snapshot.md) - GA - [4:23 to 10:16](https://www.youtube.com/watch?v=UFLo2XGGS14&t=263s), demo [4:23 to 10:16](https://www.youtube.com/watch?v=UFLo2XGGS14&t=263s) - The agent arms snapshot debugging, sets snap points and polls telemetry for a specific error.
- [AL language server for agents](../features/al-language-server-agents.md) - GA - [10:16 to 11:11](https://www.youtube.com/watch?v=UFLo2XGGS14&t=616s), demo [17:39 to 18:03](https://www.youtube.com/watch?v=UFLo2XGGS14&t=1059s) - A standalone AL language server gives project-aware language intelligence over the language server protocol, not tied to Visual Studio Code.
- [Profiling MCP for agents](../features/profiling-mcp.md) - GA - [11:11 to 14:13](https://www.youtube.com/watch?v=UFLo2XGGS14&t=671s), demo [13:05 to 18:29](https://www.youtube.com/watch?v=UFLo2XGGS14&t=785s) - A coding agent can start, monitor and stop a sampling profile through the AL tool proxy or the Business Central MCP server, given a session ID.
- [Agentic slow SQL analysis via telemetry](../features/agentic-slow-sql-analysis.md) - GA - [14:33 to 17:39](https://www.youtube.com/watch?v=UFLo2XGGS14&t=873s), demo [14:33 to 17:39](https://www.youtube.com/watch?v=UFLo2XGGS14&t=873s) - An agent watches telemetry for slow SQL calls, finds the session and starts sampling.

## Quotes

- [2:00](https://www.youtube.com/watch?v=UFLo2XGGS14&t=120s) "understand the source, collect evidence from the real environment, and use that evidence to explain and fix the problem." - Defines the agentic developer loop that the whole session is built around.
- [3:28](https://www.youtube.com/watch?v=UFLo2XGGS14&t=208s) "The snapshot debugging MCP server is built into the standard Microsoft business central MCP infrastructure." - States that snapshot debugging for agents uses the standard Business Central MCP infrastructure, not a separate service.
- [6:13](https://www.youtube.com/watch?v=UFLo2XGGS14&t=373s) "So I instruct the agent agent to attach to the next session." - Shows the design choice of arming snapshot debugging for a future session when the user has already logged off.
- [11:26](https://www.youtube.com/watch?v=UFLo2XGGS14&t=686s) "To start a profiling schedule, the agent needs the numeric business central session ID that it should target." - Key difference from snapshot debugging: profiling needs a known session ID.
- [12:22](https://www.youtube.com/watch?v=UFLo2XGGS14&t=742s) "It also returns an overview of activity duration, CQL calls, HTTP calls and only for the MCP server memory information." - Lists what the profiling output contains, including the memory information limit to the MCP server.
- [12:35](https://www.youtube.com/watch?v=UFLo2XGGS14&t=755s) "The permissions are again checked by Business Central for the signin user." - Agents run with the signed-in user's permissions, with the same rules as the manual workflow.
- [12:51](https://www.youtube.com/watch?v=UFLo2XGGS14&t=771s) "To profile another user session, you need the D365 attach debug permission set." - Names the permission set required to profile someone else's session.
- [16:33](https://www.youtube.com/watch?v=UFLo2XGGS14&t=993s) "it actually says another issue that there was an issue with the index because we were indexing by category code." - Shows the agent finding a concrete index problem, not only the slow statements.
- [18:03](https://www.youtube.com/watch?v=UFLo2XGGS14&t=1083s) "it reached exactly the same conclusion that it found 30,000 rows." - The user-driven and fully agentic scenarios gave the same result.
- [18:29](https://www.youtube.com/watch?v=UFLo2XGGS14&t=1109s) "The key takeaway is that these are not isolated tools." - States the main message: ALSP, snapshot debugging and sampling profiling are meant to be used together.

## Disclaimers and status moments

- [6:57](https://www.youtube.com/watch?v=UFLo2XGGS14&t=417s) other: "Again for the sake of the demo in the real world it's going to be uh hours."
- [14:33](https://www.youtube.com/watch?v=UFLo2XGGS14&t=873s) other: "I'm not going to do it live because it takes five minutes"

## Documented features matched

- AL language server for agents -> [Use AL language intelligence from AI agents and other editors](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-al-language-intelligence-from-ai-agents-and-other-editors) (high confidence, docs say GA)
- Profiling MCP for agents -> [Profile slow Business Central sessions with AI agents](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#profile-slow-business-central-sessions-with-ai-agents) (high confidence, docs say GA)
- Telemetry-triggered snapshot capture -> [Debug recorded Business Central failures with an AI agent](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#debug-recorded-business-central-failures-with-an-ai-agent) (medium confidence, docs say GA)
- Snapshot debugging MCP for agents -> [Debug recorded Business Central failures with an AI agent](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#debug-recorded-business-central-failures-with-an-ai-agent) (high confidence, docs say GA)
- Agentic slow SQL analysis via telemetry -> [Profile slow Business Central sessions with AI agents](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#profile-slow-business-central-sessions-with-ai-agents) (medium confidence, docs say GA)
- Connecting to the snapshot debugging MCP server -> [Debug recorded Business Central failures with an AI agent](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#debug-recorded-business-central-failures-with-an-ai-agent) (medium confidence, docs say GA)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/UFLo2XGGS14.md](../transcripts/full/UFLo2XGGS14.md) (JSON segments: [UFLo2XGGS14.json](../transcripts/full/UFLo2XGGS14.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/UFLo2XGGS14/hqdefault.jpg_
