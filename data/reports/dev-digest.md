---
wave: 2026w2
kind: digest
audience: developers
minutes: 108
playlist_features: 67
also_features: 112
generated_at: 2026-10-02T09:56:40.582Z
---

# Developers digest - 2026 release wave 2

If you write AL, build extensions, or own a partner's dev tooling, here are the 108 minutes that matter, out of 7h09 of launch event video. 67 features in the playlist, 112 more worth a look, every item deep-linked to the second where they explain it.

Developers get 67 relevant features in about 108 minutes of video, and most of them circle one idea: your next teammate might be an agent. There is a standalone AL language server, MCP servers for compiling, profiling and snapshot debugging, and BC-Bench to check whether any of it helps. The point is that agents stop grepping text and start reading what the code and the runtime actually do.

The second theme is less shiny but you will touch it sooner: testing and the platform underneath. Data-driven tests and test handlers change how you structure a test suite. Keys can now span base and extension fields, a long-requested item, and table extension fields are stored on the base table.

Watch first: in-environment PTE management is deprecated as of version 30.0. Plan your move to the admin center within about half a year, and do not mix both experiences in one environment. If you use test toolkit events, moving to test handlers is on you. The Fabric items are preview, and most of the rest is generally available.

_The three paragraphs above were written by Claude from the feature list below (claude-sonnet-5-5). Everything else on this page is generated from the data._

## The playlist

### Developer tools (1h39)

