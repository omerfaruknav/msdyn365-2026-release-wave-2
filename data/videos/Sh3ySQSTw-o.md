---
id: Sh3ySQSTw-o
title: "What's new: Server and Database"
wave: 2026w2
url: https://www.youtube.com/watch?v=Sh3ySQSTw-o
thumbnail: https://i.ytimg.com/vi/Sh3ySQSTw-o/hqdefault.jpg
duration_seconds: 843
area: admin-and-platform
audience:
  - developer
  - admin
  - consultant
  - partner
presenters:
  - Kenny Pabidan?
  - Mascot (heard; also heard as Mass, manager of the runtime team, name likely mangled by captions)?
features:
  - keys-spanning-table-extension-fields
  - system-fields-analysis-mode
  - table-extension-zero-joins
  - index-management-access
  - system-fields-in-profiles
  - permission-overview-context
  - open-in-excel-telemetry
  - mcp-server-landing-page
  - streaming-open-in-excel
  - enable-disable-keys-runtime
  - recent-records-virtual-table
  - reporting-features-pointer
  - nst-dotnet-10
status_mentions:
  unclear: 14
chapters: 8
quotes: 9
disclaimers: 0
docs_matched: 7
transcript: data/transcripts/full/Sh3ySQSTw-o.md
---

# What's new: Server and Database

> This session covers what changed in the Business Central server and database for the 2026 release wave 2. It starts with AL runtime items: .NET 10, lower memory use when opening large Excel files, and a recent records virtual table. The longest part is the database: table extension fields move back onto the base table with no joins, index management gets easier to find and more flexible, and system fields become usable in analysis mode and profiles. It ends with two security items (permission overview links in context and telemetry for Open in Excel) and pointers to separate sessions and landing pages for MCP, reporting, developer and security topics.

Watch: https://www.youtube.com/watch?v=Sh3ySQSTw-o (14:03). Area: Admin and platform. Audience: developer, admin, consultant, partner. Presenters as heard: Kenny Pabidan (medium confidence), Mascot (heard; also heard as Mass, manager of the runtime team, name likely mangled by captions) (low confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=0s) Introduction and agenda (1 min)
- [0:33](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=33s) AL runtime: .NET 10, Open Excel, recent records (1 min)
- [1:46](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=106s) Optimized data model for table extensions (2 min)
- [3:47](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=227s) Index management completed (4 min)
- [7:27](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=447s) System fields in analysis mode and profiles (2 min)
- [9:18](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=558s) MCP server and reporting pointers (1 min)
- [10:25](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=625s) Security: permission overview and telemetry (2 min)
- [12:40](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=760s) Landing pages and wrap-up (1 min)

## Features in this video

- [NST on .NET 10](../features/nst-dotnet-10.md) - status not stated - [0:33 to 0:46](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=33s) - The Business Central service tier now runs on .NET 10.
- [Streaming Open in Excel](../features/streaming-open-in-excel.md) - status not stated - [0:46 to 1:30](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=46s) - Open in Excel uses a streaming implementation with less memory and fewer out of memory exceptions.
- [Recent records virtual table](../features/recent-records-virtual-table.md) - status not stated - [1:10 to 1:46](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=70s) - The recent records list is exposed to AL as a queryable virtual table.
- [Table extensions stored on base table](../features/table-extension-zero-joins.md) - status not stated - [1:46 to 3:47](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=106s) - Table extension fields are stored on the base table, so no join is needed.
- [Index management access](../features/index-management-access.md) - status not stated - [4:18 to 6:13](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=258s), demo [4:42 to 6:13](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=282s) - The index management page can be found through Tell Me, including semantic search, and through a Manage indexes button on table information.
- [Enable and disable keys at runtime](../features/enable-disable-keys-runtime.md) - status not stated - [6:13 to 6:53](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=373s), demo [6:26 to 6:53](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=386s) - A key can be defined with Enabled set to false and enabled by code at runtime.
- [Keys spanning base and extension fields](../features/keys-spanning-table-extension-fields.md) - status not stated - [6:37 to 7:17](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=397s) - Because table extensions are merged into the base table, a key or index can cover both base table and table extension fields.
- [System fields in analysis mode](../features/system-fields-analysis-mode.md) - status not stated - [7:27 to 8:56](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=447s), demo [8:08 to 8:56](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=488s) - System fields such as created by, created on, modified by and modified on are always available in the analysis mode column picker.
- [System fields in profiles](../features/system-fields-in-profiles.md) - status not stated - [8:56 to 9:18](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=536s), demo [8:56 to 9:18](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=536s) - In the profile page designer, system fields can be found and added to a page.
- [MCP server landing page](../features/mcp-server-landing-page.md) - status not stated - [9:18 to 9:54](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=558s) - The Business Central MCP server has its own session and a landing page at aka.ms/bcmcp.
- [Reporting features pointer](../features/reporting-features-pointer.md) - status not stated - [9:54 to 10:25](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=594s) - Reporting has three separate videos and is only pointed to in the server session.
- [Permission overview page in context](../features/permission-overview-context.md) - status not stated - [10:25 to 11:45](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=625s), demo [11:13 to 11:45](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=673s) - The permissions overview page can be opened from the permission sets list, the permission set card and the table information page.
- [Telemetry for Open in Excel](../features/open-in-excel-telemetry.md) - status not stated - [11:45 to 12:40](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=705s) - A telemetry signal records who used Open in Excel and when.

