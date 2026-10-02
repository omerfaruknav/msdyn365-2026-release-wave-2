---
id: D_Lur52IrIg
title: What's new in AL and Tools
wave: 2026w2
url: https://www.youtube.com/watch?v=D_Lur52IrIg
thumbnail: https://i.ytimg.com/vi/D_Lur52IrIg/hqdefault.jpg
duration_seconds: 2104
area: developer-tools
audience:
  - developer
  - partner
presenters:
  - Peter?
  - Stefan (also heard as Stephan)?
features:
  - namespaces-in-translation-ids
  - keys-spanning-table-extension-fields
  - al-language-server-agents
  - profiling-mcp
  - integer-to-biginteger-field-change
  - al-graph
  - public-package-resources
  - data-driven-tests
  - al-mcp-environment-symbol-search
  - snapshot-debugging-mcp
  - interface-default-implementation
  - test-handlers
  - isdirty-record-recordref
  - audit-full-name-system-fields
  - default-test-handlers
  - required-pending-attribute
  - action-inherits-page-tooltip
  - mcp-get-next-object-id
  - command-line-test-run-json
  - isolated-storage-read-isolation
status_mentions:
  ga: 1
  unclear: 20
chapters: 14
quotes: 24
disclaimers: 2
docs_matched: 17
transcript: data/transcripts/full/D_Lur52IrIg.md
---

# What's new in AL and Tools

> The session follows one sample app, a late fee extension, through build, evolve, test, review and support steps, with Peter and Stefan presenting. It starts with the AL MCP and a new AL language server, used in Copilot to search the environment, get free object IDs and trace code. It then covers language and platform changes: interface default implementations with a required-pending attribute, public package resources, integer to big integer fields, keys mixing base and extension fields, and translation IDs with namespaces. Small clarity changes follow, then data-driven tests, test handlers, a static call graph analysis in the AL tool, and two new MCP proxy commands for agent-started profiles and snapshots. The speakers close by advising teams to adopt the steps one at a time.

