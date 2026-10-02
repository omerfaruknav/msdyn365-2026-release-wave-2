---
wave: 2026w2
kind: digest
audience: admins
minutes: 64
playlist_features: 51
also_features: 60
generated_at: 2026-10-02T12:12:46.677Z
---

# Administrators digest - 2026 release wave 2

If you run the tenants: admin center, updates, permissions, security, environments, telemetry, here are the 64 minutes that matter, out of 7h09 of launch event video. 51 features in the playlist, 60 more worth a look, every item deep-linked to the second where they explain it.

The theme for administrators this wave is that things moved house. Per tenant extension management now lives in the admin center, with upload, install, update, scheduled installs and an audit trail on the operations page. Database export became an environment operation too, and Copilot now has one chat, plus a capabilities page where you decide who gets what.

Check the deprecations first. PTE management in the extension management pages and the automation API will be deprecated as of version 30.0, so migrate to the admin center and do not mix both experiences in one environment. The admin center API export history endpoint stays only on versions 2.29 and earlier, and the export history page is retiring. Any script that touches either deserves a look.

After that, try the new switches, such as the MCP server toggle. Early hotfix install skips safe deployment, so keep it for fixes that matter to you. Match production is limited to three occurrences per tenant per month. Fabric export logs are still in preview.

_The three paragraphs above were written by Claude from the feature list below (claude-haiku-4-5-20251001). Everything else on this page is generated from the data._

## The playlist

### Copilot and agents (14 min)

