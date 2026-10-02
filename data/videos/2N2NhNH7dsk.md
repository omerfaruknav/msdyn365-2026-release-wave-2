---
id: 2N2NhNH7dsk
title: "What's new in reporting: Layout Management and Report Inbox API's"
wave: 2026w2
url: https://www.youtube.com/watch?v=2N2NhNH7dsk
thumbnail: https://i.ytimg.com/vi/2N2NhNH7dsk/hqdefault.jpg
duration_seconds: 311
area: reporting-and-analytics
audience:
  - admin
  - consultant
  - developer
presenters: []
features:
  - layout-status-app-layouts
  - report-inbox-apis
  - layout-description-override
  - api-overview-page
status_mentions:
  unclear: 4
chapters: 6
quotes: 8
disclaimers: 0
docs_matched: 2
transcript: data/transcripts/full/2N2NhNH7dsk.md
---

# What's new in reporting: Layout Management and Report Inbox API's

> This is the first of three videos on reporting in the 2026 release wave 2 launch edition. It covers two things. The first is layout status, which in wave 1 only applied to uploaded layouts and is now extended to app-supplied and built-in layouts, so administrators control which layouts users can pick. Administrators can also override the developer's description of an app-supplied layout. The second is a set of report inbox APIs that let agents, Power Platform, Copilot Studio or other API clients work with scheduled reports and report packs. The new API overview page in version 29 is the easiest way to find these APIs, and the video ends with pointers to the aka.ms/bcdeveloper and aka.ms/bcintegration landing pages.

Watch: https://www.youtube.com/watch?v=2N2NhNH7dsk (5:11). Area: Reporting and analytics. Audience: admin, consultant, developer. Presenters as heard: not introduced by name.

## Chapters

- [0:00](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=0s) Introduction to the reporting series (1 min)
- [0:31](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=31s) Layout status for app-supplied layouts (2 min)
- [2:28](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=148s) Overriding the developer description of a layout (1 min)
- [3:03](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=183s) Report inbox and automation (1 min)
- [3:39](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=219s) Finding the APIs on the API overview page (0 min)
- [4:09](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=249s) Where to learn more and wrap-up (1 min)

## Features in this video

- [Layout status for app-supplied layouts](../features/layout-status-app-layouts.md) - GA - [0:31 to 2:28](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=31s), demo [1:07 to 2:10](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=67s) - A Layout status menu on the report layouts page lets an administrator set a lifecycle state such as draft, pending approval, approved or retired on app-supplied layouts, including Microsoft ones.
- [Override of layout description](../features/layout-description-override.md) - GA - [2:28 to 3:03](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=148s) - For layouts shipped from an app, the developer's description can be overridden by an administrator.
- [Report inbox APIs](../features/report-inbox-apis.md) - GA - [3:03 to 4:09](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=183s) - New APIs cover the report inbox operations, where scheduled reports and report packs land.
- [API overview page](../features/api-overview-page.md) - GA - [3:39 to 4:09](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=219s) - A new API overview page, shipping in version 29, is the easiest way to find APIs.

## Quotes

- [0:31](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=31s) "back in the fall in the spring release in wave one of 2026, we added the ability for an layout administrator" - Places the earlier layout status capability in wave 1 2026, which this release builds on.
- [0:51](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=51s) "we are now extending this to app-supplied layouts including the layouts that we ship with Business Central out of the box." - States the scope change: layout status now covers app-supplied and built-in layouts, not only uploaded ones.
- [1:22](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=82s) "You can still run any layout you want from this page." - Shows that layout status does not block administrators on the report layouts page.
- [1:59](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=119s) "they can only see approved layouts there. So, this is a way for you as an administrator to control exactly which layouts are approved" - Explains the user-facing effect: only approved layouts appear in the request page layout control.
- [2:53](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=173s) "so it shows up in the report layout page and and actually also the version of that for users." - Shows where an overridden layout description becomes visible.
- [3:03](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=183s) "The second feature we are giving you as administrators is an ability to to interact or have agents or automation interact with the report inbox." - Introduces report inbox APIs as an administrator-facing way to automate report handling.
- [3:39](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=219s) "With Power Platform, with MTP server, with Microsoft Copilot Studio, or any other tool that speaks APIs." - Lists the intended clients for the report inbox APIs.
- [3:39](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=219s) "easiest to find them is to go to the new API overview page that we are also shipping here in version 29" - Gives the discovery route for the APIs and ties it to version 29.

## Documented features matched

- Layout status for app-supplied layouts -> [Control the lifecycle of all report layouts](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#control-the-lifecycle-of-all-report-layouts) (high confidence, docs say GA)
- Report inbox APIs -> [Automate report outputs](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#automate-report-outputs) (high confidence, docs say GA)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/2N2NhNH7dsk.md](../transcripts/full/2N2NhNH7dsk.md) (JSON segments: [2N2NhNH7dsk.json](../transcripts/full/2N2NhNH7dsk.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/2N2NhNH7dsk/hqdefault.jpg_
