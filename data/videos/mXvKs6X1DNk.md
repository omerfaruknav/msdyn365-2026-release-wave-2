---
id: mXvKs6X1DNk
title: "What's new: Cross-environment Master Data Management"
wave: 2026w2
url: https://www.youtube.com/watch?v=mXvKs6X1DNk
thumbnail: https://i.ytimg.com/vi/mXvKs6X1DNk/hqdefault.jpg
duration_seconds: 580
area: integration
audience:
  - admin
  - consultant
  - partner
presenters:
  - Ksenia?
  - George
features:
  - cross-environment-master-data-management
  - mdm-change-propagation-log
  - mdm-initial-synchronization
  - mdm-pull-incremental-sync
  - mdm-hq-read-permission-set
  - mdm-entra-app-registration
  - mdm-cross-environment-wizard
  - mdm-pictures-attachments
  - mdm-shared-app-registration
status_mentions:
  unclear: 9
chapters: 6
quotes: 8
disclaimers: 2
docs_matched: 0
transcript: data/transcripts/full/mXvKs6X1DNk.md
---

# What's new: Cross-environment Master Data Management

> This video covers cross-environment master data management in Business Central 2026 Wave 2. Until now, master data could only be synchronized between companies in the same environment. Now a subsidiary in a different environment of the same tenant can pull data from the headquarters company, using the same mapping, engine and UI as before. The presenters explain the Microsoft Entra app registration, admin consent and permission set that control access. A demo then shows the setup wizard, the initial synchronization, and a customer name change flowing from the source to the subsidiary.

Watch: https://www.youtube.com/watch?v=mXvKs6X1DNk (9:40). Area: Integration (Fabric, Shopify, MDM). Audience: admin, consultant, partner. Presenters as heard: Ksenia (medium confidence), George (high confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=0s) Problem and what is new (2 min)
- [1:32](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=92s) How it works: HQ, Entra ID and limits (2 min)
- [3:57](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=237s) Demo: subsidiary setup wizard and app registration (2 min)
- [5:46](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=346s) Demo: consent and permissions in the source environment (1 min)
- [6:50](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=410s) Demo: initial synchronization (1 min)
- [8:12](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=492s) Demo: change propagation and wrap-up (1 min)

## Features in this video

- [Cross-environment master data management](../features/cross-environment-master-data-management.md) - status not stated - [0:06 to 1:32](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=6s), demo [3:57 to 9:18](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=237s) - Subsidiaries in other environments of the same tenant can pull master data from the HQ company.
- [Pull-based incremental synchronization](../features/mdm-pull-incremental-sync.md) - status not stated - [1:32 to 2:14](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=92s), demo [7:59 to 9:18](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=479s) - HQ stays read-only and subsidiaries pull only the changes across environments.
- [Entra app registration and consent](../features/mdm-entra-app-registration.md) - status not stated - [2:14 to 2:43](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=134s), demo [5:17 to 6:09](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=317s) - An Entra app with API read/write all permissions is registered and the HQ admin gives consent in Business Central.
- [Pictures and attachments sync](../features/mdm-pictures-attachments.md) - status not stated - [2:43 to 3:07](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=163s) - Pictures and attachments travel with the synchronized record.
- [Cross-environment setup wizard](../features/mdm-cross-environment-wizard.md) - status not stated - [3:07 to 3:35](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=187s), demo [4:47 to 5:46](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=287s) - A wizard collects privacy consent, the HQ environment and company, and the app client ID and secret, stored securely.
- [Shared or per-subsidiary app registration](../features/mdm-shared-app-registration.md) - status not stated - [3:35 to 3:57](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=215s) - One app can be shared across subsidiaries or one registered per subsidiary, depending on audit needs.
- [Permission set for HQ read access](../features/mdm-hq-read-permission-set.md) - status not stated - [6:09 to 6:50](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=369s), demo [6:09 to 6:50](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=369s) - A purpose-designed permission set with read access to default tables is assigned to the app user in the source.
- [Initial cross-environment synchronization](../features/mdm-initial-synchronization.md) - status not stated - [6:50 to 8:12](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=410s), demo [6:50 to 8:12](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=410s) - Start all runs default tables in a predefined order, starting with business relations and dimensions.
- [Change propagation and synchronization log](../features/mdm-change-propagation-log.md) - status not stated - [8:12 to 9:40](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=492s), demo [8:12 to 9:18](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=492s) - Source changes show in the subsidiary after about a minute.

## Quotes

- [1:05](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=65s) "it is a fully built-in solution, so no middleware, no custom code, no extra service." - States the design goal: cross-environment sync needs no custom integration work.
- [1:45](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=105s) "HQ still the read-only and the main source uh of the data." - Clarifies the direction of data flow: subsidiaries only pull from HQ.
- [2:54](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=174s) "should be up to 512 KB each, no more." - A concrete limit on picture size for the synchronization.
- [2:54](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=174s) "all the environments should be in the same tenant" - Sets the main boundary of the feature: same tenant, but different environments.
- [5:17](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=317s) "the app needs to have this API read write all application level permissions" - Names the permission requirement for the Entra app registration.
- [6:31](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=391s) "if you add more tables than the default ones, then you need to create a new permission set" - Custom synchronized tables need extra read permissions set up by the HQ admin.
- [6:50](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=410s) "So, this way the admin has control of who reads what." - Summarizes the security model: the HQ admin decides which subsidiaries read which data.
- [8:31](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=511s) "And after about a minute in the in the source environment, we should see the change." - Gives the expected delay for change propagation.

## Disclaimers and status moments

- [2:43](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=163s) other: "The only, for now, limitation there, pictures,"
- [5:17](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=317s) coming-later: "And here you we will document all this"

## Documented features matched

- none of the features in this video matched an item in the documented features baseline

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/mXvKs6X1DNk.md](../transcripts/full/mXvKs6X1DNk.md) (JSON segments: [mXvKs6X1DNk.json](../transcripts/full/mXvKs6X1DNk.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/mXvKs6X1DNk/hqdefault.jpg_
