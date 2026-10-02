---
id: YSDfDjrMUb0
title: "What's new in Shopify Connector: Overview"
wave: 2026w2
url: https://www.youtube.com/watch?v=YSDfDjrMUb0
thumbnail: https://i.ytimg.com/vi/YSDfDjrMUb0/hqdefault.jpg
duration_seconds: 1337
area: integration
audience:
  - consultant
  - admin
  - end-user
  - partner
presenters: []
features:
  - shopify-returns-refunds-documents
  - shopify-b2b-catalog-import
  - shopify-order-number-as-document-number
  - shopify-order-tax-area-tax-liable
  - shopify-auto-create-b2b-catalog
  - shopify-company-tax-registration-id
  - shopify-price-sync-skipped-notification
  - shopify-provide-feedback
  - shopify-tariff-code-sync
  - shopify-find-mapping-by-barcode
  - shopify-b2b-company-sync
  - shopify-order-contact-numbers
  - shopify-unlisted-status
  - shopify-role-center-errors
status_mentions:
  unclear: 12
  ga: 1
  preview: 1
chapters: 11
quotes: 17
disclaimers: 2
docs_matched: 10
transcript: data/transcripts/full/YSDfDjrMUb0.md
---

# What's new in Shopify Connector: Overview

> This overview covers what changed in the Shopify connector in the new release. The first half demos item sync changes (tariff codes, a toggle to stop mapping by barcode, the unlisted status), skipped-record visibility in the role center, and the two feedback buttons on the shop card. It then explains B2B changes: company sync, catalogs by Shopify plan, markets versus B2B catalogs, guidance against catalogs linked to several companies, and country extensions for Belgium and the US that fix tax ID handling. The second half demos the use Shopify order number setting, contact numbers on Shopify orders, and exchange returns with return orders, credit memos and moving negative lines. It ends with new tax details on refunds and orders in a pre-release build, and points to a separate video for tax.

Watch: https://www.youtube.com/watch?v=YSDfDjrMUb0 (22:17). Area: Integration (Fabric, Shopify, MDM). Audience: consultant, admin, end-user, partner. Presenters as heard: not introduced by name.

## Chapters

- [0:00](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=0s) Intro: areas of change in the Shopify connector (0 min)
- [0:28](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=28s) Item sync: tariff codes and barcode mapping (2 min)
- [2:57](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=177s) Unlisted status and skipped records (2 min)
- [5:23](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=323s) Review versus provide feedback (1 min)
- [6:39](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=399s) B2B companies, markets and catalogs (3 min)
- [9:47](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=587s) B2B catalog import and duplicate catalog guidance (3 min)
- [12:44](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=764s) Company tax ID and Belgium/US country extensions (2 min)
- [14:40](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=880s) Use Shopify order number setting (1 min)
- [15:48](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=948s) Contact numbers and Shopify number series in sales documents (2 min)
- [17:22](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1042s) Exchange returns, return orders and moving negative lines (3 min)
- [20:32](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1232s) Tax details on refunds and orders (2 min)

## Features in this video

