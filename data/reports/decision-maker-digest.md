---
wave: 2026w2
kind: digest
audience: decision-makers
minutes: 96
playlist_features: 24
also_features: 74
generated_at: 2026-10-02T09:56:40.584Z
---

# Decision makers digest - 2026 release wave 2

If you decide what to roll out, what to budget and what to tell the business, here are the 96 minutes that matter, out of 7h09 of launch event video. 24 features in the playlist, 74 more worth a look, every item deep-linked to the second where they explain it.

Copilot and agents dominate this event, and they land on your desk first. The new Microsoft Copilot chat replaces the old Copilot UI, so users will notice it quickly, and it answers within their permissions. The Expense Agent adds an AI policy check that can use Copilot credits, which makes it a budget question, not a footnote.

Behind that, the longest session covers subcontracting with transfer WIP items, which matters if you outsource production. Shopify, EDI and E-Documents get steady attention, and employees now get withholding tax. Mirroring to Microsoft Fabric and the new Shopify tax area fields are in preview, so pilot them rather than promise them to the business.

Watch first: the Copilot chat rollout and the credit cost of the policy check. Also keep early hotfix installs in mind. They bypass safe deployment, so use them only when the fix affects you, not out of curiosity.

_The three paragraphs above were written by Claude from the feature list below (claude-haiku-4-5-20251001). Everything else on this page is generated from the data._

## The playlist

### Supply chain (21 min)