## Quotes

- [0:59](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=59s) "now we're using a streaming based implementation for open Excel way more way less memory usage" - States the design change behind fewer out of memory errors when opening big Excel files.
- [1:30](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=90s) "other than the deletion it's a read only which kind of makes sense" - Gives the main limitation of the recent records virtual table.
- [2:52](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=172s) "we are now putting all the table extensions fields back on the base table. There will be no more joints" - Describes the core design decision of the new table extension data model.
- [3:15](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=195s) "will be up to uh 30% faster. You can see uh the different um numbers here from our benchmark" - Gives the headline performance number for write operations with the new data model.
- [6:13](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=373s) "now you can have that index define it as enabled equal false" - Shows how to define an index that stays off until a feature needs it.
- [6:53](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=413s) "we can now add an index that spans both the base table and your extension fields" - A long-requested capability that follows from the single-table model.
- [7:04](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=424s) "I think this actually completes our backlog for index management" - States that the index management work is considered finished.
- [7:57](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=477s) "those have been hidden in one of my our most popular um an analytics features, which is analysis mode" - Explains the gap that is now closed for system fields in analysis mode.
- [12:05](https://www.youtube.com/watch?v=Sh3ySQSTw-o&t=725s) "the best fraud example I can come up with is a disgruntled employee that opens the customer list or the vendor lists" - Gives the reason for the new Open in Excel telemetry.

## Documented features matched

- Keys spanning base and extension fields -> [Developers can define indexes that span fields from a base table and its table extensions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#developers-can-define-indexes-that-span-fields-from-a-base-table-and-its-table-extensions) (high confidence, docs say GA)
- System fields in analysis mode -> [Use system audit fields in analysis mode and in profiles](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-system-audit-fields-in-analysis-mode-and-in-profiles) (high confidence, docs say GA)
- Table extensions stored on base table -> [Faster data loading with improved data model for table extensions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#faster-data-loading-with-improved-data-model-for-table-extensions) (high confidence, docs say GA)
- Index management access -> [Administrators can turn SIFT indexes on/off](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#administrators-can-turn-sift-indexes-onoff) (medium confidence, docs say GA)
- System fields in profiles -> [Use system audit fields in analysis mode and in profiles](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#use-system-audit-fields-in-analysis-mode-and-in-profiles) (high confidence, docs say GA)
- Telemetry for Open in Excel -> [Monitor usage of Open in Excel with telemetry](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#monitor-usage-of-open-in-excel-with-telemetry) (high confidence, docs say GA)
- Enable and disable keys at runtime -> [AL developers can turn indexes on/off in AL code.](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#al-developers-can-turn-indexes-onoff-in-al-code) (high confidence, docs say GA)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/Sh3ySQSTw-o.md](../transcripts/full/Sh3ySQSTw-o.md) (JSON segments: [Sh3ySQSTw-o.json](../transcripts/full/Sh3ySQSTw-o.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/Sh3ySQSTw-o/hqdefault.jpg_
