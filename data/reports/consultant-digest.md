---
wave: 2026w2
kind: digest
audience: consultants
minutes: 134
playlist_features: 49
also_features: 171
generated_at: 2026-10-02T12:12:46.677Z
---

# Consultants digest - 2026 release wave 2

If you implement, configure and train: finance, supply chain, e-documents, sustainability, Expense Agent, reporting, Copilot and the integrations, here are the 134 minutes that matter, out of 7h09 of launch event video. 49 features in the playlist, 171 more worth a look, every item deep-linked to the second where they explain it.

Subcontracting is the loudest theme here. A new Subcontracting app, WIP ledger entries, purchase order lines, put-aways and a migration path for legacy data take up a big share of the supply chain time. If you have clients on the legacy setup, start there, because disabling it comes with a pre-check and, for Italian data, a separate migration app that now works in production.

Next in line are the Expense Agent and the new Microsoft Copilot chat, which replaces the old Copilot UI. Expect questions about AI policy checks, VAT reclaim, withholding tax and credits, and expect users to ask Copilot about everything, including things unrelated to their data. Reporting gets themes and header footer layouts, and e-documents get EDI and invoicing for France.

Treat the Shopify tax features carefully. Tax matching is in preview, as are the Expense Agent mobile app and the Fabric export logs. Several items are only announced, such as travel requests and the Power BI apps on Fabric, so keep them out of project plans.

_The three paragraphs above were written by Claude from the feature list below (claude-haiku-4-5-20251001). Everything else on this page is generated from the data._

## The playlist

### Supply chain (49 min)