- [1:02 What's new in SCM: Subcontracting](https://www.youtube.com/watch?v=QdWPlIV3Avk&t=62s) - **[Transfer WIP item and WIP ledger entry](../features/transfer-wip-item.md)** (GA, 15 min) - A routing line can be marked with a transfer WIP item to track work in progress moved to and from the subcontractor.
- [5:52 What's new in SCM: Migrate Italian Subcontracting](https://www.youtube.com/watch?v=nb_a42dmSqE&t=352s) - **[Italian Subcontracting Migration app](../features/italian-subcontracting-migration-app.md)** (GA, 6 min) - A separate app, not on AppSource, migrates legacy Italian data and is proposed only when needed.

### Copilot and agents (21 min)

- [0:06 What's new: Explore the new Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=6s) - **[Microsoft Copilot chat in Business Central](../features/microsoft-copilot-chat.md)** (GA, 12 min) - A unified Microsoft Copilot chat opens from the Copilot button in Business Central, replacing the old Copilot UI. Also in [What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=5s), [Introducing: New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=WL3m2dffwU8&t=8s).
- [0:36 What's new: MCP Server](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=36s) - **[MCP data tools](../features/mcp-data-tools.md)** (GA, 5 min) - Four system tools (find tables, table relations, table schema, data query) let an LLM write AL queries that Business Central compiles and runs, with no APIs needed.
- [1:31 What's new: Demystifying the New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=91s) - **[Web and general knowledge answers](../features/copilot-web-general-answers.md)** (GA, 4 min) - Copilot answers questions not tied to Business Central data using the internet and documentation, such as sales tax setup or travel directions. Also in [What's new: Explore the new Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=42s), [Introducing: New Microsoft Copilot Chat in Business Central](https://www.youtube.com/watch?v=WL3m2dffwU8&t=103s).

### Developer tools (14 min)

- [10:36 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=636s) - **[Namespaces in translation IDs](../features/namespaces-in-translation-ids.md)** (GA, 7 min) - XLIFF files can use fully qualified names including the namespace as ids instead of hash keys.
- [10:19 What's new in AL and Tools](https://www.youtube.com/watch?v=D_Lur52IrIg&t=619s) - **[Keys spanning base and extension fields](../features/keys-spanning-table-extension-fields.md)** (GA, 7 min) - Because table extensions are merged into the base table, a key or index can cover both base table and table extension fields. Also in [What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=397s).

### Expense Agent (13 min)

- [0:27 What's new in Expense Agent: Improved Approval Process](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=27s) - **[Approval history and audit trail in the web app](../features/expense-approval-history-web-app.md)** (announced, 6 min) - The web app shows tabs for draft, submitted, approved and history, and approver tabs. Also in [What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=431s).
- [0:16 What's new in Expense Agent: Improved Approval Process](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=16s) - **[AI policy compliance check](../features/expense-ai-policy-compliance.md)** (GA, 5 min) - An admin setting lets AI check expenses against policies configured per expense category, and flag non-compliant or unclear items for the approver. Also in [What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=300s), [What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=22s).
- [2:57 What's new in Expense Agent: Travel and Expense Policy Automation](https://www.youtube.com/watch?v=o94V_lF8oNM&t=177s) - **[Flagged and compliant policy statuses](../features/expense-policy-statuses.md)** (GA, 2 min) - Reports and lines show compliant or flagged, with AI reasoning beside flagged expenses.

### Integration (Fabric, Shopify, MDM) (14 min)

- [0:07 Introducing: Business Central Integration with Microsoft Fabric](https://www.youtube.com/watch?v=kOCiyVql0go&t=7s) - **[Mirroring to Microsoft Fabric](../features/fabric-mirroring.md)** (preview, 4 min) - Business Central data is synchronized live into OneLake through an open mirroring database.
- [17:22 What's new in Shopify Connector: Overview](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1042s) - **[Return documents for Shopify refunds and exchanges](../features/shopify-returns-refunds-documents.md)** (GA, 4 min) - Refunds can create a sales return order or credit memo, chosen in the return and refund processing setting, using the same parameters as the sales order. Also in [What's new: Shopify Tax Matching (preview)](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=597s).
- [10:44 What's new: Shopify Tax Matching (preview)](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=644s) - **[Tax rate mismatch handling](../features/shopify-tax-rate-mismatch.md)** (preview, 3 min) - If the Business Central tax rate differs from the Shopify rate, the order is not created and a review is forced.
- [20:32 What's new in Shopify Connector: Overview](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1232s) - **[Tax area code and tax liable on Shopify orders and refunds](../features/shopify-order-tax-area-tax-liable.md)** (preview, 2 min) - Shopify orders get tax area code and tax liable fields, filled from Shopify or by AI and used when the sales document is created, and they can be overridden to skip standard mapping. Also in [What's new: Shopify Tax Matching (preview)](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=197s).

### E-Documents (6 min)

- [0:06 What's new in E-Documents: Overview](https://www.youtube.com/watch?v=07G7aC14Y_w&t=6s) - **[EDI in Business Central](../features/edi-e-documents.md)** (GA, 4 min) - EDI is added to exchange order information between buyer and seller instead of sending email.
- [5:57 What's new in E-Documents: Overview](https://www.youtube.com/watch?v=07G7aC14Y_w&t=357s) - **[E-document messages](../features/e-document-messages.md)** (GA, 2 min) - A message architecture attaches messages such as acknowledgement and order response to the e-document.

### Reporting and analytics (7 min)

- [0:34 Introducing: Composite Document Layouts](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=34s) - **[Report themes and header footer layouts](../features/report-themes-header-footer-layouts.md)** (GA, 4 min) - Branding such as colors and fonts, and header and footer content, is defined once as a theme or header footer layout and reused across document reports.
- [0:17 What's new: Data Analysis](https://www.youtube.com/watch?v=ZpzZ6El8GXY&t=17s) - **[System fields in analysis mode](../features/system-fields-analysis-mode.md)** (GA, 3 min) - System fields such as created by, created on, modified by and modified on are always available in the analysis mode column picker. Also in [What's new: Server and Database](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=447s).

### Finance (5 min)

- [6:15 What's new in Finance: Overview](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=375s) - **[Withholding tax for employees](../features/withholding-tax-employees.md)** (GA, 3 min) - Withholding tax, previously available for vendors, is extended to employees with new fields for employee rules. Also in [What's new in Expense Agent: Overview](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=790s), [What's new in Expense Agent: Calculate WHT for Expenses](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=104s).
- [2:58 What's new in Finance: Overview](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=178s) - **[Ad valorem and hybrid excise calculation](../features/excise-ad-valorem-hybrid.md)** (announced, 1 min) - Ad valorem calculates excise as a percent of a taxable amount.

### Admin and platform (6 min)

- [10:12 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=612s) - **[Early install of hotfixes for Microsoft apps](../features/early-hotfix-install-microsoft-apps.md)** (GA, 3 min) - Customers can install a prepared hotfix version of a Microsoft app immediately or in the next update window from the app details page.
- [0:06 What's new: Manage PTEs in the Admin Center](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=6s) - **[PTE lifecycle management in the admin center](../features/pte-lifecycle-admin-center.md)** (GA, 3 min) - Upload, install and update operations are added to PTE management in the admin center, bringing full PTE lifecycle management into one place.

### Sustainability (2 min)

- [1:39 What's new in Sustainability: EUDR Certificate Capture](https://www.youtube.com/watch?v=WZUQ9X26MLo&t=99s) - **[EUDR certificate capture](../features/eudr-certificate-capture.md)** (GA, 1 min) - A tab on the Lot No. Also in [What's new in Sustainability](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=122s).
- [11:16 What's new in Sustainability](https://www.youtube.com/watch?v=t_UXxbvgnHY&t=676s) - **[Emissions on fixed assets](../features/fixed-asset-emissions.md)** (GA, 1 min) - FA journals show sustainability account and CO2, and reclassification splits emissions by a CO2 percentage.

## Also worth a look

- [0:32](https://www.youtube.com/watch?v=ZpzZ6El8GXY&t=32s) [Bookmark views to role center](../features/bookmark-views-role-center.md) in What's new: Data Analysis (announced, 3 min)
- [0:19](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=19s) [Travel requests](../features/travel-requests.md) in What's new in Expense Agent: Use Travel Request (announced, 3 min)
- [8:47](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=527s) [Expense Agent mobile app](../features/expense-agent-mobile-app.md) in What's new in Expense Agent: Overview (preview, 2 min)
- [3:03](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=183s) [Report inbox APIs](../features/report-inbox-apis.md) in What's new in reporting: Layout Management and Report Inbox API's (GA, 2 min)
- [4:17](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=257s) [Review and approve tax match](../features/shopify-tax-match-review.md) in What's new: Shopify Tax Matching (preview) (preview, 2 min)
- [5:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=315s) [Power BI apps on Fabric](../features/power-bi-apps-fabric.md) in Introducing: Business Central Integration with Microsoft Fabric (announced, 2 min)
- [11:17](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=677s) [Business Central MCP server as data access layer](../features/bc-mcp-server-data-access.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 2 min)
- [2:14](https://www.youtube.com/watch?v=o94V_lF8oNM&t=134s) [Presubmission policy check](../features/expense-submitter-policy-check.md) in What's new in Expense Agent: Travel and Expense Policy Automation (GA, 2 min)
- [1:57](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=117s) [Business Central data questions](../features/copilot-business-central-data-questions.md) in What's new: Explore the new Microsoft Copilot Chat in Business Central (GA, 2 min)
- [7:49](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=469s) [Follow-up conversation and suggestions](../features/copilot-follow-up-suggestions.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 2 min)
- [7:22](https://www.youtube.com/watch?v=kOCiyVql0go&t=442s) [Export logs pushed to Fabric](../features/fabric-export-logs-in-fabric.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 2 min)
- [0:18](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=18s) [Mileage rates per period](../features/mileage-rates-periods.md) in What's new in Expense Agent: Improved Mileage Handling (GA, 2 min)
- [5:33](https://www.youtube.com/watch?v=kOCiyVql0go&t=333s) [Multi-company Power BI reporting](../features/multi-company-power-bi-fabric.md) in Introducing: Business Central Integration with Microsoft Fabric (announced, 2 min)
- [13:18](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=798s) [Citations, progress messages and sources](../features/copilot-citations-sources.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 2 min)
- [4:30](https://www.youtube.com/watch?v=4TE8uwIi91k&t=270s) [Expense submission and approval on mobile](../features/expense-mobile-submission-approval.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) [MCP server on/off toggle](../features/mcp-server-toggle.md) in What's new: MCP Server (GA, 1 min)
- [3:07](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=187s) [Automatic mileage amount calculation](../features/mileage-amount-calculation.md) in What's new in Expense Agent: Improved Mileage Handling (GA, 1 min)
- [6:26](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=386s) [Intent detection and agentic loop](../features/copilot-intent-agentic-loop.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [3:37](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=217s) [Resolving vague item references](../features/copilot-vague-reference-resolution.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [6:17](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=377s) [Shipped themes, header footers and body layouts](../features/shipped-themes-body-layouts.md) in Introducing: Composite Document Layouts (announced, 1 min)
- [8:20](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=500s) [AI change notification on sales document](../features/shopify-ai-change-notification.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [1:01](https://www.youtube.com/watch?v=o94V_lF8oNM&t=61s) [Free-text expense policies per category](../features/expense-free-text-policies.md) in What's new in Expense Agent: Travel and Expense Policy Automation (GA, 1 min)
- [6:55](https://www.youtube.com/watch?v=o94V_lF8oNM&t=415s) [Submit with policies pending](../features/expense-submit-policies-pending.md) in What's new in Expense Agent: Travel and Expense Policy Automation (GA, 1 min)
- [7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=427s) [Synchronization overview and details logs](../features/fabric-synchronization-logs.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [2:13](https://www.youtube.com/watch?v=4TE8uwIi91k&t=133s) [Mileage expenses on mobile](../features/expense-mileage-mobile.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [6:04](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=364s) [Server features box in MCP configuration](../features/mcp-server-features-box.md) in What's new: MCP Server (GA, 1 min)
- [2:00](https://www.youtube.com/watch?v=kOCiyVql0go&t=120s) [Fabric connection setup](../features/fabric-connection-setup.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [3:51](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=231s) [Credit card reconciliation with expenses](../features/credit-card-reconciliation.md) in What's new in Expense Agent: Overview (announced, 1 min)
- [3:11](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=191s) [Work IQ data in Copilot](../features/copilot-work-iq-data.md) in What's new: Explore the new Microsoft Copilot Chat in Business Central (GA, 1 min)
- [5:20](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=320s) [Page context sent to Copilot](../features/copilot-page-context.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [0:40](https://www.youtube.com/watch?v=4TE8uwIi91k&t=40s) [Scan receipts with auto capture](../features/expense-scan-receipts-auto-capture.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [6:45](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=405s) [Interim approvers](../features/expense-interim-approvers.md) in What's new in Expense Agent: Improved Approval Process (announced, 1 min)
- [2:37](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=157s) [Mileage rates per vehicle type](../features/mileage-rates-vehicle-type.md) in What's new in Expense Agent: Overview (GA, 1 min)
- [1:44](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=104s) [Bonded location for excise](../features/excise-bonded-location.md) in What's new in Finance: Overview (announced, 1 min)
- [8:42](https://www.youtube.com/watch?v=3Xus5tm2xKI&t=522s) [Deprecation of in-environment PTE management](../features/old-pte-management-deprecation.md) in What's new: Manage PTEs in the Admin Center (announced, 1 min)
- [10:23](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=623s) [Copilot and agent capabilities admin control](../features/copilot-agent-capabilities-admin.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [14:59](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=899s) [Feedback on Copilot responses](../features/copilot-response-feedback.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [8:12](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=492s) [Approval limits](../features/expense-approval-limits.md) in What's new in Expense Agent: Improved Approval Process (announced, 1 min)
- [6:44](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=404s) [TaxMatch fact box and agent settings](../features/shopify-taxmatch-settings.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [9:18](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=558s) [MCP server landing page](../features/mcp-server-landing-page.md) in What's new: Server and Database (GA, 1 min)
- [4:25](https://www.youtube.com/watch?v=kOCiyVql0go&t=265s) [Mirrored data with SQL endpoint](../features/fabric-onelake-sql-endpoint.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [9:36](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=576s) [Copilot respects user permissions](../features/copilot-respects-permissions.md) in What's new: Demystifying the New Microsoft Copilot Chat in Business Central (GA, 1 min)
- [1:44](https://www.youtube.com/watch?v=4TE8uwIi91k&t=104s) [Upload receipts from gallery or files](../features/expense-upload-receipts-share.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [7:35](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=455s) [Tax match review mode setting](../features/shopify-tax-review-mode.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [9:03](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=543s) [Ad hoc alternate approver](../features/expense-ad-hoc-alternate-approver.md) in What's new in Expense Agent: Improved Approval Process (announced, 1 min)
- [3:32](https://www.youtube.com/watch?v=kOCiyVql0go&t=212s) [Configuration packages for Fabric tables](../features/fabric-configuration-packages.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [3:55](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=235s) [Test preview for row and column definitions](../features/financial-report-definition-test-preview.md) in What's new: Enhanced Financial Reporting (announced, 1 min)
- [1:48](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=108s) [Standard mileage rate](../features/mileage-standard-rate.md) in What's new in Expense Agent: Improved Mileage Handling (GA, 1 min)
- [6:15](https://www.youtube.com/watch?v=o94V_lF8oNM&t=375s) [Policies pending after changes](../features/expense-policies-pending-after-change.md) in What's new in Expense Agent: Travel and Expense Policy Automation (GA, 1 min)
- [3:48](https://www.youtube.com/watch?v=TSLXzbeyE7Y&t=228s) [Customer meeting sales brief](../features/copilot-customer-sales-brief.md) in What's new: Explore the new Microsoft Copilot Chat in Business Central (GA, 1 min)
- [3:10](https://www.youtube.com/watch?v=kOCiyVql0go&t=190s) [Table and company selection for Fabric](../features/fabric-table-company-selection.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 1 min)
- [3:53](https://www.youtube.com/watch?v=4TE8uwIi91k&t=233s) [Offline mode](../features/expense-mobile-offline-mode.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 1 min)
- [3:14](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=194s) [Credit card statement upload](../features/credit-card-statement-upload.md) in What's new in Expense Agent: Overview (announced, 1 min)
- [6:08](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=368s) [US-only TaxMatch extension](../features/shopify-taxmatch-us-extension.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [9:46](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=586s) [Planned alternate approver](../features/expense-planned-alternate-approver.md) in What's new in Expense Agent: Improved Approval Process (announced, 1 min)
- [6:16](https://www.youtube.com/watch?v=XLUAuUWtJDw&t=376s) [Boolean expressions for Hide if](../features/hide-if-boolean-expressions.md) in What's new in Document Reporting: Word add-in (announced, 1 min)
- [1:14](https://www.youtube.com/watch?v=s3d9vW6tuT8&t=74s) [Travel requests in web and phone app](../features/travel-requests-web-mobile.md) in What's new in Expense Agent: Use Travel Request (announced, 1 min)
- [0:40](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=40s) [Shopify Tax Matching](../features/shopify-tax-matching.md) in What's new: Shopify Tax Matching (preview) (preview, 1 min)
- [2:29](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=149s) [Agents generating page scripts](../features/agents-generate-page-scripts.md) in What's new in Page Scripting (GA, 1 min)
- [4:47](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=287s) [Line type defaulting in definitions](../features/definition-line-type-defaulting.md) in What's new: Enhanced Financial Reporting (announced, 1 min)
- [3:24](https://www.youtube.com/watch?v=4TE8uwIi91k&t=204s) [Automatic categorization into expense reports](../features/expense-automatic-categorization.md) in What's new in Expense Agent: Mobile App (Preview) (preview, 0 min)
- [8:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=499s) [Fabric integration APIs](../features/fabric-integration-apis.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 0 min)
- [3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) [Database export history page retirement](../features/database-export-history-retirement.md) in What's new: Database Export Enhancements (announced, 0 min)
- [8:59](https://www.youtube.com/watch?v=kOCiyVql0go&t=539s) [Permission sets for Fabric integration](../features/fabric-permission-sets.md) in Introducing: Business Central Integration with Microsoft Fabric (preview, 0 min)
- [5:49](https://www.youtube.com/watch?v=o94V_lF8oNM&t=349s) [Receipt itemization](../features/expense-receipt-itemization.md) in What's new in Expense Agent: Travel and Expense Policy Automation (announced, 0 min)
- [3:56](https://www.youtube.com/watch?v=hNom9ZZuca0&t=236s) [AI Test Toolkit migration to data-driven tests](../features/ai-test-toolkit-migration.md) in What's new: Testability Enhancements (announced, 0 min)
- [7:48](https://www.youtube.com/watch?v=M0IzeLSn7qU&t=468s) [Approval messaging](../features/expense-approval-messaging.md) in What's new in Expense Agent: Improved Approval Process (announced, 0 min)
- [1:28](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=88s) [Expense Agent worldwide availability](../features/expense-agent-worldwide.md) in What's new in Expense Agent: Overview (announced, 0 min)
- [8:22](https://www.youtube.com/watch?v=o94V_lF8oNM&t=502s) [Mandatory override reason](../features/expense-mandatory-override-reason.md) in What's new in Expense Agent: Travel and Expense Policy Automation (announced, 0 min)
- [8:43](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=523s) [EU BP file export for Germany](../features/eu-bp-file-export-germany.md) in What's new in Finance: Overview (announced, 0 min)
- [0:57](https://www.youtube.com/watch?v=5OZ0g5IgC8Q&t=57s) [Automatic creation of tax jurisdictions and tax areas](../features/shopify-auto-create-tax-jurisdictions.md) in What's new: Shopify Tax Matching (preview) (preview, 0 min)
- [2:46](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=166s) [Transfer entry type in excise permission](../features/excise-transfer-entry-type.md) in What's new in Finance: Overview (announced, 0 min)
- [1:16](https://www.youtube.com/watch?v=tj1vvsmAMVs&t=76s) [New languages for Expense Agent](../features/expense-agent-languages.md) in What's new in Expense Agent: Overview (announced, 0 min)
- [9:00](https://www.youtube.com/watch?v=N_J1HB_fUCM&t=540s) [SFT in Austria and Iceland](../features/sft-austria-iceland.md) in What's new in Finance: Overview (announced, 0 min)

## Status at a glance

| Status | Playlist features | Minutes | Said on stage |
|---|---|---|---|
| GA | 19 | 91 | 2 |
| preview | 3 | 10 | 2 |
| announced | 2 | 7 | 2 |

## How this list was made

The agent and Copilot features that got a real demo (two minutes or more, outside the developer tooling), plus the two longest features of every area so you see what each team spent its stage time on. Also worth a look: everything announced for later (the roadmap), everything in preview, and the shorter agent and Copilot items.

_Generated by pipeline step 06 from config/audiences.json. Status rule: a feature is shown as GA unless the presenters said otherwise, which is how Microsoft runs the launch event; "said on stage" counts the ones with an evidence quote. Not official._
