---
wave: 2026w2
kind: dev-digest
minutes: 35
high_relevance_features: 17
medium_relevance_features: 10
generated_at: 2026-10-02T08:41:06.514Z
---

# Developer digest - 2026 release wave 2

If you are a BC developer, here are the 35 minutes that matter, out of 46 min of launch event video. 17 features with high developer relevance, 10 more worth a look, every item deep-linked to the second where they explain it.

The developer side of this launch event is 17 features and about 35 minutes of video, and nearly all of it sits under developer tools. That is a long coffee break, so here is the short version before the list.

Three themes dominate. First, coding agents get real access to your AL work: MCP tools, a standalone language server, call graphs, profiling and snapshots. Second, testing grows up, with data-driven tests, handlers and a command line run that returns JSON and an exit code, so a failed assertion fails the build. Third, interfaces can grow over many releases without breaking the people who implement them.

Watch first: AL MCP symbol search against an environment, because it is the only item marked GA. The status of the rest is not stated, so check before you plan around them. After that, look at keys spanning base and extension fields and the integer to big integer change, since both touch your tables.

_The three paragraphs above were written by Claude from the feature list below (claude-sonnet-5-5). Everything else on this page is generated from the data._

## The playlist

### Developer tools (50 min)

- [10:36 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=636s) - **[Namespaces in translation IDs](../features/namespaces-in-translation-ids.md)** (status not stated, 7 min) - XLIFF translation files can now be generated with fully qualified names, including the namespace, as ids instead of hash keys built from the name.
- [10:19 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=619s) - **[Keys spanning base and extension fields](../features/keys-spanning-extension-fields.md)** (status not stated, 6 min) - Table extensions are now merged into the base table, so a key can span both base table and table extension fields at the same time.
- [1:14 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=74s) - **[AL language server (LSP)](../features/al-language-server-lsp.md)** (status not stated, 6 min) - A new standalone AL language server gives project-aware language intelligence over the language server protocol, so it is no longer tied to Visual Studio Code.
- [10:06 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=606s) - **[Integer to big integer field change](../features/integer-to-biginteger-field-change.md)** (status not stated, 6 min) - A field type can be changed from integer to big integer while keeping existing rows, aimed at ledger or sequence entries that run out of numbers.
- [25:47 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1547s) - **[Call graph analysis (AL tool graph command)](../features/al-tool-call-graph.md)** (status not stated, 4 min) - The AL .NET tool gets a graph command that builds a call graph across an extension and its dependencies.
- [9:47 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=587s) - **[Public package resources](../features/public-package-resources.md)** (status not stated, 4 min) - Resources stored in an app can be shared across app boundaries by marking resource folders as public.
- [0:43 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=43s) - **[AL MCP symbol search with source = environment](../features/al-mcp-environment-symbol-search.md)** (GA, 3 min) - The AL MCP server can now search the connected environment, tell which app owns each object (with app version), and work with workspace and projects.
- [29:59 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1799s) - **[Launch profiling MCP proxy](../features/launch-profiling-mcp-proxy.md)** (status not stated, 3 min) - A new AL tool command lets a coding agent start, monitor and stop a performance profile and look at the results, with the same kind of tooling and parameters as in Visual Studio Code.
- [20:32 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1232s) - **[Data-driven tests (test data source)](../features/data-driven-tests.md)** (status not stated, 3 min) - One test method can run many scenarios taken from a data test source that lists test cases, such as overdue, not overdue and rounding.
- [6:59 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=419s) - **[Default implementation for interface methods](../features/interface-default-implementation.md)** (status not stated, 3 min) - Interface methods can now have a default implementation, so consumers do not have to implement newly added methods.
- [23:29 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1409s) - **[Test handlers](../features/test-handlers.md)** (status not stated, 1 min) - Test handlers keep setup and reporting out of the test logic.
- [8:10 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=490s) - **[Required pending attribute](../features/interface-required-pending-attribute.md)** (status not stated, 1 min) - Together with default implementations, an attribute lets the interface author tell consumers that implementing a new method will become mandatory later, for example in the next major or two.
- [32:57 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1977s) - **[Launch snapshot MCP proxy](../features/launch-snapshot-mcp-proxy.md)** (status not stated, 1 min) - A new AL tool command lets agents target a specific environment and tenant and start a snapshot recording while a user is working.
- [24:55 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1495s) - **[Default test handlers](../features/default-test-handlers.md)** (status not stated, 1 min) - A default test handler can be added by extending the default test handlers enum with an implementation, so it covers all test cases that run.
- [5:02 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=302s) - **[Get next object ID tool (MCP)](../features/al-mcp-get-next-object-id.md)** (status not stated, 1 min) - A new MCP tool reads the app.json of the current project, works out the defined ID ranges and suggests free object IDs.
- [21:16 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1276s) - **[Command line test run with JSON output](../features/command-line-test-run-json.md)** (status not stated, 1 min) - The whole test suite can be run from the command line.

### Copilot and agents (5 min)

- [0:36 What's new: MCP Server](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=36s) - **[MCP data tools (find tables, table relations, table schema, data query)](../features/mcp-server-data-tools.md)** (status not stated, 5 min) - Four new system tools are enabled through the data tool server feature, letting the LLM in an MCP host build AL queries that Business Central compiles and runs, returning the data with no APIs needed.

## Also worth a look (medium relevance)

- [18:17](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1097s) [IsDirty on Record and RecordRef](../features/isdirty-record-recordref.md) in What's new in AL and Tools (status not stated, 2 min)
- [18:05](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1085s) [Created by and modified by full name system fields](../features/audit-name-system-fields.md) in What's new in AL and Tools (status not stated, 2 min)
- [6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) [MCP server on/off toggle](../features/mcp-server-toggle.md) in What's new: MCP Server (status not stated, 1 min)
- [6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) [Server features box in MCP configuration](../features/mcp-server-features-box.md) in What's new: MCP Server (status not stated, 1 min)
- [0:06](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=6s) [Page scripting generally available](../features/page-scripting-ga.md) in What's new in Page Scripting (GA, 1 min)
- [18:05](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1085s) [Action inherits page tooltip](../features/action-inherits-page-tooltip.md) in What's new in AL and Tools (status not stated, 1 min)
- [2:29](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=149s) [Agents generating page scripts](../features/agents-generating-page-scripts.md) in What's new in Page Scripting (status not stated, 1 min)
- [2:02](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=122s) [Validate message and error dialog text](../features/page-scripting-validate-dialog-text.md) in What's new in Page Scripting (status not stated, 0 min)
- [1:51](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=111s) [Multiple selection in grids (page scripting)](../features/page-scripting-multiple-selection.md) in What's new in Page Scripting (status not stated, 0 min)
- [18:31](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1111s) [Explicit read isolation for isolated storage](../features/isolated-storage-read-isolation.md) in What's new in AL and Tools (status not stated, 0 min)

## Status at a glance

| Status | High relevance features | Minutes |
|---|---|---|
| GA | 1 | 3 |
| preview | 0 | 0 |
| announced | 0 | 0 |
| status not stated | 16 | 52 |

_Generated by pipeline step 06. Status is only what the presenters said; see each feature page for the evidence quote. Not official._
