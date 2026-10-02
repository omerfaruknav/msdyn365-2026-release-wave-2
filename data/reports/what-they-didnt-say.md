---
wave: 2026w2
kind: gap-analysis
documented: 81
documented_and_shown: 16
documented_not_shown: 65
shown_not_documented: 7
status_conflicts: 0
silent_on_status: 19
baseline_status: ok
generated_at: 2026-10-02T08:41:18.051Z
---

# What they didn't say - 2026 release wave 2

Microsoft no longer publishes per-feature release plans. The baseline here is the official documentation: 81 documented features (docs-preview-features, docs-whatsnew-overview, ai-at-work-roadmap, fetched 2026-10-02). Against that: 16 documented features were shown or discussed in the videos, 65 were not, 7 things from the videos have no documented counterpart, and 0 features have a status conflict between docs and video.

The documented list and the videos barely overlap in spirit. Reporting has thirteen documented items, none shown. The expense agent has seven, none shown. Shopify, sustainability and supply chain also went unmentioned. Most of those are general availability, so the quiet ones are not the unfinished ones. If you came for Word layouts or carbon footprints, the stage had other plans.

What did get shown but never documented is a tidy pattern: developer plumbing and MCP housekeeping. The integer to big integer change got 6 minutes and public package resources got 4. The MCP toggle, the server features box and the landing page got a minute or less, and read isolation for isolated storage got a brief mention in the summary. None has a stated status. They are small, technical and aimed at developers, which suggests the presenters talked about what they were excited to show, not what was written down.

_The commentary above was written by Claude from the lists below (claude-sonnet-5-5). The lists are generated from the data; confidence levels come from the matching step and from data/release-plan/overrides.json._

## Shown but not documented (the gems)