- [10:36 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=636s) - **[Namespaces in translation IDs](../features/namespaces-in-translation-ids.md)** (GA, 7 min) - XLIFF files can use fully qualified names including the namespace as ids instead of hash keys.
- [10:19 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=619s) - **[Keys spanning base and extension fields](../features/keys-spanning-table-extension-fields.md)** (GA, 7 min) - Because table extensions are merged into the base table, a key or index can cover both base table and table extension fields. Also in [What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=397s).
- [1:14 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=74s) - **[AL language server for agents](../features/al-language-server-agents.md)** (GA, 7 min) - A standalone AL language server gives project-aware language intelligence over the language server protocol, not tied to Visual Studio Code. Also in [What's new: Agentic Developer Loop](https://www.youtube.com/watch?v=UFLo2XGGS14&t=616s).
- [11:11 What's new: Agentic Developer Loop](https://www.youtube.com/watch?v=UFLo2XGGS14&t=671s) - **[Profiling MCP for agents](../features/profiling-mcp.md)** (GA, 6 min) - A coding agent can start, monitor and stop a sampling profile through the AL tool proxy or the Business Central MCP server, given a session ID. Also in [What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1799s).
- [4:23 What's new: Agentic Developer Loop](https://www.youtube.com/watch?v=UFLo2XGGS14&t=263s) - **[Telemetry-triggered snapshot capture](../features/telemetry-triggered-snapshot.md)** (GA, 6 min) - The agent arms snapshot debugging, sets snap points and polls telemetry for a specific error.
- [10:06 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=606s) - **[Integer to big integer field change](../features/integer-to-biginteger-field-change.md)** (GA, 6 min) - A field can change from integer to big integer while keeping existing rows, aimed at entries that run out of numbers.
- [25:47 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1547s) - **[AL graph](../features/al-graph.md)** (GA, 5 min) - A graph command in the AL tool builds a static call graph across an extension and its dependencies. Also in [What's new: ALGraph](https://www.youtube.com/watch?v=i0gBrA1tx50&t=18s).
- [8:34 What's new in BC-Bench](https://www.youtube.com/watch?v=npkC4wyucyY&t=514s) - **[BC-Bench code review category](../features/bc-bench-code-review.md)** (GA, 5 min) - A category tests whether AI can review AL changes against an expected comment.
- [9:47 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=587s) - **[Public package resources](../features/public-package-resources.md)** (GA, 4 min) - Resource folders can be marked public so other apps can list and read them as JSON or text by provider app ID, without a dependency.
- [20:32 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1232s) - **[Data-driven tests](../features/data-driven-tests.md)** (GA, 4 min) - One test procedure can run against many data sets from a test data source, so more tests come from adding data points. Also in [What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=32s).
- [0:43 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=43s) - **[AL MCP environment symbol search](../features/al-mcp-environment-symbol-search.md)** (GA, 3 min) - The AL MCP can search the connected environment and tell which app and version owns each object.
- [2:11 What's new: Agentic Developer Loop](https://www.youtube.com/watch?v=UFLo2XGGS14&t=131s) - **[Snapshot debugging MCP for agents](../features/snapshot-debugging-mcp.md)** (GA, 3 min) - Agents can target an environment and start a snapshot recording for the next matching session, capturing values and call stacks. Also in [What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1977s).
- [14:33 What's new: Agentic Developer Loop](https://www.youtube.com/watch?v=UFLo2XGGS14&t=873s) - **[Agentic slow SQL analysis via telemetry](../features/agentic-slow-sql-analysis.md)** (GA, 3 min) - An agent watches telemetry for slow SQL calls, finds the session and starts sampling.
- [0:06 What's new in BC-Bench](https://www.youtube.com/watch?v=npkC4wyucyY&t=6s) - **[BC-Bench evaluation framework](../features/bc-bench.md)** (GA, 3 min) - A reproducible open-source framework evaluates AI coding agents on real AL tasks from real PRs and tests.
- [6:59 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=419s) - **[Default implementation for interface methods](../features/interface-default-implementation.md)** (GA, 3 min) - Interface methods can have a default implementation, so implementers do not have to implement newly added methods.
- [23:29 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1409s) - **[Test handlers](../features/test-handlers.md)** (GA, 3 min) - Test handlers provide setup and tear down in AL, with hooks before and after the test codeunit, test procedure and each data-driven test case. Also in [What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=261s).
- [1:46 What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=106s) - **[Table extensions stored on base table](../features/table-extension-zero-joins.md)** (GA, 2 min) - Table extension fields are stored on the base table, so no join is needed.
- [24:55 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1495s) - **[Default test handlers](../features/default-test-handlers.md)** (GA, 2 min) - Regular test handlers are declared by the test codeunit, while default handlers run on every test, including tests from other apps. Also in [What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=326s).
- [13:05 What's new in BC-Bench](https://www.youtube.com/watch?v=npkC4wyucyY&t=785s) - **[Run BC-Bench on your own data set](../features/bc-bench-own-data-set.md)** (GA, 2 min) - Partners can fork the open-source repo and use their own bug fixes, tests and PRs.
- [4:24 What's new: ALGraph](https://www.youtube.com/watch?v=i0gBrA1tx50&t=264s) - **[Non-debuggable boundary audit](../features/al-graph-debuggable-boundary-audit.md)** (GA, 2 min) - A query finds debuggable callees of non-debuggable methods, where a breakpoint could leak content.
- [9:24 What's new in BC-Bench](https://www.youtube.com/watch?v=npkC4wyucyY&t=564s) - **[AL code review approaches](../features/al-code-review-approaches.md)** (GA, 2 min) - BC-Bench compares plain Copilot CLI, BC Quality as a plug-in and the AL review agent.
- [2:12 What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=132s) - **[Test data source interface](../features/test-data-source-interface.md)** (GA, 2 min) - An interface with one function to list test cases and one to build test context objects.
- [0:45 What's new: Agentic Developer Loop](https://www.youtube.com/watch?v=UFLo2XGGS14&t=45s) - **[Agentic developer loop](../features/agentic-developer-loop.md)** (GA, 1 min) - The agent plans an investigation and uses ALSP, the AL tool proxy and the Business Central MCP server for call stacks, variables and CPU profiles.
- [3:19 What's new in BC-Bench](https://www.youtube.com/watch?v=npkC4wyucyY&t=199s) - **[AL MCP server for coding agents](../features/al-mcp-server-coding-agents.md)** (GA, 1 min) - The AL MCP server exposes compile, publish and search to agents without VS Code.
- [8:10 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=490s) - **[Required pending attribute](../features/required-pending-attribute.md)** (GA, 1 min) - An attribute tells interface consumers that implementing a new method will become mandatory in a later major.
- [3:15 What's new: ALGraph](https://www.youtube.com/watch?v=i0gBrA1tx50&t=195s) - **[HTTP client caller query](../features/al-graph-http-client-callers.md)** (GA, 1 min) - A query exports everything calling the HTTP client, excluding tests, as a call path tree.
- [13:28 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=808s) - **[Dev extensions remain installed on sandboxes](../features/dev-extensions-stay-installed.md)** (GA, 1 min) - Dev extensions are treated more like PTEs and are not uninstalled during environment updates or other lifecycle operations unless incompatible.
- [2:19 What's new: ALGraph](https://www.youtube.com/watch?v=i0gBrA1tx50&t=139s) - **[AL graph meta model extraction](../features/al-graph-meta-model-extraction.md)** (GA, 1 min) - An extract subcommand builds a JSON meta model of caller-callee relationships once.
- [3:28 What's new: Agentic Developer Loop](https://www.youtube.com/watch?v=UFLo2XGGS14&t=208s) - **[Connecting to the snapshot debugging MCP server](../features/snapshot-mcp-connection.md)** (GA, 1 min) - Connect through the AL tool as MCP host, Visual Studio Code via launch.json starting the snapshot MCP proxy, or your own MCP host.
- [6:13 What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=373s) - **[Test handler registration via enum extensions](../features/test-handler-enum-registration.md)** (GA, 1 min) - Handlers are registered by extending the test handler enum for opt-in or the default test handler enum for global.
- [5:02 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=302s) - **[Get next object ID tool](../features/mcp-get-next-object-id.md)** (GA, 1 min) - An MCP tool reads app.json, works out the ID ranges and suggests free object IDs.
- [7:43 What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=463s) - **[TestHandlers property](../features/testhandlers-property.md)** (GA, 1 min) - A test codeunit property takes a comma-separated list of handlers.
- [1:29 What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=89s) - **[Data-driven tests in Test Explorer](../features/data-driven-tests-test-explorer.md)** (GA, 1 min) - After one run, all test cases appear in the VS Code Test Explorer.
- [21:16 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1276s) - **[Command line test run with JSON output](../features/command-line-test-run-json.md)** (GA, 1 min) - The whole test suite can be run from the command line.
- [5:37 Introducing: Composite Document Layouts](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=337s) - **[Themes and header footer layouts from AL](../features/al-theme-header-footer-rendering.md)** (GA, 1 min) - In the rendering section of a report you specify type Word with subtype Theme or Header Footer, while body layouts use subtype Body.
- [6:13 What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=373s) - **[Enable and disable keys at runtime](../features/enable-disable-keys-runtime.md)** (GA, 1 min) - A key can be defined with Enabled set to false and enabled by code at runtime.
- [12:36 What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=756s) - **[Guidance for Copilot-friendly extensions](../features/copilot-friendly-extensions-guidance.md)** (GA, 1 min) - A Microsoft Learn article gives guidelines for building extensions that Copilot and agents can work with more easily, for example more descriptive ones.
- [7:05 What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=425s) - **[ITestHandler interface](../features/itesthandler-interface.md)** (GA, 1 min) - The interface offers before and after hooks at codeunit, procedure and test case level.
- [1:10 What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=70s) - **[Recent records virtual table](../features/recent-records-virtual-table.md)** (GA, 1 min) - The recent records list is exposed to AL as a queryable virtual table.
- [8:27 What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=507s) - **[Migration from test toolkit events to test handlers](../features/test-toolkit-events-migration.md)** (GA, 1 min) - Test handlers are separate from the test toolkit events.
- [2:46 What's new in BC-Bench](https://www.youtube.com/watch?v=npkC4wyucyY&t=166s) - **[BC-Bench bug fixing category](../features/bc-bench-bug-fixing.md)** (GA, 1 min) - Agents fix bugs in the real codebase across 101 tasks from bugs human engineers fixed.
- [3:01 What's new: Testability Enhancements](https://www.youtube.com/watch?v=hNom9ZZuca0&t=181s) - **[Strongly typed test context](../features/strongly-typed-test-context.md)** (GA, 0 min) - The data source returns an ITestContext, but the test can use its own interface for typed test data.
- [1:56 What's new: ALGraph](https://www.youtube.com/watch?v=i0gBrA1tx50&t=116s) - **[DGML and SARIF export](../features/al-graph-dgml-sarif-export.md)** (GA, 0 min) - Results export as DGML for humans or SARIF for agents.
- [1:38 What's new: ALGraph](https://www.youtube.com/watch?v=i0gBrA1tx50&t=98s) - **[AL graph query language](../features/al-graph-query-language.md)** (GA, 0 min) - A query language supports complex queries such as all callers of an object or methods touching a table.

### Copilot and agents (5 min)

- [0:36 What's new: MCP Server](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=36s) - **[MCP data tools](../features/mcp-data-tools.md)** (GA, 5 min) - Four system tools (find tables, table relations, table schema, data query) let an LLM write AL queries that Business Central compiles and runs, with no APIs needed.

### Integration (Fabric, Shopify, MDM) (8 min)

- [0:07 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=7s) - **[Mirroring to Microsoft Fabric](../features/fabric-mirroring.md)** (preview, 4 min) - Business Central data is synchronized live into OneLake through an open mirroring database.
- [11:17 What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=677s) - **[Business Central MCP server as data access layer](../features/bc-mcp-server-data-access.md)** (GA, 2 min) - Copilot gets Business Central data through the same MCP server used for agentic integration.
- [3:32 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=212s) - **[Configuration packages for Fabric tables](../features/fabric-configuration-packages.md)** (preview, 1 min) - Configuration packages define tables to synchronize, for example for the Power BI apps.
- [9:40 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=580s) - **[Admin center API for PTE operations](../features/admin-center-api-pte-operations.md)** (GA, 1 min) - Endpoints for all demoed PTE operations are available in the admin center API.
- [3:39 What's new in reporting: Layout Management and Report Inbox API's](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=219s) - **[API overview page](../features/api-overview-page.md)** (GA, 1 min) - A new API overview page, shipping in version 29, is the easiest way to find APIs.
- [8:19 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=499s) - **[Fabric integration APIs](../features/fabric-integration-apis.md)** (preview, 0 min) - Setup and monitoring data are available as six APIs listed on the API overview page.

### Admin and platform (8 min)

- [0:06 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=6s) - **[PTE lifecycle management in the admin center](../features/pte-lifecycle-admin-center.md)** (GA, 3 min) - Upload, install and update operations are added to PTE management in the admin center, bringing full PTE lifecycle management into one place.
- [4:18 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=258s) - **[Multiple scheduled PTE installs and cancel](../features/pte-multiple-scheduled-installs.md)** (GA, 3 min) - Several future installs can be scheduled for the same PTE, for example one version on the next minor and another on the next major update.
- [3:09 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=189s) - **[Update a PTE from the admin center](../features/update-pte-admin-center.md)** (GA, 1 min) - From the app details page you can install a different version of an installed PTE.
- [8:42 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=522s) - **[Deprecation of in-environment PTE management](../features/old-pte-management-deprecation.md)** (announced, 1 min) - PTE management in the extension management pages and in the automation API will be deprecated as of version 30.0.
- [1:15 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=75s) - **[Deployment schedules for PTE installs](../features/pte-deployment-schedules.md)** (GA, 1 min) - When installing a PTE you can choose immediate, next minor update or next major update, plus a sync mode.
- [1:59 What's new: Match Production Database Configuration](https://www.youtube.com/watch?v=HixajKEd-A4&t=119s) - **[Match production in admin center API](../features/match-production-admin-api.md)** (GA, 0 min) - The match production configuration operation is supported in the admin center APIs.

### Reporting and analytics (12 min)

- [0:06 Introducing: Composite Document Layouts](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=6s) - **[Composite layouts](../features/composite-document-layouts.md)** (GA, 2 min) - The old all-in-one report layout is split into a body layout for structure, a theme for look and feel, and a header footer layout.
- [3:03 What's new in reporting: Layout Management and Report Inbox API's](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=183s) - **[Report inbox APIs](../features/report-inbox-apis.md)** (GA, 2 min) - New APIs cover the report inbox operations, where scheduled reports and report packs land. Also in [What's new: Enhanced Financial Reporting](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=472s).
- [0:17 What's new in Document Reporting: Word add-in](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=17s) - **[Updated data picker](../features/word-add-in-data-picker.md)** (GA, 2 min) - The Word add-in data picker got UX improvements.
- [0:29 What's new in Document Reporting: Word add-in](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=29s) - **[Company information data set](../features/company-information-data-set.md)** (GA, 1 min) - A company information data set is always shipped with Word layouts, so authors need not add it themselves.
- [2:53 What's new in Document Reporting: Word add-in](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=173s) - **[Address design control](../features/address-design-control.md)** (GA, 1 min) - A design block offers three address formats, such as sender, receiver and shipping address in three columns.
- [1:57 What's new in Document Reporting: Word add-in](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=117s) - **[Table builder editing](../features/table-builder-editing.md)** (GA, 1 min) - The table builder can edit an existing table definition through the wizard, not only insert tables.
- [6:01 What's new in Document Reporting: Word add-in](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=361s) - **[Hide if control](../features/hide-if-control.md)** (GA, 1 min) - A content control hides or shows its content based on a chosen boolean value.
- [4:05 What's new in Document Reporting: Word add-in](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=245s) - **[Field group design control](../features/field-group-design-control.md)** (GA, 1 min) - A design block for label and value pairs as a column grid, single or double stacked.
- [6:16 What's new in Document Reporting: Word add-in](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=376s) - **[Boolean expressions for Hide if](../features/hide-if-boolean-expressions.md)** (announced, 1 min) - Later you will set a boolean expression on data set values to hide or show content.

### Supply chain (2 min)

- [3:44 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=224s) - **[Component supply method on BOM lines](../features/bom-component-supply-method.md)** (GA, 2 min) - A field on production BOM lines sets how a component reaches the subcontractor: transfer, consignment at vendor, or vendor supplied.

## Also worth a look

- [1:02](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=62s) [Transfer WIP item and WIP ledger entry](../features/transfer-wip-item.md) in What's new in SCM: Subcontracting (GA, 15 min)
- [5:52](https://www.youtube.com/watch?v=nb_a42dmSqE&t=352s) [Italian Subcontracting Migration app](../features/italian-subcontracting-migration-app.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 6 min)
- [0:06](https://www.youtube.com/watch?v=07G7aC14Y_w&t=6s) [EDI in Business Central](../features/edi-e-documents.md) in What's new in E-Documents: Overview (GA, 4 min)
- [0:34](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=34s) [Report themes and header footer layouts](../features/report-themes-header-footer-layouts.md) in Introducing: Composite Document Layouts (GA, 4 min)
- [11:12](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=672s) [Subcontracting comments and attachments](../features/subcontracting-comments-attachments.md) in What's new in SCM: Subcontracting (GA, 4 min)
- [6:15](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=375s) [Withholding tax for employees](../features/withholding-tax-employees.md) in What's new in Finance: Overview (GA, 3 min)
- [10:44](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=644s) [Tax rate mismatch handling](../features/shopify-tax-rate-mismatch.md) in What's new: Shopify Tax Matching (preview) (preview, 3 min)
- [5:10](https://www.youtube.com/watch?v=npkC4wyucyY&t=310s) [Contamination detection](../features/bc-bench-contamination-detection.md) in What's new in BC-Bench (GA, 3 min)
- [10:12](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=612s) [Early install of hotfixes for Microsoft apps](../features/early-hotfix-install-microsoft-apps.md) in What's new: Manage PTEs in the Admin Center (GA, 3 min)
- [9:58](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=598s) [VAT reclaim on expense reports](../features/expense-vat-reclaim.md) in What's new in Expense Agent: Overview (GA, 3 min)
- [24:53](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1493s) [Inventory put-away for subcontracting](../features/subcontracting-inventory-put-away.md) in What's new in SCM: Subcontracting (GA, 3 min)
- [4:29](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=269s) [Withholding tax on expense report posting](../features/withholding-on-expense-posting.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 3 min)
- [18:56](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1136s) [Subcontractor prices with closest match](../features/subcontractor-prices-closest-match.md) in What's new in SCM: Subcontracting (GA, 3 min)
- [0:31](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=31s) [Layout status for app-supplied layouts](../features/layout-status-app-layouts.md) in What's new in reporting: Layout Management and Report Inbox API's (GA, 3 min)
- [2:19](https://www.youtube.com/watch?v=nb_a42dmSqE&t=139s) [Legacy subcontracting pre-check](../features/legacy-subcontracting-pre-check.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 3 min)
- [8:37](https://www.youtube.com/watch?v=WACQbAEVOJg&t=517s) [Direct transfer modes](../features/direct-transfer-modes.md) in What's new in SCM: Overview (GA, 3 min)
- [18:17](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1097s) [IsDirty on Record and RecordRef](../features/isdirty-record-recordref.md) in What's new in AL and Tools (GA, 2 min)
- [8:58](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=538s) [Subcontracting purchase order lines](../features/subcontracting-purchase-order-lines.md) in What's new in SCM: Subcontracting (GA, 2 min)
- [16:42](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1002s) [Item charges on subcontracting receipts](../features/subcontracting-item-charge-receipt.md) in What's new in SCM: Subcontracting (GA, 2 min)
- [0:06](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=6s) [Cross-environment master data management](../features/cross-environment-master-data-management.md) in What's new: Cross-environment Master Data Management (GA, 2 min)
- [18:05](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1085s) [Created by and modified by full name system fields](../features/audit-full-name-system-fields.md) in What's new in AL and Tools (GA, 2 min)
- [0:08](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=8s) [Subcontracting app](../features/subcontracting-app.md) in What's new in SCM: Subcontracting (GA, 2 min)
- [12:44](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=764s) [Company tax registration ID and country extensions](../features/shopify-company-tax-registration-id.md) in What's new in Shopify Connector: Overview (GA, 2 min)
- [22:59](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1379s) [Subcontracting with warehouse receipt](../features/subcontracting-warehouse-receipt.md) in What's new in SCM: Subcontracting (GA, 2 min)
- [4:18](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=258s) [Index management access](../features/index-management-access.md) in What's new: Server and Database (GA, 2 min)
- [5:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=315s) [Power BI apps on Fabric](../features/power-bi-apps-fabric.md) in Introducing: Business Central Integration with Microsoft Fabric (announced, 2 min)
- [5:57](https://www.youtube.com/watch?v=07G7aC14Y_w&t=357s) [E-document messages](../features/e-document-messages.md) in What's new in E-Documents: Overview (GA, 2 min)
- [6:51](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=411s) [Sample layouts for themes](../features/theme-sample-layouts.md) in What's new in Document Reporting: Word add-in (GA, 2 min)
- [2:25](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=145s) [Composite layout menu on a body layout](../features/composite-layout-menu.md) in Introducing: Composite Document Layouts (GA, 2 min)
- [8:55](https://www.youtube.com/watch?v=07G7aC14Y_w&t=535s) [Invoicing for France](../features/france-e-invoicing.md) in What's new in E-Documents: Overview (GA, 2 min)
- [6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) [MCP server on/off toggle](../features/mcp-server-toggle.md) in What's new: MCP Server (GA, 1 min)
- [11:09](https://www.youtube.com/watch?v=WACQbAEVOJg&t=669s) [Direct transfer mode and transit location on transfer routes](../features/transfer-route-mode-transit.md) in What's new in SCM: Overview (GA, 1 min)
- [14:13](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=853s) [Create transfer order to subcontractor](../features/subcontracting-transfer-order.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [6:26](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=386s) [Intent detection and agentic loop](../features/copilot-intent-agentic-loop.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [6:54](https://www.youtube.com/watch?v=nb_a42dmSqE&t=414s) [Run migration by disabling legacy subcontracting](../features/disable-legacy-subcontracting-migration.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [10:25](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=625s) [Permission overview page in context](../features/permission-overview-context.md) in What's new: Server and Database (GA, 1 min)
- [5:29](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=329s) [Approval history in Business Central](../features/expense-approval-history-bc.md) in What's new in Expense Agent: Improved Approval Process (GA, 1 min)
- [6:49](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=409s) [Operations page audit of PTE actions](../features/pte-operations-audit.md) in What's new: Manage PTEs in the Admin Center (GA, 1 min)
- [6:17](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=377s) [Shipped themes, header footers and body layouts](../features/shipped-themes-body-layouts.md) in Introducing: Composite Document Layouts (announced, 1 min)
- [0:06](https://www.youtube.com/watch?v=nb_a42dmSqE&t=6s) [Subcontracting app replaces Italian subcontracting](../features/italian-subcontracting-replacement.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=427s) [Synchronization overview and details logs](../features/fabric-synchronization-logs.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [0:59](https://www.youtube.com/watch?v=07G7aC14Y_w&t=59s) [Purchase order e-document](../features/purchase-order-e-document.md) in What's new in E-Documents: Overview (GA, 1 min)
- [4:03](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=243s) [Default theme and header footer levels](../features/default-theme-header-footer-levels.md) in Introducing: Composite Document Layouts (GA, 1 min)
- [6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) [Server features box in MCP configuration](../features/mcp-server-features-box.md) in What's new: MCP Server (GA, 1 min)
- [2:00](https://www.youtube.com/watch?v=kOCiyVql0go&t=120s) [Fabric connection setup](../features/fabric-connection-setup.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [3:51](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=231s) [Credit card reconciliation with expenses](../features/credit-card-reconciliation.md) in What's new in Expense Agent: Overview (announced, 1 min)
- [2:23](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=143s) [Withholding posting groups on employee and expense category](../features/withholding-posting-groups-employee-category.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [0:06](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=6s) [Page scripting generally available](../features/page-scripting-ga.md) in What's new in Page Scripting (GA, 1 min)
- [5:20](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=320s) [Page context sent to Copilot](../features/copilot-page-context.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [18:05](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1085s) [Action inherits page tooltip](../features/action-inherits-page-tooltip.md) in What's new in AL and Tools (GA, 1 min)
- [1:09](https://www.youtube.com/watch?v=HixajKEd-A4&t=69s) [Automatic revert after 72 hours](../features/match-production-auto-revert.md) in What's new: Match Production Database Configuration (GA, 1 min)
- [21:56](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1316s) [Minimum amount for subcontractor price](../features/subcontractor-minimum-amount.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [25:58](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1558s) [Serial numbers at any level in subcontracting](../features/subcontracting-serial-numbers-any-level.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [2:37](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=157s) [Mileage rates per vehicle type](../features/mileage-rates-vehicle-type.md) in What's new in Expense Agent: Overview (GA, 1 min)
- [1:19](https://www.youtube.com/watch?v=nb_a42dmSqE&t=79s) [Legacy subcontracting toggle](../features/legacy-subcontracting-toggle.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [1:46](https://www.youtube.com/watch?v=GwrMf1umTFg&t=106s) [Assigned resources on the project card](../features/project-card-assigned-resources.md) in What's new in Expense Agent: Project Handling (GA, 1 min)
- [6:53](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=413s) [Change log for financial report definitions](../features/financial-report-change-log.md) in What's new: Enhanced Financial Reporting (GA, 1 min)
- [8:41](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=521s) [Header and footer authoring help](../features/header-footer-authoring.md) in What's new in Document Reporting: Word add-in (GA, 1 min)
- [4:19](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=259s) [Audit link between G/L entries and travel request](../features/travel-request-gl-audit-link.md) in What's new in Expense Agent: Use Travel Request (GA, 1 min)
- [11:45](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=705s) [Telemetry for Open in Excel](../features/open-in-excel-telemetry.md) in What's new: Server and Database (GA, 1 min)
- [12:36](https://www.youtube.com/watch?v=WACQbAEVOJg&t=756s) [No blank-location inventory posting setup](../features/no-blank-location-posting-setup.md) in What's new in SCM: Overview (GA, 1 min)
- [8:29](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=509s) [Manage themes and header footer layouts page](../features/manage-themes-header-footer-layouts.md) in What's new in Document Reporting: Word add-in (GA, 1 min)
- [0:07](https://www.youtube.com/watch?v=HixajKEd-A4&t=7s) [Match production configuration](../features/match-production-configuration.md) in What's new: Match Production Database Configuration (GA, 1 min)
- [8:46](https://www.youtube.com/watch?v=hNom9ZZuca0&t=526s) [Skipping test cases with test handlers](../features/skip-tests-with-handlers.md) in What's new: Testability Enhancements (GA, 1 min)
- [4:25](https://www.youtube.com/watch?v=kOCiyVql0go&t=265s) [Mirrored data with SQL endpoint](../features/fabric-onelake-sql-endpoint.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [0:54](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=54s) [Multiple excise taxes per item](../features/multiple-excise-taxes-per-item.md) in What's new in Finance: Overview (GA, 1 min)
- [3:15](https://www.youtube.com/watch?v=KNy2KujjheU&t=195s) [Export history API endpoint deprecated](../features/export-history-endpoint-deprecated.md) in What's new: Database Export Enhancements (GA, 1 min)
- [6:39](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=399s) [Subcontracting components on the production order](../features/subcontracting-production-order-components.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [2:44](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=164s) [Withholding tax group](../features/withholding-tax-group.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [2:10](https://www.youtube.com/watch?v=07G7aC14Y_w&t=130s) [E-document types and directions](../features/e-document-types-directions.md) in What's new in E-Documents: Overview (GA, 1 min)
- [9:36](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=576s) [Copilot respects user permissions](../features/copilot-respects-permissions.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [8:13](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=493s) [Create subcontracting order from routing](../features/subcontracting-order-from-routing.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [0:46](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=46s) [Streaming Open in Excel](../features/streaming-open-in-excel.md) in What's new: Server and Database (GA, 1 min)
- [10:05](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=605s) [Subcontracting FastTab in Manufacturing setup](../features/manufacturing-setup-subcontracting-fasttab.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [4:58](https://www.youtube.com/watch?v=GwrMf1umTFg&t=298s) [Project ledger entries from expense reports](../features/expense-project-ledger-entries.md) in What's new in Expense Agent: Project Handling (GA, 1 min)
- [11:16](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=676s) [Emissions on fixed assets](../features/fixed-asset-emissions.md) in What's new in Sustainability (GA, 1 min)
- [6:09](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=369s) [Permission set for HQ read access](../features/mdm-hq-read-permission-set.md) in What's new: Cross-environment Master Data Management (GA, 1 min)
- [3:10](https://www.youtube.com/watch?v=kOCiyVql0go&t=190s) [Table and company selection for Fabric](../features/fabric-table-company-selection.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [3:14](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=194s) [Credit card statement upload](../features/credit-card-statement-upload.md) in What's new in Expense Agent: Overview (announced, 1 min)
- [2:28](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=148s) [Override of layout description](../features/layout-description-override.md) in What's new in reporting: Layout Management and Report Inbox API's (GA, 1 min)
- [6:08](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=368s) [US-only TaxMatch extension](../features/shopify-taxmatch-us-extension.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [1:30](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=90s) [Warehouse, price and cost for subcontracting](../features/subcontracting-warehouse-price-cost.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [9:08](https://www.youtube.com/watch?v=nb_a42dmSqE&t=548s) [Migrated vendor fields and subcontracting prices](../features/migrated-vendor-subcontracting-prices.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [5:26](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=326s) [Notes design control](../features/notes-design-control.md) in What's new in Document Reporting: Word add-in (GA, 1 min)
- [7:16](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=436s) [Components at vendor location field](../features/vendor-components-at-vendor-location.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [0:40](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=40s) [Shopify Tax Matching](../features/shopify-tax-matching.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [2:29](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=149s) [Agents generating page scripts](../features/agents-generate-page-scripts.md) in What's new in Page Scripting (GA, 1 min)
- [4:40](https://www.youtube.com/watch?v=npkC4wyucyY&t=280s) [Agent harness comparison](../features/bc-bench-harness-comparison.md) in What's new in BC-Bench (GA, 1 min)
- [1:31](https://www.youtube.com/watch?v=07G7aC14Y_w&t=91s) [Order response](../features/e-document-order-response.md) in What's new in E-Documents: Overview (GA, 0 min)
- [2:51](https://www.youtube.com/watch?v=WZUQ9X26MLo&t=171s) [Certification details on sales invoice](../features/eudr-sales-invoice-certification.md) in What's new in Sustainability: EUDR Certificate Capture (GA, 0 min)
- [5:11](https://www.youtube.com/watch?v=07G7aC14Y_w&t=311s) [E-document linkage from documents](../features/e-document-linkage.md) in What's new in E-Documents: Overview (GA, 0 min)
- [2:02](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=122s) [Validate message and error dialog text](../features/page-scripting-validate-dialog-text.md) in What's new in Page Scripting (GA, 0 min)
- [0:06](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=6s) [Sustainability formulas on purchase documents](../features/sustainability-formulas-purchase.md) in What's new in Sustainability (GA, 0 min)
- [1:44](https://www.youtube.com/watch?v=07G7aC14Y_w&t=104s) [Remittance advice from payment journal](../features/e-document-remittance-advice.md) in What's new in E-Documents: Overview (GA, 0 min)
- [8:59](https://www.youtube.com/watch?v=kOCiyVql0go&t=539s) [Permission sets for Fabric integration](../features/fabric-permission-sets.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 0 min)
- [3:56](https://www.youtube.com/watch?v=hNom9ZZuca0&t=236s) [AI Test Toolkit migration to data-driven tests](../features/ai-test-toolkit-migration.md) in What's new: Testability Enhancements (announced, 0 min)
- [1:24](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=84s) [Reverse sustainability ledger entries](../features/reverse-sustainability-ledger-entries.md) in What's new in Sustainability (GA, 0 min)
- [5:03](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=303s) [Signature line design control](../features/signature-line-design-control.md) in What's new in Document Reporting: Word add-in (GA, 0 min)
- [1:43](https://www.youtube.com/watch?v=HixajKEd-A4&t=103s) [Match production usage limit](../features/match-production-usage-limit.md) in What's new: Match Production Database Configuration (GA, 0 min)
- [5:15](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=315s) [Self-billing PEPPOL format](../features/self-billing-peppol.md) in What's new in Finance: Overview (GA, 0 min)
- [0:44](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=44s) [Value chain emissions in more documents](../features/value-chain-emissions-journals-service.md) in What's new in Sustainability (GA, 0 min)
- [0:59](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=59s) [Scope 3 tracking by item tracking](../features/scope-3-item-tracking.md) in What's new in Sustainability (GA, 0 min)
- [1:31](https://www.youtube.com/watch?v=07G7aC14Y_w&t=91s) [Sales order from inbound e-document](../features/sales-order-from-inbound-e-document.md) in What's new in E-Documents: Overview (GA, 0 min)
- [0:57](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=57s) [Automatic creation of tax jurisdictions and tax areas](../features/shopify-auto-create-tax-jurisdictions.md) in What's new: Shopify Tax Matching (preview) (preview, 0 min)
- [4:50](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=290s) [Amounts design control](../features/amounts-design-control.md) in What's new in Document Reporting: Word add-in (GA, 0 min)
- [3:42](https://www.youtube.com/watch?v=hNom9ZZuca0&t=222s) [Data-driven tests via AL tool and AL MCP](../features/data-driven-tests-al-tool-mcp.md) in What's new: Testability Enhancements (GA, 0 min)
- [1:48](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=108s) [Collect Amount from GL remembers posted amounts](../features/collect-amount-from-gl-remaining.md) in What's new in Sustainability (GA, 0 min)
- [0:33](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=33s) [NST on .NET 10](../features/nst-dotnet-10.md) in What's new: Server and Database (GA, 0 min)
- [1:32](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=92s) [Automatic upgrade of excise configuration](../features/excise-configuration-upgrade.md) in What's new in Finance: Overview (GA, 0 min)
- [1:51](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=111s) [Multiple selection in grids](../features/page-scripting-multi-select.md) in What's new in Page Scripting (GA, 0 min)
- [18:31](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1111s) [Read isolation for isolated storage](../features/isolated-storage-read-isolation.md) in What's new in AL and Tools (GA, 0 min)
- [2:13](https://www.youtube.com/watch?v=HixajKEd-A4&t=133s) [Match production paid license requirement](../features/match-production-paid-license.md) in What's new: Match Production Database Configuration (GA, 0 min)

## Status at a glance

| Status | Playlist features | Minutes | Said on stage |
|---|---|---|---|
| GA | 62 | 129 | 1 |
| preview | 3 | 6 | 3 |
| announced | 2 | 2 | 2 |

## How this list was made

The extraction model rated every feature's developer relevance (high, medium, low). High is the playlist, medium is also worth a look.

_Generated by pipeline step 06 from config/audiences.json. Status rule: a feature is shown as GA unless the presenters said otherwise, which is how Microsoft runs the launch event; "said on stage" counts the ones with an evidence quote. Not official._
