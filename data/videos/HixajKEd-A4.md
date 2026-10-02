---
id: HixajKEd-A4
title: "What's new: Match Production Database Configuration"
wave: 2026w2
url: https://www.youtube.com/watch?v=HixajKEd-A4
thumbnail: https://i.ytimg.com/vi/HixajKEd-A4/hqdefault.jpg
duration_seconds: 163
area: admin-and-platform
audience:
  - admin
  - developer
  - partner
presenters: []
features:
  - match-production-auto-revert
  - match-production-configuration
  - match-production-admin-api
  - match-production-operation-tracking
  - match-production-usage-limit
  - match-production-restart-warning
  - match-production-paid-license
status_mentions:
  unclear: 7
chapters: 5
quotes: 8
disclaimers: 1
docs_matched: 0
transcript: data/transcripts/full/HixajKEd-A4.md
---

# What's new: Match Production Database Configuration

> This video covers a new admin center action in 2026 release wave two that temporarily matches a sandbox database configuration to that of a typical production database. It is meant for developers and administrators who want to check performance or run cloud migration projects under production-like conditions. The video shows the new button, the flyout warning about a restart, and how to track the operation. It then lists the limits: three uses per tenant per calendar month, 72 hours each, an automatic revert, admin center API support, and a paid license requirement.

Watch: https://www.youtube.com/watch?v=HixajKEd-A4 (2:43). Area: Admin and platform. Audience: admin, developer, partner. Presenters as heard: not introduced by name.

## Chapters

- [0:00](https://www.youtube.com/watch?v=HixajKEd-A4&t=0s) Overview: matching sandbox to production configuration (1 min)
- [0:43](https://www.youtube.com/watch?v=HixajKEd-A4&t=43s) Admin center button, flyout and operation tracking (1 min)
- [1:29](https://www.youtube.com/watch?v=HixajKEd-A4&t=89s) Limits: three times per month, 72 hours each (1 min)
- [1:59](https://www.youtube.com/watch?v=HixajKEd-A4&t=119s) Automatic revert, admin center API and license requirement (0 min)
- [2:24](https://www.youtube.com/watch?v=HixajKEd-A4&t=144s) Wrap-up (0 min)

## Features in this video

- [Match production configuration](../features/match-production-configuration.md) - GA - [0:07 to 0:56](https://www.youtube.com/watch?v=HixajKEd-A4&t=7s), demo [0:43 to 0:56](https://www.youtube.com/watch?v=HixajKEd-A4&t=43s) - Administrators can temporarily match a sandbox database configuration to a typical production database.
- [Restart warning flyout](../features/match-production-restart-warning.md) - GA - [0:56 to 1:09](https://www.youtube.com/watch?v=HixajKEd-A4&t=56s), demo [0:56 to 1:09](https://www.youtube.com/watch?v=HixajKEd-A4&t=56s) - The admin center button opens a flyout explaining the action and warning that the environment restarts.
- [Automatic revert after 72 hours](../features/match-production-auto-revert.md) - GA - [1:09 to 2:13](https://www.youtube.com/watch?v=HixajKEd-A4&t=69s) - The environment reverts to a typical sandbox configuration after 72 hours.
- [Match production operation tracking](../features/match-production-operation-tracking.md) - GA - [1:09 to 1:29](https://www.youtube.com/watch?v=HixajKEd-A4&t=69s), demo [1:09 to 1:29](https://www.youtube.com/watch?v=HixajKEd-A4&t=69s) - The operation can be tracked like other admin center operations.
- [Match production usage limit](../features/match-production-usage-limit.md) - GA - [1:43 to 1:59](https://www.youtube.com/watch?v=HixajKEd-A4&t=103s) - The operation is limited to three occurrences per tenant per calendar month, each lasting 72 hours.
- [Match production in admin center API](../features/match-production-admin-api.md) - GA - [1:59 to 2:24](https://www.youtube.com/watch?v=HixajKEd-A4&t=119s) - The match production configuration operation is supported in the admin center APIs.
- [Match production paid license requirement](../features/match-production-paid-license.md) - GA - [2:13 to 2:24](https://www.youtube.com/watch?v=HixajKEd-A4&t=133s) - The feature is only available on tenants with a paid license type.

## Quotes

- [0:07](https://www.youtube.com/watch?v=HixajKEd-A4&t=7s) "A new feature we're shipping in 2026 release wave two." - Places the feature in the 2026 release wave two timeline.
- [0:23](https://www.youtube.com/watch?v=HixajKEd-A4&t=23s) "can mimic the configuration of a production database in their sandbox environment to evaluate how processes would run in a typical production environment" - States the core purpose: testing production-like behavior in a sandbox.
- [0:56](https://www.youtube.com/watch?v=HixajKEd-A4&t=56s) "any users that are connected to the environment at the time you do this will be disconnected" - Warns that running the action disrupts connected users.
- [1:09](https://www.youtube.com/watch?v=HixajKEd-A4&t=69s) "your environment will automatically revert back to a typical sandbox configuration after 72 hours" - The production-like configuration is temporary, with a fixed 72-hour duration.
- [1:43](https://www.youtube.com/watch?v=HixajKEd-A4&t=103s) "this operation is limited to three occurrences per tenant per calendar month for 72 hours at a time" - Gives the hard usage limit that affects how teams plan their testing.
- [1:59](https://www.youtube.com/watch?v=HixajKEd-A4&t=119s) "during the first environment update window after those 72 hours end" - The revert happens at the next update window, not exactly at the 72-hour mark.
- [1:59](https://www.youtube.com/watch?v=HixajKEd-A4&t=119s) "this operation is also supported in the admin center APIs, so for developers that are automating" - Developers can script the operation in their pipelines.
- [2:13](https://www.youtube.com/watch?v=HixajKEd-A4&t=133s) "this is only available on tenants that have a paid license type, including partners that are using the partner sandbox license." - Sets the license prerequisite, including for partners.

## Disclaimers and status moments

- [0:07](https://www.youtube.com/watch?v=HixajKEd-A4&t=7s) other: "A new feature we're shipping in 2026 release wave two."

## Documented features matched

- none of the features in this video matched an item in the documented features baseline

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/HixajKEd-A4.md](../transcripts/full/HixajKEd-A4.md) (JSON segments: [HixajKEd-A4.json](../transcripts/full/HixajKEd-A4.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/HixajKEd-A4/hqdefault.jpg_