- [1:02 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=62s) - **[Transfer WIP item and WIP ledger entry](../features/transfer-wip-item.md)** (GA, 15 min) - A routing line can be marked with a transfer WIP item to track work in progress moved to and from the subcontractor.
- [5:52 What's new in SCM: Migrate Italian Subcontracting](https://www.youtube.com/watch?v=nb_a42dmSqE&t=352s) - **[Italian Subcontracting Migration app](../features/italian-subcontracting-migration-app.md)** (GA, 6 min) - A separate app, not on AppSource, migrates legacy Italian data and is proposed only when needed.
- [11:12 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=672s) - **[Subcontracting comments and attachments](../features/subcontracting-comments-attachments.md)** (GA, 4 min) - Routing lines get a subcontracting comment copied to the purchase order, editable or inherited from standard tasks. Also in [What's new in SCM: Overview](https://www.youtube.com/watch?v=WACQbAEVOJg&t=66s).
- [24:53 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1493s) - **[Inventory put-away for subcontracting](../features/subcontracting-inventory-put-away.md)** (GA, 3 min) - Subcontracted items can be received with inventory put-aways on locations requiring put-away and pick. Also in [What's new in SCM: Overview](https://www.youtube.com/watch?v=WACQbAEVOJg&t=168s).
- [18:56 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1136s) - **[Subcontractor prices with closest match](../features/subcontractor-prices-closest-match.md)** (GA, 3 min) - Subcontractor prices are matched by closest match on quantity, date, task, unit of measure and variant, not lowest price.
- [2:19 What's new in SCM: Migrate Italian Subcontracting](https://www.youtube.com/watch?v=nb_a42dmSqE&t=139s) - **[Legacy subcontracting pre-check](../features/legacy-subcontracting-pre-check.md)** (GA, 3 min) - An action checks for open transfer and purchase orders with WIP items before disabling legacy subcontracting.
- [8:37 What's new in SCM: Overview](https://www.youtube.com/watch?v=WACQbAEVOJg&t=517s) - **[Direct transfer modes](../features/direct-transfer-modes.md)** (GA, 3 min) - Direct transfer can post in one go or create separate shipment and receipt documents.
- [8:58 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=538s) - **[Subcontracting purchase order lines](../features/subcontracting-purchase-order-lines.md)** (GA, 2 min) - The generated purchase order holds lines for vendor-supplied components, the routing operation, an info line and comment lines with instructions.
- [16:42 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1002s) - **[Item charges on subcontracting receipts](../features/subcontracting-item-charge-receipt.md)** (GA, 2 min) - Item charges can be assigned to posted subcontracting receipt lines, including the operation line.
- [4:53 What's new in SCM: Migrate Italian Subcontracting](https://www.youtube.com/watch?v=nb_a42dmSqE&t=293s) - **[Install Subcontracting app from Manufacturing Setup](../features/install-subcontracting-manufacturing-setup.md)** (GA, 2 min) - The app can be installed from Manufacturing Setup when disabling legacy subcontracting.
- [4:18 What's new in SCM: Overview](https://www.youtube.com/watch?v=WACQbAEVOJg&t=258s) - **[Released production orders from planning worksheet](../features/released-production-orders-planning.md)** (GA, 2 min) - Carrying out action messages can create production orders as released, or released and print.
- [22:59 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1379s) - **[Subcontracting with warehouse receipt](../features/subcontracting-warehouse-receipt.md)** (GA, 2 min) - For directed put-away locations, a subcontracting order needs a warehouse receipt.
- [7:38 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=458s) - **[Subcontracting details fact box on routing](../features/subcontracting-routing-fact-box.md)** (GA, 2 min) - A fact box on production order routing shows whether a line is subcontracted, connected components and the WIP quantity at the subcontractor.

### Copilot and agents (21 min)

- [0:06 What's new: Explore the new Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=6s) - **[Microsoft Copilot chat in Business Central](../features/microsoft-copilot-chat.md)** (GA, 12 min) - A unified Microsoft Copilot chat opens from the Copilot button in Business Central, replacing the old Copilot UI. Also in [What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=5s), [Introducing: New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=WL3m2dffwU8&t=8s).
- [1:31 What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=91s) - **[Web and general knowledge answers](../features/copilot-web-general-answers.md)** (GA, 4 min) - Copilot answers questions not tied to Business Central data using the internet and documentation, such as sales tax setup or travel directions. Also in [What's new: Explore the new Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=42s), [Introducing: New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=WL3m2dffwU8&t=103s).
- [1:57 What's new: Explore the new Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=117s) - **[Business Central data questions](../features/copilot-business-central-data-questions.md)** (GA, 2 min) - Copilot searches Business Central data with the user's context, permissions and company, for example most urgent sales orders. Also in [Introducing: New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=WL3m2dffwU8&t=131s).
- [7:49 What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=469s) - **[Follow-up conversation and suggestions](../features/copilot-follow-up-suggestions.md)** (GA, 2 min) - Users keep asking in the same conversation and Copilot suggests follow-up questions. Also in [What's new: Explore the new Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=74s).
- [13:18 What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=798s) - **[Citations, progress messages and sources](../features/copilot-citations-sources.md)** (GA, 2 min) - Answers include clickable citation pills, progress messages and a sources button listing what the AI used.

### Expense Agent (28 min)

- [0:27 What's new in Expense Agent: Improved Approval Process](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=27s) - **[Approval history and audit trail in the web app](../features/expense-approval-history-web-app.md)** (announced, 6 min) - The web app shows tabs for draft, submitted, approved and history, and approver tabs. Also in [What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=431s).
- [0:16 What's new in Expense Agent: Improved Approval Process](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=16s) - **[AI policy compliance check](../features/expense-ai-policy-compliance.md)** (GA, 5 min) - An admin setting lets AI check expenses against policies configured per expense category, and flag non-compliant or unclear items for the approver. Also in [What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=300s), [What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=22s).
- [9:58 What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=598s) - **[VAT reclaim on expense reports](../features/expense-vat-reclaim.md)** (GA, 3 min) - VAT details from receipts build a VAT specification per line, with multiple rates.
- [4:29 What's new in Expense Agent: Calculate WHT for Expenses](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=269s) - **[Withholding tax on expense report posting](../features/withholding-on-expense-posting.md)** (GA, 3 min) - An expense above the threshold produces a withholding tax entry on posting, visible in preview posting.
- [0:19 What's new in Expense Agent: Use Travel Request](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=19s) - **[Travel requests](../features/travel-requests.md)** (announced, 3 min) - Employees request permission to spend with budget, dates and justification, and the company sees expected expenses. Also in [What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=472s).
- [2:57 What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=177s) - **[Flagged and compliant policy statuses](../features/expense-policy-statuses.md)** (GA, 2 min) - Reports and lines show compliant or flagged, with AI reasoning beside flagged expenses.
- [8:47 What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=527s) - **[Expense Agent mobile app](../features/expense-agent-mobile-app.md)** (preview, 2 min) - A new mobile app for iOS and Android scans receipts, crops the background and works offline. Also in [What's new in Expense Agent: Mobile App (Preview)](https://www.youtube.com/watch?v=4TE8uwIi91k&t=359s).
- [2:14 What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=134s) - **[Presubmission policy check](../features/expense-submitter-policy-check.md)** (GA, 2 min) - Submitters can run the AI policy check manually with a check policies button before sending the report. Also in [What's new in Expense Agent: Improved Approval Process](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=167s).
- [0:18 What's new in Expense Agent: Improved Mileage Handling](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=18s) - **[Mileage rates per period](../features/mileage-rates-periods.md)** (GA, 2 min) - Mileage allowance can have start and end dates for several periods. Also in [What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=124s).

### E-Documents (7 min)

- [0:06 What's new in E-Documents: Overview](https://www.youtube.com/watch?v=07G7aC14Y_w&t=6s) - **[EDI in Business Central](../features/edi-e-documents.md)** (GA, 4 min) - EDI is added to exchange order information between buyer and seller instead of sending email.
- [5:57 What's new in E-Documents: Overview](https://www.youtube.com/watch?v=07G7aC14Y_w&t=357s) - **[E-document messages](../features/e-document-messages.md)** (GA, 2 min) - A message architecture attaches messages such as acknowledgement and order response to the e-document.
- [8:55 What's new in E-Documents: Overview](https://www.youtube.com/watch?v=07G7aC14Y_w&t=535s) - **[Invoicing for France](../features/france-e-invoicing.md)** (GA, 2 min) - Invoicing for France is introduced with three new e-document formats set up on the e-document service, including e-reporting. Also in [What's new in Finance: Overview](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=497s).

### Integration (Fabric, Shopify, MDM) (26 min)

- [17:22 What's new in Shopify Connector: Overview](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1042s) - **[Return documents for Shopify refunds and exchanges](../features/shopify-returns-refunds-documents.md)** (GA, 4 min) - Refunds can create a sales return order or credit memo, chosen in the return and refund processing setting, using the same parameters as the sales order. Also in [What's new: Shopify Tax Matching (preview)](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=597s).
- [10:44 What's new: Shopify Tax Matching (preview)](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=644s) - **[Tax rate mismatch handling](../features/shopify-tax-rate-mismatch.md)** (preview, 3 min) - If the Business Central tax rate differs from the Shopify rate, the order is not created and a review is forced.
- [9:47 What's new in Shopify Connector: Overview](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=587s) - **[B2B catalog import and duplicates](../features/shopify-b2b-catalog-import.md)** (GA, 3 min) - B2B catalogs are imported only when the company exists in Business Central.
- [14:51 What's new in Shopify Connector: Overview](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=891s) - **[Use Shopify order number](../features/shopify-order-number-as-document-number.md)** (GA, 3 min) - A setting in order synchronization on the Shopify shop card lets sales orders and invoices use the Shopify order number as document number with a Shopify number series. Also in [What's new: Shopify Tax Matching (preview)](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=573s).
- [20:32 What's new in Shopify Connector: Overview](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1232s) - **[Tax area code and tax liable on Shopify orders and refunds](../features/shopify-order-tax-area-tax-liable.md)** (preview, 2 min) - Shopify orders get tax area code and tax liable fields, filled from Shopify or by AI and used when the sales document is created, and they can be overridden to skip standard mapping. Also in [What's new: Shopify Tax Matching (preview)](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=197s).
- [7:27 What's new in Shopify Connector: Overview](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=447s) - **[Auto create B2B catalog](../features/shopify-auto-create-b2b-catalog.md)** (GA, 2 min) - The toggle creates a catalog linked to the company location so Business Central prices apply.
- [0:06 What's new: Cross-environment Master Data Management](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=6s) - **[Cross-environment master data management](../features/cross-environment-master-data-management.md)** (GA, 2 min) - Subsidiaries in other environments of the same tenant can pull master data from the HQ company. Also in [What's new in Finance: Overview](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=331s).
- [12:44 What's new in Shopify Connector: Overview](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=764s) - **[Company tax registration ID and country extensions](../features/shopify-company-tax-registration-id.md)** (GA, 2 min) - Tax registration IDs are now populated when creating customers.
- [4:17 What's new: Shopify Tax Matching (preview)](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=257s) - **[Review and approve tax match](../features/shopify-tax-match-review.md)** (preview, 2 min) - A review window shows the tax area, jurisdictions and taxes per shipping and product line.
- [7:22 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=442s) - **[Export logs pushed to Fabric](../features/fabric-export-logs-in-fabric.md)** (preview, 2 min) - Synchronization logs are also written into Fabric for monitoring through the SQL endpoint.

### Reporting and analytics (19 min)

- [0:34 Introducing: Composite Document Layouts](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=34s) - **[Report themes and header footer layouts](../features/report-themes-header-footer-layouts.md)** (GA, 4 min) - Branding such as colors and fonts, and header and footer content, is defined once as a theme or header footer layout and reused across document reports.
- [0:17 What's new: Data Analysis](https://www.youtube.com/watch?v=ZpzZ6El8GXY&t=17s) - **[System fields in analysis mode](../features/system-fields-analysis-mode.md)** (GA, 3 min) - System fields such as created by, created on, modified by and modified on are always available in the analysis mode column picker. Also in [What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=447s).
- [0:32 What's new: Data Analysis](https://www.youtube.com/watch?v=ZpzZ6El8GXY&t=32s) - **[Bookmark views to role center](../features/bookmark-views-role-center.md)** (announced, 3 min) - A bookmark view action on analysis views and saved list views puts the view on the role center.
- [0:31 What's new in reporting: Layout Management and Report Inbox API's](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=31s) - **[Layout status for app-supplied layouts](../features/layout-status-app-layouts.md)** (GA, 3 min) - A Layout status menu on the report layouts page lets an administrator set a lifecycle state such as draft, pending approval, approved or retired on app-supplied layouts, including Microsoft ones. Also in [Introducing: Composite Document Layouts](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=647s).
- [5:15 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=315s) - **[Power BI apps on Fabric](../features/power-bi-apps-fabric.md)** (announced, 2 min) - The Power BI apps were converted to the Fabric backend.
- [6:51 What's new in Document Reporting: Word add-in](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=411s) - **[Sample layouts for themes](../features/theme-sample-layouts.md)** (GA, 2 min) - The Word add-in has sample documents to preview style, font and color changes.
- [2:25 Introducing: Composite Document Layouts](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=145s) - **[Composite layout menu on a body layout](../features/composite-layout-menu.md)** (GA, 2 min) - On a body layout in the report layouts page, a composite layout menu lets you pick the theme and header footer for testing.
- [5:33 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=333s) - **[Multi-company Power BI reporting](../features/multi-company-power-bi-fabric.md)** (announced, 2 min) - Multi-company app versions show data across companies with a company filter.

### Finance (3 min)

- [6:15 What's new in Finance: Overview](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=375s) - **[Withholding tax for employees](../features/withholding-tax-employees.md)** (GA, 3 min) - Withholding tax, previously available for vendors, is extended to employees with new fields for employee rules. Also in [What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=790s), [What's new in Expense Agent: Calculate WHT for Expenses](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=104s).

## Also worth a look

- [0:08](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=8s) [Subcontracting app](../features/subcontracting-app.md) in What's new in SCM: Subcontracting (GA, 2 min)
- [4:18](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=258s) [Index management access](../features/index-management-access.md) in What's new: Server and Database (GA, 2 min)
- [4:30](https://www.youtube.com/watch?v=4TE8uwIi91k&t=270s) [Expense submission and approval on mobile](../features/expense-mobile-submission-approval.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [1:34](https://www.youtube.com/watch?v=KNy2KujjheU&t=94s) [Database export as an environment operation](../features/database-export-environment-operation.md) in What's new: Database Export Enhancements (GA, 1 min)
- [3:30](https://www.youtube.com/watch?v=GwrMf1umTFg&t=210s) [Project and task on a web app expense](../features/expense-select-project-task.md) in What's new in Expense Agent: Project Handling (GA, 1 min)
- [8:12](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=492s) [Change propagation and synchronization log](../features/mdm-change-propagation-log.md) in What's new: Cross-environment Master Data Management (GA, 1 min)
- [6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) [MCP server on/off toggle](../features/mcp-server-toggle.md) in What's new: MCP Server (GA, 1 min)
- [3:19](https://www.youtube.com/watch?v=ZpzZ6El8GXY&t=199s) [System fields in profiles](../features/system-fields-in-profiles.md) in What's new: Data Analysis (GA, 1 min)
- [11:09](https://www.youtube.com/watch?v=WACQbAEVOJg&t=669s) [Direct transfer mode and transit location on transfer routes](../features/transfer-route-mode-transit.md) in What's new in SCM: Overview (GA, 1 min)
- [14:13](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=853s) [Create transfer order to subcontractor](../features/subcontracting-transfer-order.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [13:30](https://www.youtube.com/watch?v=WACQbAEVOJg&t=810s) [Inventory pick for direct transfers](../features/inventory-pick-direct-transfers.md) in What's new in SCM: Overview (GA, 1 min)
- [3:07](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=187s) [Automatic mileage amount calculation](../features/mileage-amount-calculation.md) in What's new in Expense Agent: Improved Mileage Handling (GA, 1 min)
- [6:26](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=386s) [Intent detection and agentic loop](../features/copilot-intent-agentic-loop.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [6:54](https://www.youtube.com/watch?v=nb_a42dmSqE&t=414s) [Run migration by disabling legacy subcontracting](../features/disable-legacy-subcontracting-migration.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [6:50](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=410s) [Initial cross-environment synchronization](../features/mdm-initial-synchronization.md) in What's new: Cross-environment Master Data Management (GA, 1 min)
- [2:58](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=178s) [Ad valorem and hybrid excise calculation](../features/excise-ad-valorem-hybrid.md) in What's new in Finance: Overview (announced, 1 min)
- [10:25](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=625s) [Permission overview page in context](../features/permission-overview-context.md) in What's new: Server and Database (GA, 1 min)
- [15:52](https://www.youtube.com/watch?v=WACQbAEVOJg&t=952s) [Quality inspection assignment and role-based control](../features/quality-inspection-assignment-roles.md) in What's new in SCM: Overview (GA, 1 min)
- [3:37](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=217s) [Resolving vague item references](../features/copilot-vague-reference-resolution.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [3:19](https://www.youtube.com/watch?v=ZpzZ6El8GXY&t=199s) [Bookmarks in profiles](../features/bookmarks-in-profiles.md) in What's new: Data Analysis (GA, 1 min)
- [3:32](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=212s) [Skipped record notification in price sync](../features/shopify-price-sync-skipped-notification.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [5:29](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=329s) [Approval history in Business Central](../features/expense-approval-history-bc.md) in What's new in Expense Agent: Improved Approval Process (GA, 1 min)
- [5:23](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=323s) [Provide feedback button](../features/shopify-provide-feedback.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [6:17](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=377s) [Shipped themes, header footers and body layouts](../features/shipped-themes-body-layouts.md) in Introducing: Composite Document Layouts (announced, 1 min)
- [8:20](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=500s) [AI change notification on sales document](../features/shopify-ai-change-notification.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [2:06](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=126s) [Installing the Subcontracting app](../features/subcontracting-app-install-worksheet.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [0:06](https://www.youtube.com/watch?v=nb_a42dmSqE&t=6s) [Subcontracting app replaces Italian subcontracting](../features/italian-subcontracting-replacement.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [1:01](https://www.youtube.com/watch?v=o94V_lF8oNM&t=61s) [Free-text expense policies per category](../features/expense-free-text-policies.md) in What's new in Expense Agent: Travel and Expense Policy Automation (GA, 1 min)
- [6:55](https://www.youtube.com/watch?v=o94V_lF8oNM&t=415s) [Submit with policies pending](../features/expense-submit-policies-pending.md) in What's new in Expense Agent: Travel and Expense Policy Automation (GA, 1 min)
- [5:17](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=317s) [Report packs](../features/report-packs.md) in What's new: Enhanced Financial Reporting (GA, 1 min)
- [5:15](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=315s) [Foreign currency budgeting](../features/travel-request-foreign-currency-budget.md) in What's new in Expense Agent: Use Travel Request (GA, 1 min)
- [7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=427s) [Synchronization overview and details logs](../features/fabric-synchronization-logs.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [0:59](https://www.youtube.com/watch?v=07G7aC14Y_w&t=59s) [Purchase order e-document](../features/purchase-order-e-document.md) in What's new in E-Documents: Overview (GA, 1 min)
- [2:13](https://www.youtube.com/watch?v=4TE8uwIi91k&t=133s) [Mileage expenses on mobile](../features/expense-mileage-mobile.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [4:03](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=243s) [Default theme and header footer levels](../features/default-theme-header-footer-levels.md) in Introducing: Composite Document Layouts (GA, 1 min)
- [0:22](https://www.youtube.com/watch?v=GwrMf1umTFg&t=22s) [Project tracking in the Expense Agent](../features/expense-project-tracking.md) in What's new in Expense Agent: Project Handling (GA, 1 min)
- [6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) [Server features box in MCP configuration](../features/mcp-server-features-box.md) in What's new: MCP Server (GA, 1 min)
- [2:00](https://www.youtube.com/watch?v=kOCiyVql0go&t=120s) [Fabric connection setup](../features/fabric-connection-setup.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [3:51](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=231s) [Credit card reconciliation with expenses](../features/credit-card-reconciliation.md) in What's new in Expense Agent: Overview (announced, 1 min)
- [2:23](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=143s) [Withholding posting groups on employee and expense category](../features/withholding-posting-groups-employee-category.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [3:11](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=191s) [Work IQ data in Copilot](../features/copilot-work-iq-data.md) in What's new: Explore the new Microsoft Copilot Chat in Business Central (GA, 1 min)
- [2:58](https://www.youtube.com/watch?v=07G7aC14Y_w&t=178s) [EDI setup](../features/edi-setup.md) in What's new in E-Documents: Overview (GA, 1 min)
- [5:20](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=320s) [Page context sent to Copilot](../features/copilot-page-context.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [0:40](https://www.youtube.com/watch?v=4TE8uwIi91k&t=40s) [Scan receipts with auto capture](../features/expense-scan-receipts-auto-capture.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [8:04](https://www.youtube.com/watch?v=nb_a42dmSqE&t=484s) [Subcontracting views on purchase and transfer orders](../features/subcontracting-document-views.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [6:45](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=405s) [Interim approvers](../features/expense-interim-approvers.md) in What's new in Expense Agent: Improved Approval Process (announced, 1 min)
- [21:56](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1316s) [Minimum amount for subcontractor price](../features/subcontractor-minimum-amount.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [25:58](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1558s) [Serial numbers at any level in subcontracting](../features/subcontracting-serial-numbers-any-level.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [2:37](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=157s) [Mileage rates per vehicle type](../features/mileage-rates-vehicle-type.md) in What's new in Expense Agent: Overview (GA, 1 min)
- [1:44](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=104s) [Bonded location for excise](../features/excise-bonded-location.md) in What's new in Finance: Overview (announced, 1 min)
- [7:36](https://www.youtube.com/watch?v=WACQbAEVOJg&t=456s) [Machine center calendar entries available until](../features/machine-center-calendar-until.md) in What's new in SCM: Overview (GA, 1 min)
- [1:19](https://www.youtube.com/watch?v=nb_a42dmSqE&t=79s) [Legacy subcontracting toggle](../features/legacy-subcontracting-toggle.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [1:46](https://www.youtube.com/watch?v=GwrMf1umTFg&t=106s) [Assigned resources on the project card](../features/project-card-assigned-resources.md) in What's new in Expense Agent: Project Handling (GA, 1 min)
- [3:19](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=199s) [Travel request reference on expense report](../features/travel-request-expense-report-reference.md) in What's new in Expense Agent: Use Travel Request (GA, 1 min)
- [1:06](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=66s) [Tariff code sync](../features/shopify-tariff-code-sync.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [8:41](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=521s) [Header and footer authoring help](../features/header-footer-authoring.md) in What's new in Document Reporting: Word add-in (GA, 1 min)
- [4:18](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=258s) [Self-billing number series per vendor](../features/self-billing-number-series-vendor.md) in What's new in Finance: Overview (GA, 1 min)
- [14:56](https://www.youtube.com/watch?v=WACQbAEVOJg&t=896s) [Failed quality inspection blocks transfer](../features/quality-inspection-blocks-transfer.md) in What's new in SCM: Overview (GA, 1 min)
- [1:39](https://www.youtube.com/watch?v=WZUQ9X26MLo&t=99s) [EUDR certificate capture](../features/eudr-certificate-capture.md) in What's new in Sustainability: EUDR Certificate Capture (GA, 1 min)
- [4:19](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=259s) [Audit link between G/L entries and travel request](../features/travel-request-gl-audit-link.md) in What's new in Expense Agent: Use Travel Request (GA, 1 min)
- [10:23](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=623s) [Copilot and agent capabilities admin control](../features/copilot-agent-capabilities-admin.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [12:36](https://www.youtube.com/watch?v=WACQbAEVOJg&t=756s) [No blank-location inventory posting setup](../features/no-blank-location-posting-setup.md) in What's new in SCM: Overview (GA, 1 min)
- [14:59](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=899s) [Feedback on Copilot responses](../features/copilot-response-feedback.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [0:53](https://www.youtube.com/watch?v=GwrMf1umTFg&t=53s) [Project visibility: all or assigned projects](../features/expense-project-visibility.md) in What's new in Expense Agent: Project Handling (GA, 1 min)
- [8:29](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=509s) [Manage themes and header footer layouts page](../features/manage-themes-header-footer-layouts.md) in What's new in Document Reporting: Word add-in (GA, 1 min)
- [8:12](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=492s) [Approval limits](../features/expense-approval-limits.md) in What's new in Expense Agent: Improved Approval Process (announced, 1 min)
- [6:44](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=404s) [TaxMatch fact box and agent settings](../features/shopify-taxmatch-settings.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [9:18](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=558s) [MCP server landing page](../features/mcp-server-landing-page.md) in What's new: Server and Database (GA, 1 min)
- [2:05](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=125s) [Find mapping by barcode toggle](../features/shopify-find-mapping-by-barcode.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [4:25](https://www.youtube.com/watch?v=kOCiyVql0go&t=265s) [Mirrored data with SQL endpoint](../features/fabric-onelake-sql-endpoint.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [1:13](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=73s) [Uncategorized accounts views](../features/uncategorized-accounts-views.md) in What's new: Enhanced Financial Reporting (GA, 1 min)
- [0:54](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=54s) [Multiple excise taxes per item](../features/multiple-excise-taxes-per-item.md) in What's new in Finance: Overview (GA, 1 min)
- [2:08](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=128s) [Travel request lines with currency](../features/travel-request-lines-currency.md) in What's new in Expense Agent: Use Travel Request (GA, 1 min)
- [6:39](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=399s) [Subcontracting components on the production order](../features/subcontracting-production-order-components.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [6:39](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=399s) [B2B company synchronization by default](../features/shopify-b2b-company-sync.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [2:44](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=164s) [Withholding tax group](../features/withholding-tax-group.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [2:10](https://www.youtube.com/watch?v=07G7aC14Y_w&t=130s) [E-document types and directions](../features/e-document-types-directions.md) in What's new in E-Documents: Overview (GA, 1 min)
- [2:39](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=159s) [App view filter for per tenant extensions](../features/app-view-filter-pte.md) in What's new: Manage PTEs in the Admin Center (GA, 1 min)
- [9:36](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=576s) [Copilot respects user permissions](../features/copilot-respects-permissions.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [1:44](https://www.youtube.com/watch?v=4TE8uwIi91k&t=104s) [Upload receipts from gallery or files](../features/expense-upload-receipts-share.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [7:35](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=455s) [Tax match review mode setting](../features/shopify-tax-review-mode.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [8:13](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=493s) [Create subcontracting order from routing](../features/subcontracting-order-from-routing.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [17:12](https://www.youtube.com/watch?v=WACQbAEVOJg&t=1032s) [Automatic passed and failed quantity](../features/quality-inspection-passed-failed-qty.md) in What's new in SCM: Overview (GA, 1 min)
- [3:32](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=212s) [Gross, net or gross up calculation base](../features/withholding-calculation-base.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [10:11](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=611s) [Employee withholding exemption and certificate](../features/employee-withholding-exemption.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [9:03](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=543s) [Ad hoc alternate approver](../features/expense-ad-hoc-alternate-approver.md) in What's new in Expense Agent: Improved Approval Process (announced, 1 min)
- [10:05](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=605s) [Subcontracting FastTab in Manufacturing setup](../features/manufacturing-setup-subcontracting-fasttab.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [1:32](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=92s) [Pull-based incremental synchronization](../features/mdm-pull-incremental-sync.md) in What's new: Cross-environment Master Data Management (GA, 1 min)
- [2:41](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=161s) [Totaling fact box on row definitions](../features/row-definition-totaling-fact-box.md) in What's new: Enhanced Financial Reporting (GA, 1 min)
- [4:58](https://www.youtube.com/watch?v=GwrMf1umTFg&t=298s) [Project ledger entries from expense reports](../features/expense-project-ledger-entries.md) in What's new in Expense Agent: Project Handling (GA, 1 min)
- [3:55](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=235s) [Test preview for row and column definitions](../features/financial-report-definition-test-preview.md) in What's new: Enhanced Financial Reporting (announced, 1 min)
- [11:16](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=676s) [Emissions on fixed assets](../features/fixed-asset-emissions.md) in What's new in Sustainability (GA, 1 min)
- [0:59](https://www.youtube.com/watch?v=WZUQ9X26MLo&t=59s) [EUDR fields on the item card](../features/eudr-item-card-fields.md) in What's new in Sustainability: EUDR Certificate Capture (GA, 1 min)
- [1:48](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=108s) [Standard mileage rate](../features/mileage-standard-rate.md) in What's new in Expense Agent: Improved Mileage Handling (GA, 1 min)
- [6:09](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=369s) [Permission set for HQ read access](../features/mdm-hq-read-permission-set.md) in What's new: Cross-environment Master Data Management (GA, 1 min)
- [6:15](https://www.youtube.com/watch?v=o94V_lF8oNM&t=375s) [Policies pending after changes](../features/expense-policies-pending-after-change.md) in What's new in Expense Agent: Travel and Expense Policy Automation (GA, 1 min)
- [3:48](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=228s) [Customer meeting sales brief](../features/copilot-customer-sales-brief.md) in What's new: Explore the new Microsoft Copilot Chat in Business Central (GA, 1 min)
- [3:10](https://www.youtube.com/watch?v=kOCiyVql0go&t=190s) [Table and company selection for Fabric](../features/fabric-table-company-selection.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [3:53](https://www.youtube.com/watch?v=4TE8uwIi91k&t=233s) [Offline mode](../features/expense-mobile-offline-mode.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [6:30](https://www.youtube.com/watch?v=WACQbAEVOJg&t=390s) [Actionable error on refresh production order](../features/refresh-production-order-actionable-error.md) in What's new in SCM: Overview (GA, 1 min)
- [6:58](https://www.youtube.com/watch?v=WACQbAEVOJg&t=418s) [Dynamic previous and next operations in routings](../features/routing-previous-next-visibility.md) in What's new in SCM: Overview (GA, 1 min)
- [2:03](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=123s) [Where-used for G/L accounts in financial reports](../features/gl-account-where-used-financial-reports.md) in What's new: Enhanced Financial Reporting (GA, 1 min)
- [15:48](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=948s) [Contact numbers on Shopify orders](../features/shopify-order-contact-numbers.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [7:54](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=474s) [Withholding at invoice or payment](../features/withholding-calculation-timing.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 1 min)
- [3:14](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=194s) [Credit card statement upload](../features/credit-card-statement-upload.md) in What's new in Expense Agent: Overview (announced, 1 min)
- [2:28](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=148s) [Override of layout description](../features/layout-description-override.md) in What's new in reporting: Layout Management and Report Inbox API's (GA, 1 min)
- [6:08](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=368s) [US-only TaxMatch extension](../features/shopify-taxmatch-us-extension.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [9:46](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=586s) [Planned alternate approver](../features/expense-planned-alternate-approver.md) in What's new in Expense Agent: Improved Approval Process (announced, 1 min)
- [2:57](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=177s) [Travel request approval](../features/travel-request-approval.md) in What's new in Expense Agent: Use Travel Request (GA, 1 min)
- [7:42](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=462s) [Verifactu in Spain](../features/verifactu-spain.md) in What's new in Finance: Overview (GA, 1 min)
- [1:30](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=90s) [Warehouse, price and cost for subcontracting](../features/subcontracting-warehouse-price-cost.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [9:08](https://www.youtube.com/watch?v=nb_a42dmSqE&t=548s) [Migrated vendor fields and subcontracting prices](../features/migrated-vendor-subcontracting-prices.md) in What's new in SCM: Migrate Italian Subcontracting (GA, 1 min)
- [2:57](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=177s) [Unlisted product status](../features/shopify-unlisted-status.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [5:26](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=326s) [Notes design control](../features/notes-design-control.md) in What's new in Document Reporting: Word add-in (GA, 1 min)
- [4:49](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=289s) [Skipped records and API errors in the role center](../features/shopify-role-center-errors.md) in What's new in Shopify Connector: Overview (GA, 1 min)
- [7:16](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=436s) [Components at vendor location field](../features/vendor-components-at-vendor-location.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [9:54](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=594s) [Reporting features pointer](../features/reporting-features-pointer.md) in What's new: Server and Database (GA, 1 min)
- [2:20](https://www.youtube.com/watch?v=WZUQ9X26MLo&t=140s) [EUDR flag on purchase lines](../features/eudr-purchase-line-flag.md) in What's new in Sustainability: EUDR Certificate Capture (GA, 1 min)
- [3:23](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=203s) [Totaling fact box on column definitions](../features/column-definition-totaling-fact-box.md) in What's new: Enhanced Financial Reporting (GA, 1 min)
- [1:14](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=74s) [Travel requests in web and phone app](../features/travel-requests-web-mobile.md) in What's new in Expense Agent: Use Travel Request (announced, 1 min)
- [0:40](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=40s) [Shopify Tax Matching](../features/shopify-tax-matching.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [2:29](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=149s) [Agents generating page scripts](../features/agents-generate-page-scripts.md) in What's new in Page Scripting (GA, 1 min)
- [12:06](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=726s) [Subcontracting fact box on purchase lines](../features/subcontracting-purchase-line-fact-box.md) in What's new in SCM: Subcontracting (GA, 1 min)
- [4:47](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=287s) [Line type defaulting in definitions](../features/definition-line-type-defaulting.md) in What's new: Enhanced Financial Reporting (announced, 1 min)
- [3:24](https://www.youtube.com/watch?v=4TE8uwIi91k&t=204s) [Automatic categorization into expense reports](../features/expense-automatic-categorization.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 0 min)
- [1:31](https://www.youtube.com/watch?v=07G7aC14Y_w&t=91s) [Order response](../features/e-document-order-response.md) in What's new in E-Documents: Overview (GA, 0 min)
- [2:07](https://www.youtube.com/watch?v=GwrMf1umTFg&t=127s) [Resources on project tasks](../features/project-task-resource-assignment.md) in What's new in Expense Agent: Project Handling (GA, 0 min)
- [2:18](https://www.youtube.com/watch?v=KNy2KujjheU&t=138s) [Single Export database button](../features/export-database-button.md) in What's new: Database Export Enhancements (GA, 0 min)
- [2:42](https://www.youtube.com/watch?v=WL3m2dffwU8&t=162s) [Side-by-side data view](../features/copilot-side-by-side-data.md) in Introducing: New Microsoft Copilot Chat in Business Central (GA, 0 min)
- [2:51](https://www.youtube.com/watch?v=WZUQ9X26MLo&t=171s) [Certification details on sales invoice](../features/eudr-sales-invoice-certification.md) in What's new in Sustainability: EUDR Certificate Capture (GA, 0 min)
- [3:07](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=187s) [Cross-environment setup wizard](../features/mdm-cross-environment-wizard.md) in What's new: Cross-environment Master Data Management (GA, 0 min)
- [8:42](https://www.youtube.com/watch?v=o94V_lF8oNM&t=522s) [Policy check availability rules](../features/expense-policy-check-availability.md) in What's new in Expense Agent: Travel and Expense Policy Automation (GA, 0 min)
- [5:11](https://www.youtube.com/watch?v=07G7aC14Y_w&t=311s) [E-document linkage from documents](../features/e-document-linkage.md) in What's new in E-Documents: Overview (GA, 0 min)
- [3:06](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=186s) [Subcontracting assisted setup](../features/subcontracting-assisted-setup.md) in What's new in SCM: Subcontracting (GA, 0 min)
- [6:56](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=416s) [Automatic expense report from travel request](../features/travel-request-auto-expense-report.md) in What's new in Expense Agent: Use Travel Request (GA, 0 min)
- [0:06](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=6s) [Sustainability formulas on purchase documents](../features/sustainability-formulas-purchase.md) in What's new in Sustainability (GA, 0 min)
- [1:44](https://www.youtube.com/watch?v=07G7aC14Y_w&t=104s) [Remittance advice from payment journal](../features/e-document-remittance-advice.md) in What's new in E-Documents: Overview (GA, 0 min)
- [2:41](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=161s) [Currency code on mileage rates](../features/mileage-rate-currency.md) in What's new in Expense Agent: Improved Mileage Handling (GA, 0 min)
- [8:59](https://www.youtube.com/watch?v=kOCiyVql0go&t=539s) [Permission sets for Fabric integration](../features/fabric-permission-sets.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 0 min)
- [5:49](https://www.youtube.com/watch?v=o94V_lF8oNM&t=349s) [Receipt itemization](../features/expense-receipt-itemization.md) in What's new in Expense Agent: Travel and Expense Policy Automation (announced, 0 min)
- [2:22](https://www.youtube.com/watch?v=GwrMf1umTFg&t=142s) [Resource link on the employee card](../features/employee-resource-link.md) in What's new in Expense Agent: Project Handling (GA, 0 min)
- [7:48](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=468s) [Approval messaging](../features/expense-approval-messaging.md) in What's new in Expense Agent: Improved Approval Process (announced, 0 min)
- [3:19](https://www.youtube.com/watch?v=WZUQ9X26MLo&t=199s) [Order traceability by EUDR batch](../features/eudr-order-traceability.md) in What's new in Sustainability: EUDR Certificate Capture (GA, 0 min)
- [2:43](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=163s) [Pictures and attachments sync](../features/mdm-pictures-attachments.md) in What's new: Cross-environment Master Data Management (GA, 0 min)
- [1:24](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=84s) [Reverse sustainability ledger entries](../features/reverse-sustainability-ledger-entries.md) in What's new in Sustainability (GA, 0 min)
- [0:51](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=51s) [Refreshed Expense Agent web app](../features/expense-web-app-refresh.md) in What's new in Expense Agent: Overview (GA, 0 min)
- [5:03](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=303s) [Signature line design control](../features/signature-line-design-control.md) in What's new in Document Reporting: Word add-in (GA, 0 min)
- [1:28](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=88s) [Expense Agent worldwide availability](../features/expense-agent-worldwide.md) in What's new in Expense Agent: Overview (announced, 0 min)
- [6:30](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=390s) [Scheduling report packs](../features/scheduling-report-packs.md) in What's new: Enhanced Financial Reporting (GA, 0 min)
- [0:23](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=23s) [Finding sustainability entries](../features/find-sustainability-entries.md) in What's new in Sustainability (GA, 0 min)
- [3:55](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=235s) [Simple or compound withholding calculation](../features/withholding-simple-compound.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 0 min)
- [8:22](https://www.youtube.com/watch?v=o94V_lF8oNM&t=502s) [Mandatory override reason](../features/expense-mandatory-override-reason.md) in What's new in Expense Agent: Travel and Expense Policy Automation (announced, 0 min)
- [8:43](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=523s) [EU BP file export for Germany](../features/eu-bp-file-export-germany.md) in What's new in Finance: Overview (announced, 0 min)
- [5:15](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=315s) [Self-billing PEPPOL format](../features/self-billing-peppol.md) in What's new in Finance: Overview (GA, 0 min)
- [8:07](https://www.youtube.com/watch?v=o94V_lF8oNM&t=487s) [Approver override of policy flags](../features/expense-approver-policy-override.md) in What's new in Expense Agent: Travel and Expense Policy Automation (GA, 0 min)
- [0:44](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=44s) [Value chain emissions in more documents](../features/value-chain-emissions-journals-service.md) in What's new in Sustainability (GA, 0 min)
- [0:59](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=59s) [Scope 3 tracking by item tracking](../features/scope-3-item-tracking.md) in What's new in Sustainability (GA, 0 min)
- [1:31](https://www.youtube.com/watch?v=07G7aC14Y_w&t=91s) [Sales order from inbound e-document](../features/sales-order-from-inbound-e-document.md) in What's new in E-Documents: Overview (GA, 0 min)
- [0:57](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=57s) [Automatic creation of tax jurisdictions and tax areas](../features/shopify-auto-create-tax-jurisdictions.md) in What's new: Shopify Tax Matching (preview) (preview, 0 min)
- [8:17](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=497s) [Payment times for Australia and Great Britain](../features/payment-times-au-gb.md) in What's new in Finance: Overview (GA, 0 min)
- [4:50](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=290s) [Amounts design control](../features/amounts-design-control.md) in What's new in Document Reporting: Word add-in (GA, 0 min)
- [1:48](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=108s) [Collect Amount from GL remembers posted amounts](../features/collect-amount-from-gl-remaining.md) in What's new in Sustainability (GA, 0 min)
- [20:21](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=1221s) [Standard task codes](../features/standard-task-codes.md) in What's new in SCM: Subcontracting (GA, 0 min)
- [4:15](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=255s) [Withholding thresholds](../features/withholding-thresholds.md) in What's new in Expense Agent: Calculate WHT for Expenses (GA, 0 min)
- [6:44](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=404s) [Travelers on a travel request](../features/travel-request-travelers.md) in What's new in Expense Agent: Use Travel Request (GA, 0 min)
- [1:32](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=92s) [Automatic upgrade of excise configuration](../features/excise-configuration-upgrade.md) in What's new in Finance: Overview (GA, 0 min)
- [2:46](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=166s) [Transfer entry type in excise permission](../features/excise-transfer-entry-type.md) in What's new in Finance: Overview (announced, 0 min)
- [8:31](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=511s) [Intrastat for Germany and QR invoicing address for Switzerland](../features/intrastat-de-qr-address-ch.md) in What's new in Finance: Overview (GA, 0 min)
- [1:16](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=76s) [New languages for Expense Agent](../features/expense-agent-languages.md) in What's new in Expense Agent: Overview (announced, 0 min)
- [9:00](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=540s) [SFT in Austria and Iceland](../features/sft-austria-iceland.md) in What's new in Finance: Overview (announced, 0 min)
- [1:14](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=74s) [ESG report per lot](../features/esg-report-per-lot.md) in What's new in Sustainability (GA, 0 min)

## Status at a glance

| Status | Playlist features | Minutes | Said on stage |
|---|---|---|---|
| GA | 39 | 126 | 5 |
| preview | 5 | 11 | 3 |
| announced | 5 | 15 | 5 |

## How this list was made

Functional areas only, features that were demoed on stage for at least a minute and a half, minus the ones rated high developer relevance. The rest of the functional areas is also worth a look.

_Generated by pipeline step 06 from config/audiences.json. Status rule: a feature is shown as GA unless the presenters said otherwise, which is how Microsoft runs the launch event; "said on stage" counts the ones with an evidence quote. Not official._