Watch: https://www.youtube.com/watch?v=D_Lur52IrIg (35:04). Area: Developer tools. Audience: developer, partner. Presenters as heard: Peter (medium confidence), Stefan (also heard as Stephan) (medium confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=D_Lur52IrIg&t=0s) Intro: late fee app and the two building blocks (AL MCP, AL language server) (2 min)
- [1:37](https://www.youtube.com/watch?v=D_Lur52IrIg&t=97s) Discover: what is already there in the environment (1 min)
- [2:43](https://www.youtube.com/watch?v=D_Lur52IrIg&t=163s) Demo: symbol search, next object ID and language server in Copilot (4 min)
- [6:49](https://www.youtube.com/watch?v=D_Lur52IrIg&t=409s) Evolve: interface default implementations and required pending (3 min)
- [9:34](https://www.youtube.com/watch?v=D_Lur52IrIg&t=574s) Overview of sharing resources, big integer, merged table extensions, translation namespaces (1 min)
- [10:49](https://www.youtube.com/watch?v=D_Lur52IrIg&t=649s) Public resource folders and consuming them by app ID (3 min)
- [13:40](https://www.youtube.com/watch?v=D_Lur52IrIg&t=820s) Big integer sequences and extension indexes (3 min)
- [16:17](https://www.youtube.com/watch?v=D_Lur52IrIg&t=977s) Namespaces in translation files (2 min)
- [17:52](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1072s) Small clarity changes: tooltips, audit names, IsDirty (3 min)
- [20:32](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1232s) Data-driven tests (3 min)
- [23:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1409s) Test handlers and default test handlers (2 min)
- [25:47](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1547s) Static call graph analysis for review (4 min)
- [29:43](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1783s) Support: profiles and snapshots started by agents (MCP proxies) (4 min)
- [33:54](https://www.youtube.com/watch?v=D_Lur52IrIg&t=2034s) Wrap-up of the development cycle (1 min)

## Features in this video

- [AL MCP environment symbol search](../features/al-mcp-environment-symbol-search.md) - GA - [0:43 to 5:02](https://www.youtube.com/watch?v=D_Lur52IrIg&t=43s), demo [3:28 to 5:02](https://www.youtube.com/watch?v=D_Lur52IrIg&t=208s) - The AL MCP can search the connected environment and tell which app and version owns each object.
- [AL language server for agents](../features/al-language-server-agents.md) - GA (implied) - [1:14 to 6:49](https://www.youtube.com/watch?v=D_Lur52IrIg&t=74s), demo [5:48 to 6:49](https://www.youtube.com/watch?v=D_Lur52IrIg&t=348s) - A standalone AL language server gives project-aware language intelligence over the language server protocol, not tied to Visual Studio Code.
- [Get next object ID tool](../features/mcp-get-next-object-id.md) - GA (implied) - [5:02 to 5:48](https://www.youtube.com/watch?v=D_Lur52IrIg&t=302s), demo [5:02 to 5:40](https://www.youtube.com/watch?v=D_Lur52IrIg&t=302s) - An MCP tool reads app.json, works out the ID ranges and suggests free object IDs.
- [Default implementation for interface methods](../features/interface-default-implementation.md) - GA (implied) - [6:59 to 9:34](https://www.youtube.com/watch?v=D_Lur52IrIg&t=419s), demo [7:38 to 9:24](https://www.youtube.com/watch?v=D_Lur52IrIg&t=458s) - Interface methods can have a default implementation, so implementers do not have to implement newly added methods.
- [Required pending attribute](../features/required-pending-attribute.md) - GA (implied) - [8:10 to 9:24](https://www.youtube.com/watch?v=D_Lur52IrIg&t=490s), demo [8:45 to 9:24](https://www.youtube.com/watch?v=D_Lur52IrIg&t=525s) - An attribute tells interface consumers that implementing a new method will become mandatory in a later major.
- [Public package resources](../features/public-package-resources.md) - GA (implied) - [9:47 to 13:40](https://www.youtube.com/watch?v=D_Lur52IrIg&t=587s), demo [11:45 to 13:23](https://www.youtube.com/watch?v=D_Lur52IrIg&t=705s) - Resource folders can be marked public so other apps can list and read them as JSON or text by provider app ID, without a dependency.
- [Integer to big integer field change](../features/integer-to-biginteger-field-change.md) - GA (implied) - [10:06 to 15:39](https://www.youtube.com/watch?v=D_Lur52IrIg&t=606s), demo [14:04 to 15:19](https://www.youtube.com/watch?v=D_Lur52IrIg&t=844s) - A field can change from integer to big integer while keeping existing rows, aimed at entries that run out of numbers.
- [Keys spanning base and extension fields](../features/keys-spanning-table-extension-fields.md) - GA (implied) - [10:19 to 16:17](https://www.youtube.com/watch?v=D_Lur52IrIg&t=619s) - Because table extensions are merged into the base table, a key or index can cover both base table and table extension fields.
- [Namespaces in translation IDs](../features/namespaces-in-translation-ids.md) - GA (implied) - [10:36 to 17:52](https://www.youtube.com/watch?v=D_Lur52IrIg&t=636s), demo [17:05 to 17:37](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1025s) - XLIFF files can use fully qualified names including the namespace as ids instead of hash keys.
- [Created by and modified by full name system fields](../features/audit-full-name-system-fields.md) - GA (implied) - [18:05 to 20:02](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1085s), demo [19:22 to 20:02](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1162s) - New system fields hold the created by and modified by full names next to the user ids.
- [Action inherits page tooltip](../features/action-inherits-page-tooltip.md) - GA (implied) - [18:05 to 19:10](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1085s), demo [18:52 to 19:10](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1132s) - An action using RunObject no longer needs its own tooltip, because it comes from the target page.
- [IsDirty on Record and RecordRef](../features/isdirty-record-recordref.md) - GA (implied) - [18:17 to 20:32](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1097s) - A new IsDirty method on Record and RecordRef tests whether a record has changed.
- [Read isolation for isolated storage](../features/isolated-storage-read-isolation.md) - GA (implied) - [18:31 to 18:42](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1111s) - Read isolation is an explicit option when reading from isolated storage.
- [Data-driven tests](../features/data-driven-tests.md) - GA (implied) - [20:32 to 23:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1232s), demo [22:07 to 23:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1327s) - One test procedure can run against many data sets from a test data source, so more tests come from adding data points.
- [Command line test run with JSON output](../features/command-line-test-run-json.md) - GA (implied) - [21:16 to 21:56](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1276s) - The whole test suite can be run from the command line.
- [Test handlers](../features/test-handlers.md) - GA (implied) - [23:29 to 24:55](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1409s), demo [23:49 to 24:55](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1429s) - Test handlers provide setup and tear down in AL, with hooks before and after the test codeunit, test procedure and each data-driven test case.
- [Default test handlers](../features/default-test-handlers.md) - GA (implied) - [24:55 to 25:47](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1495s), demo [24:55 to 25:47](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1495s) - Regular test handlers are declared by the test codeunit, while default handlers run on every test, including tests from other apps.
- [AL graph](../features/al-graph.md) - GA (implied) - [25:47 to 29:43](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1547s), demo [26:49 to 29:31](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1609s) - A graph command in the AL tool builds a static call graph across an extension and its dependencies.
- [Profiling MCP for agents](../features/profiling-mcp.md) - GA (implied) - [29:59 to 32:57](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1799s), demo [31:39 to 32:57](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1899s) - A coding agent can start, monitor and stop a sampling profile through the AL tool proxy or the Business Central MCP server, given a session ID.
- [Snapshot debugging MCP for agents](../features/snapshot-debugging-mcp.md) - GA (implied) - [32:57 to 33:54](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1977s) - Agents can target an environment and start a snapshot recording for the next matching session, capturing values and call stacks.

## Quotes

- [4:25](https://www.youtube.com/watch?v=D_Lur52IrIg&t=265s) "You don't have to download the symbols. You don't have to create the dependent species before you can actually find the symbols." - States the main benefit of searching symbols on the connected environment instead of local symbol files.
- [7:59](https://www.youtube.com/watch?v=D_Lur52IrIg&t=479s) "This is critical for allowing you to extend the interfaces over time." - Explains the design reason for default implementations on interfaces.
- [9:24](https://www.youtube.com/watch?v=D_Lur52IrIg&t=564s) "So now with the default implementation we can extend an interface and build our solution across many releases without breaking any of our consumers." - Summarizes the outcome: interfaces can evolve without breaking implementers.
- [10:19](https://www.youtube.com/watch?v=D_Lur52IrIg&t=619s) "they're actually merged into uh the the base uh table and that means that a key can now span uh both base and extension fields at the same time" - A design change in table extensions that enables keys across base and extension fields.
- [11:34](https://www.youtube.com/watch?v=D_Lur52IrIg&t=694s) "The public resources are actually consumable without a dependency." - Consumers of public resources do not need a dependency on the providing app.
- [12:55](https://www.youtube.com/watch?v=D_Lur52IrIg&t=775s) "if you try to get a private resource by and providing the app ID, you will get an error." - A limitation: only resources in public folders can be fetched with a provider app ID.
- [13:07](https://www.youtube.com/watch?v=D_Lur52IrIg&t=787s) "So be mindful about taking hard dependencies on specific apps on public resources because if they stop shipping it," - Warns that runtime errors occur if a provider app stops shipping a resource.
- [13:40](https://www.youtube.com/watch?v=D_Lur52IrIg&t=820s) "that sometimes the ledger entries or some of the other the sequence entries run out of numbers." - Gives the real-world reason for the integer to big integer change.
- [13:53](https://www.youtube.com/watch?v=D_Lur52IrIg&t=833s) "So we made it possible for you to switch to big integer by changing the type." - States the design decision to allow changing a field to big integer for large customers whose entries run out of numbers.
- [14:32](https://www.youtube.com/watch?v=D_Lur52IrIg&t=872s) "Just changing the type itself does not change all the places where you use this value." - Warns that a big integer change needs follow-up edits in code that uses the field.
- [15:19](https://www.youtube.com/watch?v=D_Lur52IrIg&t=919s) "but it's still allowed and it will still pass through and you can actually do this change without having to copy data" - Shows the type change passes the breaking-change check and needs no data copy or parallel implementation.
- [17:25](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1045s) "This will now generate XL files with a fully qualified name as the ids." - Describes the namespace-aware translation ids that avoid collisions between same-named objects.
- [19:33](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1173s) "These are not fields that I have created. They're part of the system fields on the record now." - Explains that created by and modified by full names are new built-in system fields, not custom ones.
- [21:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1289s) "run the whole suite from the command line and get structured JSON with pass fail and skip counts plus a real exit code" - Gives the concrete CI outcome: structured results and an exit code that fails the build.
- [23:12](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1392s) "So for every single entry that exists in this data set, this platform will execute this test and provide the result for it." - Explains how data-driven tests run: one test method executes once per data set entry.
- [25:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1529s) "So I have the flexibility of handling things outside the test case in a common way both globally but also specifically for a specific test code unit." - Summarizes that test handlers work at both global and per-codeunit level.
- [27:34](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1654s) "Counter to the LSP which is actually looking at the project as it is now." - Explains how the graph analysis differs from the language service protocol tool.
- [27:46](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1666s) "This is a static thing that we can do offline as long as we extract uh the information that we need to query on beforehand." - States the call graph is an offline static analysis that needs an up-front extraction step.
- [30:48](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1848s) "coding agents can now capture the performance profiles and the snapshot recordings themselves through dedicated MCP uh tools with no active debugging session" - Core announcement: agents can start profiles and snapshots without a debugging session set up by the developer.
- [31:01](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1861s) "You still need to judge uh what the evidence that it find means" - Sets the limit: the agent captures evidence but the human interprets it.
- [33:27](https://www.youtube.com/watch?v=D_Lur52IrIg&t=2007s) "Why are these called proxies? This is because the actual work all happens on the server." - Explains the design decision behind the proxy naming.
- [33:38](https://www.youtube.com/watch?v=D_Lur52IrIg&t=2018s) "There's no snapshot or um performance profiling being done on the client side. It's all being done on the server side." - Clarifies where capture runs, relevant for environment access and expectations.
- [33:54](https://www.youtube.com/watch?v=D_Lur52IrIg&t=2034s) "this release has been around making agents more capable making it easier for agents to work with the code" - Summarizes the theme of the whole release for AL and tools.
- [34:30](https://www.youtube.com/watch?v=D_Lur52IrIg&t=2070s) "You don't need to adopt everything at once. Start with a gap that you have today" - Practical adoption advice from the presenters.

## Disclaimers and status moments

- [21:40](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1300s) other: "there is a dedicated uh session uh recorded in this launch event uh that covers datadriven testing in depth"
- [26:27](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1587s) other: "And again, we're going to have a full session on this."

## Documented features matched

- Namespaces in translation IDs -> [Translate objects with the same name in different namespaces](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#translate-objects-with-the-same-name-in-different-namespaces) (high confidence, docs say GA)
- Keys spanning base and extension fields -> [Developers can define indexes that span fields from a base table and its table extensions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#developers-can-define-indexes-that-span-fields-from-a-base-table-and-its-table-extensions) (high confidence, docs say GA)
- AL language server for agents -> [Use AL language intelligence from AI agents and other editors](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-al-language-intelligence-from-ai-agents-and-other-editors) (high confidence, docs say GA)
- Profiling MCP for agents -> [Profile slow Business Central sessions with AI agents](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#profile-slow-business-central-sessions-with-ai-agents) (high confidence, docs say GA)
- AL graph -> [Audit AL app accessibility and debugging boundaries](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#audit-al-app-accessibility-and-debugging-boundaries) (high confidence, docs say GA)
- Data-driven tests -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (high confidence, docs say GA)
- AL MCP environment symbol search -> [Discover objects in connected Business Central environments](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#discover-objects-in-connected-business-central-environments) (high confidence, docs say GA)
- Snapshot debugging MCP for agents -> [Debug recorded Business Central failures with an AI agent](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#debug-recorded-business-central-failures-with-an-ai-agent) (high confidence, docs say GA)
- Default implementation for interface methods -> [Evolve AL interfaces with default implementations](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#evolve-al-interfaces-with-default-implementations) (high confidence, docs say GA)
- Test handlers -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (high confidence, docs say GA)
- IsDirty on Record and RecordRef -> [Check records for uncommitted changes](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#check-records-for-uncommitted-changes) (high confidence, docs say GA)
- Created by and modified by full name system fields -> [Use system audit fields in analysis mode and in profiles](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-system-audit-fields-in-analysis-mode-and-in-profiles) (medium confidence, docs say GA)
- Default test handlers -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (medium confidence, docs say GA)
- Required pending attribute -> [Evolve AL interfaces with default implementations](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#evolve-al-interfaces-with-default-implementations) (high confidence, docs say GA)
- Action inherits page tooltip -> [Actions on reports and pages can now inherit tooltips](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#actions-on-reports-and-pages-can-now-inherit-tooltips) (high confidence, docs say GA)
- Get next object ID tool -> [Let agents allocate free AL object IDs](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#let-agents-allocate-free-al-object-ids) (high confidence, docs say GA)
- Command line test run with JSON output -> [Run AL tests from command-line and CI/CD workflows](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#run-al-tests-from-command-line-and-cicd-workflows) (high confidence, docs say GA)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/D_Lur52IrIg.md](../transcripts/full/D_Lur52IrIg.md) (JSON segments: [D_Lur52IrIg.json](../transcripts/full/D_Lur52IrIg.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/D_Lur52IrIg/hqdefault.jpg_