- [Tariff code sync](../features/shopify-tariff-code-sync.md) - GA - [1:06 to 2:05](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=66s), demo [0:28 to 2:05](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=28s) - Tariff number and country from the item card are sent to Shopify as HS code and country of origin.
- [Find mapping by barcode toggle](../features/shopify-find-mapping-by-barcode.md) - GA - [2:05 to 2:57](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=125s), demo [2:17 to 2:57](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=137s) - A hidden field controls fallback to barcode search when SKU mapping fails.
- [Unlisted product status](../features/shopify-unlisted-status.md) - GA - [2:57 to 3:32](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=177s), demo [3:08 to 3:32](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=188s) - The connector supports Shopify's unlisted status, sold by direct link but hidden in the store.
- [Skipped record notification in price sync](../features/shopify-price-sync-skipped-notification.md) - GA - [3:32 to 4:49](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=212s), demo [3:32 to 4:49](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=212s) - Foreground price sync shows a notification when records are skipped, for example sales blocked items.
- [Skipped records and API errors in the role center](../features/shopify-role-center-errors.md) - GA - [4:49 to 5:23](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=289s), demo [4:49 to 5:12](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=289s) - The Shopify activities part shows counts of skipped records and API errors across stores.
- [Provide feedback button](../features/shopify-provide-feedback.md) - GA - [5:23 to 6:39](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=323s), demo [5:23 to 6:28](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=323s) - A provide feedback button lets users report problems with details and files to the Microsoft team only.
- [B2B company synchronization by default](../features/shopify-b2b-company-sync.md) - GA - [6:39 to 7:27](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=399s), demo [7:05 to 7:27](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=425s) - B2B company synchronization is visible by default.
- [Auto create B2B catalog](../features/shopify-auto-create-b2b-catalog.md) - GA - [7:27 to 9:47](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=447s), demo [7:47 to 9:47](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=467s) - The toggle creates a catalog linked to the company location so Business Central prices apply.
- [B2B catalog import and duplicates](../features/shopify-b2b-catalog-import.md) - GA - [9:47 to 12:44](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=587s), demo [10:16 to 12:31](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=616s) - B2B catalogs are imported only when the company exists in Business Central.
- [Company tax registration ID and country extensions](../features/shopify-company-tax-registration-id.md) - GA - [12:44 to 14:40](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=764s), demo [12:44 to 14:28](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=764s) - Tax registration IDs are now populated when creating customers.
- [Use Shopify order number](../features/shopify-order-number-as-document-number.md) - GA - [14:51 to 17:22](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=891s), demo [14:51 to 17:08](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=891s) - A setting in order synchronization on the Shopify shop card lets sales orders and invoices use the Shopify order number as document number with a Shopify number series.
- [Contact numbers on Shopify orders](../features/shopify-order-contact-numbers.md) - GA - [15:48 to 16:25](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=948s), demo [15:48 to 16:25](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=948s) - Sell-to, bill-to and ship-to contact numbers can be shown on Shopify orders.
- [Return documents for Shopify refunds and exchanges](../features/shopify-returns-refunds-documents.md) - GA - [17:22 to 20:32](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1042s), demo [17:22 to 20:32](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1042s) - Refunds can create a sales return order or credit memo, chosen in the return and refund processing setting, using the same parameters as the sales order.
- [Tax area code and tax liable on Shopify orders and refunds](../features/shopify-order-tax-area-tax-liable.md) - preview - [20:32 to 21:55](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1232s), demo [20:43 to 21:41](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1243s) - Shopify orders get tax area code and tax liable fields, filled from Shopify or by AI and used when the sales document is created, and they can be overridden to skip standard mapping.

## Quotes

