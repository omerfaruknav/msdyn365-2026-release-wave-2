---
id: V7NgFOIcGgM
title: "What's new: Demystifying the New Microsoft Copilot Chat in Business Central"
wave: 2026w2
url: https://www.youtube.com/watch?v=V7NgFOIcGgM
thumbnail: https://i.ytimg.com/vi/V7NgFOIcGgM/hqdefault.jpg
duration_seconds: 973
area: copilot-and-agents
audience:
  - end-user
  - consultant
  - admin
  - developer
  - partner
presenters:
  - Abdulat Khan?
  - Guinea?
features:
  - microsoft-copilot-chat
  - copilot-web-general-answers
  - bc-mcp-server-data-access
  - copilot-follow-up-suggestions
  - copilot-citations-sources
  - copilot-intent-agentic-loop
  - copilot-vague-reference-resolution
  - copilot-page-context
  - copilot-agent-capabilities-admin
  - copilot-response-feedback
  - copilot-respects-permissions
  - copilot-friendly-extensions-guidance
status_mentions:
  ga: 1
  unclear: 11
chapters: 8
quotes: 8
disclaimers: 0
docs_matched: 5
transcript: data/transcripts/full/V7NgFOIcGgM.md
---

# What's new: Demystifying the New Microsoft Copilot Chat in Business Central

> This session explains how the new Microsoft Copilot chat in Business Central works behind the scenes. It opens with a live demo where Copilot answers an item price question using Business Central data and web exchange rates, then resolves a vague "S100" request. The second half walks through the flow of a request: conversation, page context, intent detection and an agentic loop over several tools. It closes with answers to common questions about permissions, admin control, the Business Central MCP server, citations for checking accuracy, and how to send feedback.

Watch: https://www.youtube.com/watch?v=V7NgFOIcGgM (16:13). Area: Copilot and agents. Audience: end-user, consultant, admin, developer, partner. Presenters as heard: Abdulat Khan (medium confidence), Guinea (low confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=0s) Introduction and goal of the session (1 min)
- [1:03](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=63s) Demo: top items in Danish crone and vague S100 query (4 min)
- [4:56](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=296s) How Copilot chat works: context, intent, agentic loop, response (4 min)
- [9:01](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=541s) Q&A: permissions (1 min)
- [10:23](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=623s) Q&A: controlling who has access (1 min)
- [11:17](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=677s) Q&A: data access via MCP server and ISV guidance (2 min)
- [13:18](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=798s) Q&A: trusting answers with citations and sources (2 min)
- [14:59](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=899s) Feedback and closing (1 min)

## Features in this video