- [0:06 What's new: Explore the new Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=6s) - **[Microsoft Copilot chat in Business Central](../features/microsoft-copilot-chat.md)** (GA, 12 min) - A unified Microsoft Copilot chat opens from the Copilot button in Business Central, replacing the old Copilot UI. Also in [What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=5s), [Introducing: New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=WL3m2dffwU8&t=8s).
- [1:57 What's new: Explore the new Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=117s) - **[Business Central data questions](../features/copilot-business-central-data-questions.md)** (GA, 2 min) - Copilot searches Business Central data with the user's context, permissions and company, for example most urgent sales orders. Also in [Introducing: New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=WL3m2dffwU8&t=131s).
- [14:59 What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=899s) - **[Feedback on Copilot responses](../features/copilot-response-feedback.md)** (GA, 1 min) - Users can give thumbs up or down and share screenshots and prompts to help troubleshoot unexpected results.

### Expense Agent (11 min)

- [0:16 What's new in Expense Agent: Improved Approval Process](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=16s) - **[AI policy compliance check](../features/expense-ai-policy-compliance.md)** (GA, 5 min) - An admin setting lets AI check expenses against policies configured per expense category, and flag non-compliant or unclear items for the approver. Also in [What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=300s), [What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=22s).
- [2:57 What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=177s) - **[Flagged and compliant policy statuses](../features/expense-policy-statuses.md)** (GA, 2 min) - Reports and lines show compliant or flagged, with AI reasoning beside flagged expenses.
- [2:14 What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=134s) - **[Presubmission policy check](../features/expense-submitter-policy-check.md)** (GA, 2 min) - Submitters can run the AI policy check manually with a check policies button before sending the report. Also in [What's new in Expense Agent: Improved Approval Process](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=167s).
- [1:01 What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=61s) - **[Free-text expense policies per category](../features/expense-free-text-policies.md)** (GA, 1 min) - Policies are free-text lines linked to expense categories, including custom ones.
- [6:15 What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=375s) - **[Policies pending after changes](../features/expense-policies-pending-after-change.md)** (GA, 1 min) - Changing merchant or description resets the status to policies pending until re-evaluated.

### Admin and platform (36 min)

- [10:12 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=612s) - **[Early install of hotfixes for Microsoft apps](../features/early-hotfix-install-microsoft-apps.md)** (GA, 3 min) - Customers can install a prepared hotfix version of a Microsoft app immediately or in the next update window from the app details page.
- [0:06 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=6s) - **[PTE lifecycle management in the admin center](../features/pte-lifecycle-admin-center.md)** (GA, 3 min) - Upload, install and update operations are added to PTE management in the admin center, bringing full PTE lifecycle management into one place.
- [4:18 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=258s) - **[Multiple scheduled PTE installs and cancel](../features/pte-multiple-scheduled-installs.md)** (GA, 3 min) - Several future installs can be scheduled for the same PTE, for example one version on the next minor and another on the next major update.
- [4:18 What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=258s) - **[Index management access](../features/index-management-access.md)** (GA, 2 min) - The index management page can be found through Tell Me, including semantic search, and through a Manage indexes button on table information.
- [1:34 What's new: Database Export Enhancements](https://www.youtube.com/watch?v=KNy2KujjheU&t=94s) - **[Database export as an environment operation](../features/database-export-environment-operation.md)** (GA, 1 min) - An export appears on the operations page with status, times, who triggered it and the error on failure.
- [6:04 What's new: MCP Server](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) - **[MCP server on/off toggle](../features/mcp-server-toggle.md)** (GA, 1 min) - A toggle on the Copilot and agent capabilities page activates or deactivates the MCP server as a whole.
- [3:19 What's new: Data Analysis](https://www.youtube.com/watch?v=ZpzZ6El8GXY&t=199s) - **[System fields in profiles](../features/system-fields-in-profiles.md)** (GA, 1 min) - In the profile page designer, system fields can be found and added to a page. Also in [What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=536s).
- [10:25 What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=625s) - **[Permission overview page in context](../features/permission-overview-context.md)** (GA, 1 min) - The permissions overview page can be opened from the permission sets list, the permission set card and the table information page.
- [3:19 What's new: Data Analysis](https://www.youtube.com/watch?v=ZpzZ6El8GXY&t=199s) - **[Bookmarks in profiles](../features/bookmarks-in-profiles.md)** (GA, 1 min) - Bookmarked views can be added to a profile's role center for all its users.
- [6:49 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=409s) - **[Operations page audit of PTE actions](../features/pte-operations-audit.md)** (GA, 1 min) - The environment operations page captures every PTE install, update and scheduling action.
- [9:35 Introducing: Composite Document Layouts](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=575s) - **[Feature switch for the new document experience](../features/new-document-experience-switch.md)** (GA, 1 min) - Feature management has a setting to enable or turn off the new document experience.
- [6:04 What's new: MCP Server](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) - **[Server features box in MCP configuration](../features/mcp-server-features-box.md)** (GA, 1 min) - The MCP configuration page separates server features from APIs and shows which system tools each feature enables.
- [3:09 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=189s) - **[Update a PTE from the admin center](../features/update-pte-admin-center.md)** (GA, 1 min) - From the app details page you can install a different version of an installed PTE.
- [1:09 What's new: Match Production Database Configuration](https://www.youtube.com/watch?v=HixajKEd-A4&t=69s) - **[Automatic revert after 72 hours](../features/match-production-auto-revert.md)** (GA, 1 min) - The environment reverts to a typical sandbox configuration after 72 hours.
- [6:53 What's new: Enhanced Financial Reporting](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=413s) - **[Change log for financial report definitions](../features/financial-report-change-log.md)** (GA, 1 min) - Change log is set up automatically on financial report definition tables, auditing changes with user ID.
- [8:42 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=522s) - **[Deprecation of in-environment PTE management](../features/old-pte-management-deprecation.md)** (announced, 1 min) - PTE management in the extension management pages and in the automation API will be deprecated as of version 30.0.
- [11:45 What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=705s) - **[Telemetry for Open in Excel](../features/open-in-excel-telemetry.md)** (GA, 1 min) - A telemetry signal records who used Open in Excel and when.
- [10:23 What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=623s) - **[Copilot and agent capabilities admin control](../features/copilot-agent-capabilities-admin.md)** (GA, 1 min) - The Copilot and agent capabilities page lets admins opt in or out of AI features and control who can use them.
- [0:07 What's new: Match Production Database Configuration](https://www.youtube.com/watch?v=HixajKEd-A4&t=7s) - **[Match production configuration](../features/match-production-configuration.md)** (GA, 1 min) - Administrators can temporarily match a sandbox database configuration to a typical production database.
- [0:45 What's new: Database Export Enhancements](https://www.youtube.com/watch?v=KNy2KujjheU&t=45s) - **[Database export reliability](../features/database-export-reliability.md)** (GA, 1 min) - The most common failures were removed across the export pipeline, so fewer than 1% of exports fail.
- [3:15 What's new: Database Export Enhancements](https://www.youtube.com/watch?v=KNy2KujjheU&t=195s) - **[Export history API endpoint deprecated](../features/export-history-endpoint-deprecated.md)** (GA, 1 min) - The admin center API export history endpoint is deprecated and kept only on API versions 2.29 and earlier.
- [1:15 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=75s) - **[Deployment schedules for PTE installs](../features/pte-deployment-schedules.md)** (GA, 1 min) - When installing a PTE you can choose immediate, next minor update or next major update, plus a sync mode.
- [2:39 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=159s) - **[App view filter for per tenant extensions](../features/app-view-filter-pte.md)** (GA, 1 min) - The apps page can be filtered to show different views of installed apps, for example only per tenant extensions.
- [9:36 What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=576s) - **[Copilot respects user permissions](../features/copilot-respects-permissions.md)** (GA, 1 min) - Copilot runs as the signed-in user and accesses data only within their permissions.
- [6:09 What's new: Cross-environment Master Data Management](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=369s) - **[Permission set for HQ read access](../features/mdm-hq-read-permission-set.md)** (GA, 1 min) - A purpose-designed permission set with read access to default tables is assigned to the app user in the source.
- [2:18 What's new: Database Export Enhancements](https://www.youtube.com/watch?v=KNy2KujjheU&t=138s) - **[Single Export database button](../features/export-database-button.md)** (GA, 0 min) - Export database is now one button instead of a dropdown with export history.
- [2:14 What's new: Cross-environment Master Data Management](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=134s) - **[Entra app registration and consent](../features/mdm-entra-app-registration.md)** (GA, 0 min) - An Entra app with API read/write all permissions is registered and the HQ admin gives consent in Business Central.
- [3:03 What's new: Database Export Enhancements](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) - **[Database export history page retirement](../features/database-export-history-retirement.md)** (announced, 0 min) - The database export history page is retiring.
- [8:59 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=539s) - **[Permission sets for Fabric integration](../features/fabric-permission-sets.md)** (preview, 0 min) - Permission sets cover activation, administration and read-only configuration access.
- [1:59 What's new: Match Production Database Configuration](https://www.youtube.com/watch?v=HixajKEd-A4&t=119s) - **[Match production in admin center API](../features/match-production-admin-api.md)** (GA, 0 min) - The match production configuration operation is supported in the admin center APIs.
- [3:35 What's new: Cross-environment Master Data Management](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=215s) - **[Shared or per-subsidiary app registration](../features/mdm-shared-app-registration.md)** (GA, 0 min) - One app can be shared across subsidiaries or one registered per subsidiary, depending on audit needs.
- [1:09 What's new: Match Production Database Configuration](https://www.youtube.com/watch?v=HixajKEd-A4&t=69s) - **[Match production operation tracking](../features/match-production-operation-tracking.md)** (GA, 0 min) - The operation can be tracked like other admin center operations.
- [1:43 What's new: Match Production Database Configuration](https://www.youtube.com/watch?v=HixajKEd-A4&t=103s) - **[Match production usage limit](../features/match-production-usage-limit.md)** (GA, 0 min) - The operation is limited to three occurrences per tenant per calendar month, each lasting 72 hours.
- [0:33 What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=33s) - **[NST on .NET 10](../features/nst-dotnet-10.md)** (GA, 0 min) - The Business Central service tier now runs on .NET 10.
- [0:56 What's new: Match Production Database Configuration](https://www.youtube.com/watch?v=HixajKEd-A4&t=56s) - **[Restart warning flyout](../features/match-production-restart-warning.md)** (GA, 0 min) - The admin center button opens a flyout explaining the action and warning that the environment restarts.
- [2:13 What's new: Match Production Database Configuration](https://www.youtube.com/watch?v=HixajKEd-A4&t=133s) - **[Match production paid license requirement](../features/match-production-paid-license.md)** (GA, 0 min) - The feature is only available on tenants with a paid license type.

### Integration (Fabric, Shopify, MDM) (9 min)

- [0:06 What's new: Cross-environment Master Data Management](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=6s) - **[Cross-environment master data management](../features/cross-environment-master-data-management.md)** (GA, 2 min) - Subsidiaries in other environments of the same tenant can pull master data from the HQ company. Also in [What's new in Finance: Overview](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=331s).
- [7:22 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=442s) - **[Export logs pushed to Fabric](../features/fabric-export-logs-in-fabric.md)** (preview, 2 min) - Synchronization logs are also written into Fabric for monitoring through the SQL endpoint.
- [8:12 What's new: Cross-environment Master Data Management](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=492s) - **[Change propagation and synchronization log](../features/mdm-change-propagation-log.md)** (GA, 1 min) - Source changes show in the subsidiary after about a minute.
- [6:50 What's new: Cross-environment Master Data Management](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=410s) - **[Initial cross-environment synchronization](../features/mdm-initial-synchronization.md)** (GA, 1 min) - Start all runs default tables in a predefined order, starting with business relations and dimensions.
- [7:07 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=427s) - **[Synchronization overview and details logs](../features/fabric-synchronization-logs.md)** (preview, 1 min) - Overview and details logs are under monitoring with views for all, errors or pushed data.
- [1:32 What's new: Cross-environment Master Data Management](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=92s) - **[Pull-based incremental synchronization](../features/mdm-pull-incremental-sync.md)** (GA, 1 min) - HQ stays read-only and subsidiaries pull only the changes across environments.

### Supply chain (1 min)

- [15:52 What's new in SCM: Overview](https://www.youtube.com/watch?v=WACQbAEVOJg&t=952s) - **[Quality inspection assignment and role-based control](../features/quality-inspection-assignment-roles.md)** (GA, 1 min) - Changing a header field prompts self-assignment.

## Also worth a look

- [11:11](https://www.youtube.com/watch?v=UFLo2XGGS14&t=671s) [Profiling MCP for agents](../features/profiling-mcp.md) in What's new: Agentic Developer Loop (GA, 6 min)
- [4:23](https://www.youtube.com/watch?v=UFLo2XGGS14&t=263s) [Telemetry-triggered snapshot capture](../features/telemetry-triggered-snapshot.md) in What's new: Agentic Developer Loop (GA, 6 min)
- [5:52](https://www.youtube.com/watch?v=nb_a42dmSqE&t=352s) [Italian Subcontracting Migration app](../features/italian-subcontracting-migration-app.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 6 min)
- [25:47](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1547s) [AL graph](../features/al-graph.md) in What's new in AL and Tools (GA, 5 min)
- [14:33](https://www.youtube.com/watch?v=UFLo2XGGS14&t=873s) [Agentic slow SQL analysis via telemetry](../features/agentic-slow-sql-analysis.md) in What's new: Agentic Developer Loop (GA, 3 min)
- [14:51](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=891s) [Use Shopify order number](../features/shopify-order-number-as-document-number.md) in What's new in Shopify Connector: Overview (GA, 3 min)
- [0:31](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=31s) [Layout status for app-supplied layouts](../features/layout-status-app-layouts.md) in What's new in reporting: Layout Management and Report Inbox API's (GA, 3 min)
- [2:19](https://www.youtube.com/watch?v=nb_a42dmSqE&t=139s) [Legacy subcontracting pre-check](../features/legacy-subcontracting-pre-check.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 3 min)
- [23:29](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1409s) [Test handlers](../features/test-handlers.md) in What's new in AL and Tools (GA, 3 min)
- [4:53](https://www.youtube.com/watch?v=nb_a42dmSqE&t=293s) [Install Subcontracting app from Manufacturing Setup](../features/install-subcontracting-manufacturing-setup.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 2 min)
- [8:47](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=527s) [Expense Agent mobile app](../features/expense-agent-mobile-app.md) in What's new in Expense Agent: Overview (preview, 2 min)
- [12:44](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=764s) [Company tax registration ID and country extensions](../features/shopify-company-tax-registration-id.md) in What's new in Shopify Connector: Overview (GA, 2 min)
- [24:55](https://www.youtube.com/watch?v=D_Lur52IrIg&t=1495s) [Default test handlers](../features/default-test-handlers.md) in What's new in AL and Tools (GA, 2 min)
- [0:18](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=18s) [Mileage rates per period](../features/mileage-rates-periods.md) in What's new in Expense Agent: Improved Mileage Handling (GA, 2 min)
- [4:24](https://www.youtube.com/watch?v=i0gBrA1tx50&t=264s) [Non-debuggable boundary audit](../features/al-graph-debuggable-boundary-audit.md) in What's new: ALGraph (GA, 2 min)
- [11:09](https://www.youtube.com/watch?v=WACQbAEVOJg&t=669s) [Direct transfer mode and transit location on transfer routes](../features/transfer-route-mode-transit.md) in What's new in SCM: Overview (GA, 1 min)
- [6:54](https://www.youtube.com/watch?v=nb_a42dmSqE&t=414s) [Run migration by disabling legacy subcontracting](../features/disable-legacy-subcontracting-migration.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [5:23](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=323s) [Provide feedback button](../features/shopify-provide-feedback.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [2:06](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=126s) [Installing the Subcontracting app](../features/subcontracting-app-install-worksheet.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [0:06](https://www.youtube.com/watch?v=nb_a42dmSqE&t=6s) [Subcontracting app replaces Italian subcontracting](../features/italian-subcontracting-replacement.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [4:03](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=243s) [Default theme and header footer levels](../features/default-theme-header-footer-levels.md) in Introducing: Composite Document Layouts (GA, 1 min)
- [0:22](https://www.youtube.com/watch?v=GwrMf1umTFg&t=22s) [Project tracking in the Expense Agent](../features/expense-project-tracking.md) in What's new in Expense Agent: Project Handling (GA, 1 min)
- [2:00](https://www.youtube.com/watch?v=kOCiyVql0go&t=120s) [Fabric connection setup](../features/fabric-connection-setup.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [2:23](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=143s) [Withholding posting groups on employee and expense category](../features/withholding-posting-groups-employee-category.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [2:58](https://www.youtube.com/watch?v=07G7aC14Y_w&t=178s) [EDI setup](../features/edi-setup.md) in What's new in E-Documents: Overview (GA, 1 min)
- [8:04](https://www.youtube.com/watch?v=nb_a42dmSqE&t=484s) [Subcontracting views on purchase and transfer orders](../features/subcontracting-document-views.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [2:37](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=157s) [Mileage rates per vehicle type](../features/mileage-rates-vehicle-type.md) in What's new in Expense Agent: Overview (GA, 1 min)
- [1:19](https://www.youtube.com/watch?v=nb_a42dmSqE&t=79s) [Legacy subcontracting toggle](../features/legacy-subcontracting-toggle.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [3:28](https://www.youtube.com/watch?v=UFLo2XGGS14&t=208s) [Connecting to the snapshot debugging MCP server](../features/snapshot-mcp-connection.md) in What's new: Agentic Developer Loop (GA, 1 min)
- [12:36](https://www.youtube.com/watch?v=WACQbAEVOJg&t=756s) [No blank-location inventory posting setup](../features/no-blank-location-posting-setup.md) in What's new in SCM: Overview (GA, 1 min)
- [0:53](https://www.youtube.com/watch?v=GwrMf1umTFg&t=53s) [Project visibility: all or assigned projects](../features/expense-project-visibility.md) in What's new in Expense Agent: Project Handling (GA, 1 min)
- [8:29](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=509s) [Manage themes and header footer layouts page](../features/manage-themes-header-footer-layouts.md) in What's new in Document Reporting: Word add-in (GA, 1 min)
- [8:12](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=492s) [Approval limits](../features/expense-approval-limits.md) in What's new in Expense Agent: Improved Approval Process (announced, 1 min)
- [6:44](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=404s) [TaxMatch fact box and agent settings](../features/shopify-taxmatch-settings.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [2:05](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=125s) [Find mapping by barcode toggle](../features/shopify-find-mapping-by-barcode.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [2:44](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=164s) [Withholding tax group](../features/withholding-tax-group.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [2:10](https://www.youtube.com/watch?v=07G7aC14Y_w&t=130s) [E-document types and directions](../features/e-document-types-directions.md) in What's new in E-Documents: Overview (GA, 1 min)
- [7:35](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=455s) [Tax match review mode setting](../features/shopify-tax-review-mode.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [3:32](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=212s) [Gross, net or gross up calculation base](../features/withholding-calculation-base.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [10:11](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=611s) [Employee withholding exemption and certificate](../features/employee-withholding-exemption.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [10:05](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=605s) [Subcontracting FastTab in Manufacturing setup](../features/manufacturing-setup-subcontracting-fasttab.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [1:48](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=108s) [Standard mileage rate](../features/mileage-standard-rate.md) in What's new in Expense Agent: Improved Mileage Handling (GA, 1 min)
- [8:27](https://www.youtube.com/watch?v=hNom9ZZuca0&t=507s) [Migration from test toolkit events to test handlers](../features/test-toolkit-events-migration.md) in What's new: Testability Enhancements (GA, 1 min)
- [7:54](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=474s) [Withholding at invoice or payment](../features/withholding-calculation-timing.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [2:28](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=148s) [Override of layout description](../features/layout-description-override.md) in What's new in reporting: Layout Management and Report Inbox API's (GA, 1 min)
- [6:08](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=368s) [US-only TaxMatch extension](../features/shopify-taxmatch-us-extension.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [9:08](https://www.youtube.com/watch?v=nb_a42dmSqE&t=548s) [Migrated vendor fields and subcontracting prices](../features/migrated-vendor-subcontracting-prices.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [4:49](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=289s) [Skipped records and API errors in the role center](../features/shopify-role-center-errors.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [9:40](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=580s) [Admin center API for PTE operations](../features/admin-center-api-pte-operations.md) in What's new: Manage PTEs in the Admin Center (GA, 1 min)
- [3:39](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=219s) [API overview page](../features/api-overview-page.md) in What's new in reporting: Layout Management and Report Inbox API's (GA, 1 min)
- [8:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=499s) [Fabric integration APIs](../features/fabric-integration-apis.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 0 min)
- [3:07](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=187s) [Cross-environment setup wizard](../features/mdm-cross-environment-wizard.md) in What's new: Cross-environment Master Data Management (GA, 0 min)
- [3:06](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=186s) [Subcontracting assisted setup](../features/subcontracting-assisted-setup.md) in What's new in SCM: Subcontracting (GA, 0 min)
- [2:41](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=161s) [Currency code on mileage rates](../features/mileage-rate-currency.md) in What's new in Expense Agent: Improved Mileage Handling (GA, 0 min)
- [2:22](https://www.youtube.com/watch?v=GwrMf1umTFg&t=142s) [Resource link on the employee card](../features/employee-resource-link.md) in What's new in Expense Agent: Project Handling (GA, 0 min)
- [2:43](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=163s) [Pictures and attachments sync](../features/mdm-pictures-attachments.md) in What's new: Cross-environment Master Data Management (GA, 0 min)
- [1:28](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=88s) [Expense Agent worldwide availability](../features/expense-agent-worldwide.md) in What's new in Expense Agent: Overview (announced, 0 min)
- [3:55](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=235s) [Simple or compound withholding calculation](../features/withholding-simple-compound.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 0 min)
- [4:15](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=255s) [Withholding thresholds](../features/withholding-thresholds.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 0 min)
- [1:32](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=92s) [Automatic upgrade of excise configuration](../features/excise-configuration-upgrade.md) in What's new in Finance: Overview (GA, 0 min)

## Status at a glance

| Status | Playlist features | Minutes | Said on stage |
|---|---|---|---|
| GA | 46 | 67 | 3 |
| preview | 3 | 3 | 3 |
| announced | 2 | 1 | 2 |

## How this list was made

Everything in the admin and platform area, plus features elsewhere tagged security, permissions, updates, sandbox, telemetry, MDM, operations or PTE management (at least half a minute of airtime, not rated high developer relevance). Features tagged admin or setup are also worth a look.

_Generated by pipeline step 06 from config/audiences.json. Status rule: a feature is shown as GA unless the presenters said otherwise, which is how Microsoft runs the launch event; "said on stage" counts the ones with an evidence quote. Not official._
