---
id: KNy2KujjheU
title: "What's new: Database Export Enhancements"
wave: 2026w2
url: https://www.youtube.com/watch?v=KNy2KujjheU
thumbnail: https://i.ytimg.com/vi/KNy2KujjheU/hqdefault.jpg
duration_seconds: 243
area: admin-and-platform
audience:
  - admin
  - developer
  - consultant
presenters:
  - Ehor Hanzuk?
features:
  - database-export-environment-operation
  - database-export-reliability
  - export-history-endpoint-deprecated
  - export-database-button
  - database-export-history-retirement
status_mentions:
  ga: 2
  unclear: 2
  announced: 1
chapters: 6
quotes: 9
disclaimers: 3
docs_matched: 0
transcript: data/transcripts/full/KNy2KujjheU.md
---

# What's new: Database Export Enhancements

> This video covers two changes to database export in Business Central online. Reliability is better, with fewer than 1% of exports failing today, so large environments can be exported. Exports now show up on the environment operations page in the admin center next to renames, updates and copies. A short demo shows the single Export database button and a running export in the operations list. The video ends with two notes: the export history page is retiring, and the export history endpoint in the admin center API is deprecated in favor of the environment operations API.

Watch: https://www.youtube.com/watch?v=KNy2KujjheU (4:03). Area: Admin and platform. Audience: admin, developer, consultant. Presenters as heard: Ehor Hanzuk (low confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=KNy2KujjheU&t=0s) Introduction and two headlines (1 min)
- [0:33](https://www.youtube.com/watch?v=KNy2KujjheU&t=33s) What a database export is (1 min)
- [1:09](https://www.youtube.com/watch?v=KNy2KujjheU&t=69s) Reliability improvements (0 min)
- [1:34](https://www.youtube.com/watch?v=KNy2KujjheU&t=94s) Exports as environment operations (1 min)
- [2:18](https://www.youtube.com/watch?v=KNy2KujjheU&t=138s) Demo in the admin center (1 min)
- [3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) History page retiring and API deprecation (1 min)

## Features in this video

- [Database export reliability](../features/database-export-reliability.md) - GA - [0:45 to 1:34](https://www.youtube.com/watch?v=KNy2KujjheU&t=45s) - The most common failures were removed across the export pipeline, so fewer than 1% of exports fail.
- [Database export as an environment operation](../features/database-export-environment-operation.md) - GA - [1:34 to 3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=94s), demo [2:18 to 3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=138s) - An export appears on the operations page with status, times, who triggered it and the error on failure.
- [Single Export database button](../features/export-database-button.md) - GA - [2:18 to 2:46](https://www.youtube.com/watch?v=KNy2KujjheU&t=138s), demo [2:18 to 2:46](https://www.youtube.com/watch?v=KNy2KujjheU&t=138s) - Export database is now one button instead of a dropdown with export history.
- [Database export history page retirement](../features/database-export-history-retirement.md) - announced - [3:03 to 3:28](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) - The database export history page is retiring.
- [Export history API endpoint deprecated](../features/export-history-endpoint-deprecated.md) - GA - [3:15 to 4:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=195s) - The admin center API export history endpoint is deprecated and kept only on API versions 2.29 and earlier.

## Quotes

- [0:45](https://www.youtube.com/watch?v=KNy2KujjheU&t=45s) "so two headlines this time. Reliability. Fewer than 1% of exports are failing today." - Gives the headline reliability number for database export.
- [1:09](https://www.youtube.com/watch?v=KNy2KujjheU&t=69s) "fewer than 1% of database exports are failing today and in many weeks we see no failures at all." - States the failure rate and that many weeks have no failures.
- [1:44](https://www.youtube.com/watch?v=KNy2KujjheU&t=104s) "From this release, an export is an environment operation like any other." - Describes the main design change: exports join the standard operations model.
- [1:55](https://www.youtube.com/watch?v=KNy2KujjheU&t=115s) "Once an expert starts, you can see it on the operations page with a status, start and end time" - Lists the tracking information that is now visible for each export.
- [2:18](https://www.youtube.com/watch?v=KNy2KujjheU&t=138s) "export database is now a single button. It used to be a dropdown that had the export history option" - Shows the UI change admins will notice right away.
- [3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) "Firstly, the database expert history page is retiring." - Admins who used the history page need to use the operations page instead.
- [3:15](https://www.youtube.com/watch?v=KNy2KujjheU&t=195s) "if you automate against the admin center API, the expert history endpoint is deprecated." - Flags a breaking change for anyone with automation against the admin center API.
- [3:28](https://www.youtube.com/watch?v=KNy2KujjheU&t=208s) "It keeps working on API versions 2.29 and earlier, but it is not carried forward to newer versions." - Gives the exact API version limit for the deprecated endpoint.
- [3:40](https://www.youtube.com/watch?v=KNy2KujjheU&t=220s) "you should move them to use the environment operations API." - States the migration path for automations.

## Disclaimers and status moments

- [3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) other: "the database expert history page is retiring"
- [3:15](https://www.youtube.com/watch?v=KNy2KujjheU&t=195s) other: "the expert history endpoint is deprecated"
- [3:28](https://www.youtube.com/watch?v=KNy2KujjheU&t=208s) other: "it is not carried forward to newer versions"

## Documented features matched

- none of the features in this video matched an item in the documented features baseline

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/KNy2KujjheU.md](../transcripts/full/KNy2KujjheU.md) (JSON segments: [KNy2KujjheU.json](../transcripts/full/KNy2KujjheU.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/KNy2KujjheU/hqdefault.jpg_