- [1:42](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=102s) "we have a new toggle which instruct system to import and export tariff codes" - Names the new setting that controls tariff code sync.
- [1:55](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=115s) "They need to be present in the your tariff list. If not, then it will be ignored." - States a limit: imported tariff codes are mapped, never auto-created.
- [4:22](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=262s) "Job queue if you run job queue, still will be marked as a successful because it just ignores this item." - Warns that a successful job queue run can hide skipped items.
- [5:44](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=344s) "So, when people complained there, we have very limited ability to contact them and and help." - Explains why the Microsoft-specific provide feedback button is preferred over app store reviews.
- [7:27](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=447s) "This one, auto create B2B catalog toggle is only available for plus and advanced plans." - Plan restriction that decides whether the B2B catalog toggle is usable.
- [10:53](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=653s) "B2B catalogs are only imported if corresponding company present in Business Central." - Explains why Get catalogs returned nothing until companies were synchronized.
- [11:38](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=698s) "Now, we will get one extra catalog, one extra catalog, but listed twice. That's a problem." - Shows the duplicate catalog problem for catalogs shared by several company locations.
- [12:15](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=735s) "So, we cannot populate it with a different prices, and the last one will be overwriting all previous things." - Design reason for blocking price sync on catalogs linked to several customers.
- [13:48](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=828s) "we are releasing two small extensions, nano extensions, I would say." - Country-specific functionality ships as separate extensions beside the W1 connector.
- [13:48](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=828s) "we still have Shopify connector W1 version, same for everyone, but we are releasing two small extensions, nano extensions, I would say." - States the design decision to keep one W1 connector and ship country-specific add-ons.
- [14:02](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=842s) "You cannot find them in the AppSource because we are using different way to distribute it." - Tells partners where not to look for the Belgium and US extensions.
- [15:27](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=927s) "we need to ensure that the invoice and the sales order documents actually support manual number numbers." - Prerequisite for using the Shopify order number as the document number.
- [16:54](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1014s) "probably makes sense to review your Shopify numbers and make sure that they are compatible with what you use in Business Central." - Practical warning about number series compatibility.
- [18:58](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1138s) "credit memos are not compatible with uh directed put away and pick and other warehouse scenarios." - Limitation that decides when to use return orders instead of credit memos.
- [19:41](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1181s) "because this is a return order, then by default value is order. For credit memos, the value is invoice." - Explains the default target document when moving negative lines.
- [20:43](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1243s) "This is a pre-release version in the reality this fact box will be down." - Signals that the tax UI shown is pre-release and the layout will change.
- [21:29](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1289s) "And you can override these values. And in this case, the standard mapping will not be triggered." - Describes the behavior when tax area code and tax liable are set on the order.

## Disclaimers and status moments

- [20:43](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1243s) preview: "This is a pre-release version in the reality this fact box will be down."
- [21:41](https://www.youtube.com/watch?v=YSDfDjrMUb0&t=1301s) other: "for this one, we have a separate session or separate video."

## Documented features matched

- Return documents for Shopify refunds and exchanges -> [Process Shopify order changes, exchanges, and refunds](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#process-shopify-order-changes-exchanges-and-refunds) (medium confidence, docs say GA)
- B2B catalog import and duplicates -> [Manage Shopify B2B companies, catalogs, and pricing](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#manage-shopify-b2b-companies-catalogs-and-pricing) (medium confidence, docs say GA)
- Use Shopify order number -> [Control sales document creation for Shopify orders and returns](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#control-sales-document-creation-for-shopify-orders-and-returns) (high confidence, docs say GA)
- Auto create B2B catalog -> [Manage Shopify B2B companies, catalogs, and pricing](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#manage-shopify-b2b-companies-catalogs-and-pricing) (medium confidence, docs say GA)
- Company tax registration ID and country extensions -> [Manage Shopify B2B companies, catalogs, and pricing](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#manage-shopify-b2b-companies-catalogs-and-pricing) (medium confidence, docs say GA)
- Tariff code sync -> [Synchronize tariff numbers and origin values with Shopify](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#synchronize-tariff-numbers-and-origin-values-with-shopify) (high confidence, docs say GA)
- Find mapping by barcode toggle -> [Synchronize tariff numbers and origin values with Shopify](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#synchronize-tariff-numbers-and-origin-values-with-shopify) (high confidence, docs say GA)
- B2B company synchronization by default -> [Manage Shopify B2B companies, catalogs, and pricing](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#manage-shopify-b2b-companies-catalogs-and-pricing) (high confidence, docs say GA)
- Contact numbers on Shopify orders -> [Control sales document creation for Shopify orders and returns](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#control-sales-document-creation-for-shopify-orders-and-returns) (high confidence, docs say GA)
- Unlisted product status -> [Synchronize tariff numbers and origin values with Shopify](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#synchronize-tariff-numbers-and-origin-values-with-shopify) (high confidence, docs say GA)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/YSDfDjrMUb0.md](../transcripts/full/YSDfDjrMUb0.md) (JSON segments: [YSDfDjrMUb0.json](../transcripts/full/YSDfDjrMUb0.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/YSDfDjrMUb0/hqdefault.jpg_
