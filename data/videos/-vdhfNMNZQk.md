---
id: -vdhfNMNZQk
title: "Introducing: Composite Document Layouts"
wave: 2026w2
url: https://www.youtube.com/watch?v=-vdhfNMNZQk
thumbnail: https://i.ytimg.com/vi/-vdhfNMNZQk/hqdefault.jpg
duration_seconds: 750
area: reporting-and-analytics
audience:
  - developer
  - consultant
  - admin
  - partner
presenters: []
features:
  - report-themes-header-footer-layouts
  - layout-status-app-layouts
  - composite-document-layouts
  - composite-layout-menu
  - shipped-themes-body-layouts
  - new-document-experience-switch
  - default-theme-header-footer-levels
  - manage-themes-header-footer-layouts
  - al-theme-header-footer-rendering
status_mentions:
  unclear: 9
  announced: 1
chapters: 7
quotes: 9
disclaimers: 4
docs_matched: 6
transcript: data/transcripts/full/-vdhfNMNZQk.md
---

# Introducing: Composite Document Layouts

> This video introduces composite layouts for document reports in Business Central 2026 release wave 2. A report layout is split into a body layout (structure only), a theme (colors and fonts) and a header footer layout, which are combined at runtime. The presenter shows how to apply them on a single layout, how defaults cascade from global to company to report to layout, and how to add your own themes and header footer layouts in the app or from AL. A customer statement demo shows one body layout combined with different themes and header footers. The video ends with rollout options (a feature management switch and layout states) and a pointer to the developer documentation.

Watch: https://www.youtube.com/watch?v=-vdhfNMNZQk (12:30). Area: Reporting and analytics. Audience: developer, consultant, admin, partner. Presenters as heard: not introduced by name.

## Chapters

- [0:00](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=0s) What composite layouts are (2 min)
- [2:25](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=145s) Body layout and applying a theme and header footer (2 min)
- [4:03](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=243s) Defaults from global to layout level (1 min)
- [5:13](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=313s) Adding your own themes and header footers, and what ships (2 min)
- [7:31](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=451s) Customer statement demo: mixing themes and header footers (2 min)
- [9:35](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=575s) Rolling out: feature management and layout states (2 min)
- [11:32](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=692s) Documentation and wrap-up (1 min)

## Features in this video

- [Composite layouts](../features/composite-document-layouts.md) - GA - [0:06 to 2:25](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=6s) - The old all-in-one report layout is split into a body layout for structure, a theme for look and feel, and a header footer layout.
- [Report themes and header footer layouts](../features/report-themes-header-footer-layouts.md) - GA - [0:34 to 9:35](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=34s), demo [7:31 to 9:35](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=451s) - Branding such as colors and fonts, and header and footer content, is defined once as a theme or header footer layout and reused across document reports.
- [Composite layout menu on a body layout](../features/composite-layout-menu.md) - GA - [2:25 to 4:03](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=145s), demo [2:25 to 4:03](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=145s) - On a body layout in the report layouts page, a composite layout menu lets you pick the theme and header footer for testing.
- [Default theme and header footer levels](../features/default-theme-header-footer-levels.md) - GA - [4:03 to 5:13](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=243s), demo [4:30 to 4:57](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=270s) - Default theme and header footer can be set globally, per company, per report and per body layout.
- [Manage themes and header footer layouts page](../features/manage-themes-header-footer-layouts.md) - GA - [5:13 to 5:37](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=313s), demo [5:26 to 5:52](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=326s) - From the manage themes and header footer layouts page you can create a new theme or header footer layout with a name and description.
- [Themes and header footer layouts from AL](../features/al-theme-header-footer-rendering.md) - GA - [5:37 to 6:17](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=337s) - In the rendering section of a report you specify type Word with subtype Theme or Header Footer, while body layouts use subtype Body.
- [Shipped themes, header footers and body layouts](../features/shipped-themes-body-layouts.md) - announced - [6:17 to 7:31](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=377s) - Microsoft aims to ship themes (calm, default, playful, standard), about eight header footer layouts and around 50 body layouts.
- [Feature switch for the new document experience](../features/new-document-experience-switch.md) - GA - [9:35 to 10:47](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=575s), demo [10:05 to 10:47](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=605s) - Feature management has a setting to enable or turn off the new document experience.
- [Layout status for app-supplied layouts](../features/layout-status-app-layouts.md) - GA - [10:47 to 11:32](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=647s), demo [11:10 to 11:32](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=670s) - A Layout status menu on the report layouts page lets an administrator set a lifecycle state such as draft, pending approval, approved or retired on app-supplied layouts, including Microsoft ones.

## Quotes

- [0:06](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=6s) "This video is about a completely new cool thing in document reporting called composite layouts." - States the topic: a new way of structuring document report layouts.
- [0:19](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=19s) "very sad if you want to turn it off, you can do it at least for now." - Signals that the opt-out switch may not stay forever.
- [1:40](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=100s) "And applying here means it happens at runtime. So, you can actually have the same report um you can run it in different ways." - Explains the design decision: theme and header footer are applied at runtime, not baked into the layout.
- [5:52](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=352s) "Uh you need to specify word and the subtype would be a theme." - Gives the AL rendering setup for adding a custom theme.
- [6:17](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=377s) "we aim to ship in version 20.9 and 20.1 and send 20.9.1" - Gives the targeted shipping versions, though the captions may have garbled them.
- [6:31](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=391s) "three themes, approximately eight um header footer layouts, and give or take 50 different body layouts across different functional areas." - Gives the approximate amount of shipped content.
- [9:35](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=575s) "we are not changing any default states or states for for any of the layouts we ship" - Existing layouts keep their default state, which makes the rollout low risk.
- [9:54](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=594s) "So, it's not that when you update to the to the next major here, that suddenly your invoices will look completely different." - Reassures that upgrading does not change how existing invoices look.
- [11:22](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=682s) "And that means that no user will be able to use this layout when they run reports." - Describes the effect of setting a shipped layout to a non-active state.

## Disclaimers and status moments

- [0:19](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=19s) other: "you can do it at least for now"
- [6:17](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=377s) coming-later: "we aim to ship in version 20.9 and 20.1 and send 20.9.1"
- [6:43](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=403s) other: "Mainly in the beginning here so that you can try it out"
- [9:35](https://www.youtube.com/watch?v=-vdhfNMNZQk&t=575s) other: "we are not changing any default states or states for for any of the layouts we ship"

## Documented features matched

- Report themes and header footer layouts -> [Reuse header/footer layouts across document reports](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#reuse-headerfooter-layouts-across-document-reports) (medium confidence, docs say GA)
- Layout status for app-supplied layouts -> [Control the lifecycle of all report layouts](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#control-the-lifecycle-of-all-report-layouts) (high confidence, docs say GA)
- Composite layouts -> [Reuse header/footer layouts across document reports](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#reuse-headerfooter-layouts-across-document-reports) (medium confidence, docs say GA)
- Composite layout menu on a body layout -> [Brand document reports with report themes](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#brand-document-reports-with-report-themes) (medium confidence, docs say GA)
- Default theme and header footer levels -> [Brand document reports with report themes](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#brand-document-reports-with-report-themes) (high confidence, docs say GA)
- Manage themes and header footer layouts page -> [Reuse header/footer layouts across document reports](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#reuse-headerfooter-layouts-across-document-reports) (medium confidence, docs say GA)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/-vdhfNMNZQk.md](../transcripts/full/-vdhfNMNZQk.md) (JSON segments: [-vdhfNMNZQk.json](../transcripts/full/-vdhfNMNZQk.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/-vdhfNMNZQk/hqdefault.jpg_