- [Microsoft Copilot chat in Business Central](../features/microsoft-copilot-chat.md) - GA - [0:05 to 4:56](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=5s), demo [1:03 to 4:56](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=63s) - A unified Microsoft Copilot chat opens from the Copilot button in Business Central, replacing the old Copilot UI.
- [Web and general knowledge answers](../features/copilot-web-general-answers.md) - GA (implied) - [1:31 to 3:27](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=91s), demo [1:31 to 3:27](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=91s) - Copilot answers questions not tied to Business Central data using the internet and documentation, such as sales tax setup or travel directions.
- [Resolving vague item references](../features/copilot-vague-reference-resolution.md) - GA (implied) - [3:37 to 4:56](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=217s), demo [3:37 to 4:27](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=217s) - A short query like tell me about S100 is resolved to the matching item by Business Central tools.
- [Page context sent to Copilot](../features/copilot-page-context.md) - GA (implied) - [5:20 to 6:26](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=320s), demo [3:37 to 4:27](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=217s) - Copilot uses content from the current page, including extension pages, plus knowledge about the user such as role, as hints.
- [Intent detection and agentic loop](../features/copilot-intent-agentic-loop.md) - GA (implied) - [6:26 to 7:49](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=386s) - Copilot detects intent from the message history and iterates through tools.
- [Follow-up conversation and suggestions](../features/copilot-follow-up-suggestions.md) - GA (implied) - [7:49 to 9:01](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=469s) - Users keep asking in the same conversation and Copilot suggests follow-up questions.
- [Copilot respects user permissions](../features/copilot-respects-permissions.md) - GA (implied) - [9:36 to 10:23](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=576s) - Copilot runs as the signed-in user and accesses data only within their permissions.
- [Copilot and agent capabilities admin control](../features/copilot-agent-capabilities-admin.md) - GA (implied) - [10:23 to 11:17](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=623s) - The Copilot and agent capabilities page lets admins opt in or out of AI features and control who can use them.
- [Business Central MCP server as data access layer](../features/bc-mcp-server-data-access.md) - GA (implied) - [11:17 to 13:07](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=677s) - Copilot gets Business Central data through the same MCP server used for agentic integration.
- [Guidance for Copilot-friendly extensions](../features/copilot-friendly-extensions-guidance.md) - GA (implied) - [12:36 to 13:17](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=756s) - A Microsoft Learn article gives guidelines for building extensions that Copilot and agents can work with more easily, for example more descriptive ones.
- [Citations, progress messages and sources](../features/copilot-citations-sources.md) - GA (implied) - [13:18 to 14:48](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=798s), demo [2:13 to 2:47](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=133s) - Answers include clickable citation pills, progress messages and a sources button listing what the AI used.
- [Feedback on Copilot responses](../features/copilot-response-feedback.md) - GA (implied) - [14:59 to 15:53](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=899s) - Users can give thumbs up or down and share screenshots and prompts to help troubleshoot unexpected results.

## Quotes

- [5:51](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=351s) "Abdul was on a item card. So we can also pull that content from UI." - Shows Copilot uses the current page as context, which matters for extension pages.
- [6:58](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=418s) "we're going to go through something which is called aentic loop so copilot going to iterate through a number of tools" - States the core design change: an iterative tool loop instead of a one-time attempt.
- [9:48](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=588s) "Every time you run a copilot, it runs as you. For example, every time you ask a pilot information about business central" - Confirms Copilot works within the user's permissions.
- [10:37](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=637s) "You can fully control who has access to it in your organization." - Admins can restrict which users get Copilot chat.
- [11:31](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=691s) "we use to build all agentic integration around Business Central. It's a Microsoft Business Central MCP server." - Names the MCP server as the technology behind Copilot chat data access.
- [12:13](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=733s) "you don't really need to build any custom APIs in order for Copilot to get access to the data" - Extension and customization data is reachable without writing custom APIs, a key point for developers.
- [14:17](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=857s) "you might see a sources button and when you click on that you can see all the things that copilot saw" - Describes how users can inspect what Copilot looked at versus what it cited.
- [14:48](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=888s) "we don't want you to guess, we want you to verify and be confident that the response are exactly what you're looking for" - States the design intent behind citations and verification features.

## Documented features matched

- Microsoft Copilot chat in Business Central -> [Enable Microsoft Copilot chat experience](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#enable-microsoft-copilot-chat-experience) (high confidence, docs say preview)
- Web and general knowledge answers -> [Enable Microsoft Copilot chat experience](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#enable-microsoft-copilot-chat-experience) (medium confidence, docs say preview)
- Business Central MCP server as data access layer -> [Run data queries with MCP Server](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#run-data-queries-with-mcp-server) (medium confidence, docs say GA)
- Follow-up conversation and suggestions -> [Enable Microsoft Copilot chat experience](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#enable-microsoft-copilot-chat-experience) (medium confidence, docs say preview)
- Citations, progress messages and sources -> [Enable Microsoft Copilot chat experience](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#enable-microsoft-copilot-chat-experience) (medium confidence, docs say preview)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/V7NgFOIcGgM.md](../transcripts/full/V7NgFOIcGgM.md) (JSON segments: [V7NgFOIcGgM.json](../transcripts/full/V7NgFOIcGgM.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/V7NgFOIcGgM/hqdefault.jpg_