- **[Integer to big integer field change](../features/integer-to-biginteger-field-change.md)** (Developer tools, status not stated, 6 min, match confidence none) - [10:06 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=606s)
- **[Public package resources](../features/public-package-resources.md)** (Developer tools, status not stated, 4 min, match confidence none) - [9:47 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=587s)
- **[MCP server on/off toggle](../features/mcp-server-toggle.md)** (Admin and platform, status not stated, 1 min, match confidence none) - [6:04 What's new: MCP Server](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s)
- **[Server features box in MCP configuration](../features/mcp-server-features-box.md)** (Admin and platform, status not stated, 1 min, match confidence low) - [6:04 What's new: MCP Server](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) - nearest doc item: [Run data queries with MCP Server](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#run-data-queries-with-mcp-server)
- **[Agents generating page scripts](../features/agents-generating-page-scripts.md)** (Copilot and agents, status not stated, 1 min, match confidence low) - [2:29 What's new in Page Scripting](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=149s) - nearest doc item: [Page Scripting enters General Availability](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#page-scripting-enters-general-availability)
- **[MCP server landing page (aka.ms/bcmcp)](../features/mcp-server-landing-page.md)** (Copilot and agents, status not stated, 0 min, match confidence none) - [7:32 What's new: MCP Server](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=452s)
- **[Explicit read isolation for isolated storage](../features/isolated-storage-read-isolation.md)** (Developer tools, status not stated, 0 min, match confidence none) - [18:31 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1111s)

## Documented but not shown

### Integration (Fabric, Shopify, MDM) (6)

- [Map new Dataverse fields in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#map-new-dataverse-fields-in-business-central) - docs: General availability
- [Control sales document creation for Shopify orders and returns](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#control-sales-document-creation-for-shopify-orders-and-returns) - docs: General availability
- [Keep Shopify connections current](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#keep-shopify-connections-current) - docs: General availability
- [Manage Shopify B2B companies, catalogs, and pricing](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#manage-shopify-b2b-companies-catalogs-and-pricing) - docs: General availability
- [Process Shopify order changes, exchanges, and refunds](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#process-shopify-order-changes-exchanges-and-refunds) - docs: General availability
- [Synchronize tariff numbers and origin values with Shopify](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#synchronize-tariff-numbers-and-origin-values-with-shopify) - docs: General availability

### Copilot and agents (7)

- [Enable Microsoft Copilot chat experience](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#enable-microsoft-copilot-chat-experience) - docs: Public preview
- [Improve purchase order matching in Payables Agent](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#improve-purchase-order-matching-in-payables-agent) - docs: General availability
- [Manage agent permissions easier](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#manage-agent-permissions-easier) - docs: General availability
- [Manage tasks from all agents in dedicated task pane](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#manage-tasks-from-all-agents-in-dedicated-task-pane) - docs: General availability
- [Review content generated by agents directly on pages](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#review-content-generated-by-agents-directly-on-pages) - docs: General availability
- [Show avatars for record creators and modifiers in list](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#show-avatars-for-record-creators-and-modifiers-in-list) - docs: General availability
- [Updates to Agent UI experience](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#updates-to-agent-ui-experience) - docs: General availability

### Developer tools (8)

- [Access application links through ModuleInfo](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#access-application-links-through-moduleinfo) - docs: General availability
- [AL developers can turn indexes on/off in AL code.](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#al-developers-can-turn-indexes-onoff-in-al-code) - docs: General availability
- [Configure AL MCP workspaces dynamically](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#configure-al-mcp-workspaces-dynamically) - docs: General availability
- [Diagnose AL MCP server activity with file logging](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#diagnose-al-mcp-server-activity-with-file-logging) - docs: General availability
- [Get clearer guidance for AL object structure](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#get-clearer-guidance-for-al-object-structure) - docs: General availability
- [Restrict global symbol resolution to a minor version](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#restrict-global-symbol-resolution-to-a-minor-version) - docs: General availability
- [Simplify AL extension setup and authentication in Visual Studio Code](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#simplify-al-extension-setup-and-authentication-in-visual-studio-code) - docs: General availability
- [Track AL compiler diagnostics in automated builds](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#track-al-compiler-diagnostics-in-automated-builds) - docs: General availability

### E-Documents (1)

- [Exchange EDI documents](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#exchange-edi-documents) - docs: Public preview

### Expense Agent (7)

- [Add date ranges and vehicle types in your mileage calculation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#add-date-ranges-and-vehicle-types-in-your-mileage-calculation) - docs: Public preview
- [AI-Driven Approvals](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#ai-driven-approvals) - docs: Public preview
- [Calculate and report VAT based on expense reports](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#calculate-and-report-vat-based-on-expense-reports) - docs: Public preview
- [Calculate withholding tax automatically in expense reports](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#calculate-withholding-tax-automatically-in-expense-reports) - docs: Public preview
- [Improve duplicates prevention](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#improve-duplicates-prevention) - docs: Public preview
- [More countries and languages](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#more-countries-and-languages) - docs: Public preview
- [Use assigned projects only in the web app](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-assigned-projects-only-in-the-web-app) - docs: Public preview

### Finance (3)

- [Calculate multiple excise duties per item](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#calculate-multiple-excise-duties-per-item) - docs: Public preview
- [Use withholding taxes (WHT) with employee transactions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-withholding-taxes-wht-with-employee-transactions) - docs: Public preview
- [Vendor specific number series for Self-billing Invoices](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#vendor-specific-number-series-for-self-billing-invoices) - docs: Public preview

### Admin and platform (8)

- [Administrators can turn SIFT indexes on/off](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#administrators-can-turn-sift-indexes-onoff) - docs: General availability
- [Monitor usage of Open in Excel with telemetry](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#monitor-usage-of-open-in-excel-with-telemetry) - docs: General availability
- [Faster data loading with improved data model for table extensions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#faster-data-loading-with-improved-data-model-for-table-extensions) - docs: General availability
- [Agent actions review notifications on lists](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#agent-actions-review-notifications-on-lists) - docs: General availability
- [Preview images directly in web client](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#preview-images-directly-in-web-client) - docs: General availability
- [Show recently searched in Tell Me](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#show-recently-searched-in-tell-me) - docs: General availability
- [Show recently used in lookups](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#show-recently-used-in-lookups) - docs: General availability
- [Apply line discounts and fees on contract lines](https://www.microsoft.com/en-us/microsoft-365/roadmap?id=573311) - docs: General Availability

### Reporting and analytics (13)

- [Automate report outputs](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#automate-report-outputs) - docs: General availability
- [Bookmark list views and analysis tabs](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#bookmark-list-views-and-analysis-tabs) - docs: General availability
- [Brand document reports with report themes](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#brand-document-reports-with-report-themes) - docs: General availability
- [Control the lifecycle of all report layouts](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#control-the-lifecycle-of-all-report-layouts) - docs: General availability
- [Design document report themes with the updated Word add-in](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#design-document-report-themes-with-the-updated-word-add-in) - docs: General availability
- [Design document reports with the updated Word add-in](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#design-document-reports-with-the-updated-word-add-in) - docs: General availability
- [Design header/footer layouts for document reports with the updated Word add-in](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#design-headerfooter-layouts-for-document-reports-with-the-updated-word-add-in) - docs: General availability
- [Financial report changes are now always logged](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#financial-report-changes-are-now-always-logged) - docs: General availability
- [Reduce complexity of report datasets](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#reduce-complexity-of-report-datasets) - docs: General availability
- [Reuse header/footer layouts across document reports](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#reuse-headerfooter-layouts-across-document-reports) - docs: General availability
- [Run multiple financial reports and get a single PDF output](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#run-multiple-financial-reports-and-get-a-single-pdf-output) - docs: General availability
- [Trace G/L account usage in finance reports](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#trace-gl-account-usage-in-finance-reports) - docs: General availability
- [Use conditional visibility in the updated Word add-in](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-conditional-visibility-in-the-updated-word-add-in) - docs: General availability

### Supply chain (6)

- [Carry subcontracting instructions into purchase orders](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#carry-subcontracting-instructions-into-purchase-orders) - docs: General availability
- [Post direct transfer orders from warehouse-enabled locations](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#post-direct-transfer-orders-from-warehouse-enabled-locations) - docs: General availability
- [Reduce manual work in quality tests and inspections](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#reduce-manual-work-in-quality-tests-and-inspections) - docs: General availability
- [Set up and explore subcontracting more easily](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#set-up-and-explore-subcontracting-more-easily) - docs: General availability
- [Use inventory put-aways and picks for subcontracting](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-inventory-put-aways-and-picks-for-subcontracting) - docs: General availability
- [Work more efficiently with manufacturing documents and capacity calendars](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#work-more-efficiently-with-manufacturing-documents-and-capacity-calendars) - docs: General availability

### Sustainability (6)

- [Estimate your carbon footprint in Service Management](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#estimate-your-carbon-footprint-in-service-management) - docs: General availability
- [Reverse Sustainability Ledger entries transaction](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#reverse-sustainability-ledger-entries-transaction) - docs: General availability
- [Track your carbon footprint for fixed assets](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#track-your-carbon-footprint-for-fixed-assets) - docs: General availability
- [Track your carbon footprint with item journals and item reclassification journals](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#track-your-carbon-footprint-with-item-journals-and-item-reclassification-journals) - docs: General availability
- [Use formulas to calculate emissions in purchase documents](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-formulas-to-calculate-emissions-in-purchase-documents) - docs: General availability
- [Use specific method for carbon footprint calculation when enabling item tracking](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-specific-method-for-carbon-footprint-calculation-when-enabling-item-tracking) - docs: General availability

## Status conflicts

- none found: where both sides state a status, they agree

## Docs state a status, the video did not

19 matched features where the presenters never said preview or GA but the docs do:

- [Namespaces in translation IDs](../features/namespaces-in-translation-ids.md): docs say GA ([Translate objects with the same name in different namespaces](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#translate-objects-with-the-same-name-in-different-namespaces))
- [Keys spanning base and extension fields](../features/keys-spanning-extension-fields.md): docs say GA ([Developers can define indexes that span fields from a base table and its table extensions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#developers-can-define-indexes-that-span-fields-from-a-base-table-and-its-table-extensions))
- [AL language server (LSP)](../features/al-language-server-lsp.md): docs say GA ([Use AL language intelligence from AI agents and other editors](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-al-language-intelligence-from-ai-agents-and-other-editors))
- [MCP data tools (find tables, table relations, table schema, data query)](../features/mcp-server-data-tools.md): docs say GA ([Run data queries with MCP Server](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#run-data-queries-with-mcp-server))
- [Call graph analysis (AL tool graph command)](../features/al-tool-call-graph.md): docs say GA ([Audit AL app accessibility and debugging boundaries](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#audit-al-app-accessibility-and-debugging-boundaries))
- [Launch profiling MCP proxy](../features/launch-profiling-mcp-proxy.md): docs say GA ([Profile slow Business Central sessions with AI agents](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#profile-slow-business-central-sessions-with-ai-agents))
- [Data-driven tests (test data source)](../features/data-driven-tests.md): docs say GA ([Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites))
- [Default implementation for interface methods](../features/interface-default-implementation.md): docs say GA ([Evolve AL interfaces with default implementations](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#evolve-al-interfaces-with-default-implementations))
- [IsDirty on Record and RecordRef](../features/isdirty-record-recordref.md): docs say GA ([Check records for uncommitted changes](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#check-records-for-uncommitted-changes))
- [Created by and modified by full name system fields](../features/audit-name-system-fields.md): docs say GA ([Use system audit fields in analysis mode and in profiles](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-system-audit-fields-in-analysis-mode-and-in-profiles))
- [Test handlers](../features/test-handlers.md): docs say GA ([Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites))
- [Required pending attribute](../features/interface-required-pending-attribute.md): docs say GA ([Evolve AL interfaces with default implementations](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#evolve-al-interfaces-with-default-implementations))
- [Action inherits page tooltip](../features/action-inherits-page-tooltip.md): docs say GA ([Actions on reports and pages can now inherit tooltips](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#actions-on-reports-and-pages-can-now-inherit-tooltips))
- [Launch snapshot MCP proxy](../features/launch-snapshot-mcp-proxy.md): docs say GA ([Debug recorded Business Central failures with an AI agent](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#debug-recorded-business-central-failures-with-an-ai-agent))
- [Default test handlers](../features/default-test-handlers.md): docs say GA ([Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites))
- [Get next object ID tool (MCP)](../features/al-mcp-get-next-object-id.md): docs say GA ([Let agents allocate free AL object IDs](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#let-agents-allocate-free-al-object-ids))
- [Command line test run with JSON output](../features/command-line-test-run-json.md): docs say GA ([Run AL tests from command-line and CI/CD workflows](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#run-al-tests-from-command-line-and-cicd-workflows))
- [Validate message and error dialog text](../features/page-scripting-validate-dialog-text.md): docs say GA ([Page Scripting enters General Availability](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#page-scripting-enters-general-availability))
- [Multiple selection in grids (page scripting)](../features/page-scripting-multiple-selection.md): docs say GA ([Page Scripting enters General Availability](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#page-scripting-enters-general-availability))

_Generated by pipeline step 06 from data/index/gap-analysis.json. Not official. Matching is done by a language model with keyword candidates; waldo corrects it in data/release-plan/overrides.json._
