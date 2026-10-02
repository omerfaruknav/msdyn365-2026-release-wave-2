---
id: hNom9ZZuca0
title: "What's new: Testability Enhancements"
wave: 2026w2
url: https://www.youtube.com/watch?v=hNom9ZZuca0
thumbnail: https://i.ytimg.com/vi/hNom9ZZuca0/hqdefault.jpg
duration_seconds: 614
area: developer-tools
audience:
  - developer
  - partner
presenters:
  - Thomas
  - Thaddius?
features:
  - data-driven-tests
  - test-handlers
  - default-test-handlers
  - test-data-source-interface
  - test-handler-enum-registration
  - skip-tests-with-handlers
  - testhandlers-property
  - data-driven-tests-test-explorer
  - itesthandler-interface
  - test-toolkit-events-migration
  - strongly-typed-test-context
  - ai-test-toolkit-migration
  - data-driven-tests-al-tool-mcp
status_mentions:
  unclear: 12
  announced: 1
chapters: 8
quotes: 9
disclaimers: 2
docs_matched: 11
transcript: data/transcripts/full/hNom9ZZuca0.md
---

# What's new: Testability Enhancements

> Two engineers from the Business Central developer tooling team cover two testing additions in AL. The first is data-driven testing, where one test procedure runs against many data sets coming from a custom data source such as a resource file. The second is test handlers, which bring setup and tear down hooks back to the platform test runner at codeunit, procedure and data-driven test level. They show both in Visual Studio Code, including registering handlers through enum extensions and the new test handlers property on test codeunits. They also note that the AI Test Toolkit does not yet use the new data-driven capabilities, and that test handlers are separate from the old test toolkit events.

Watch: https://www.youtube.com/watch?v=hNom9ZZuca0 (10:14). Area: Developer tools. Audience: developer, partner. Presenters as heard: Thomas (high confidence), Thaddius (low confidence).

## Chapters

- [0:00](https://www.youtube.com/watch?v=hNom9ZZuca0&t=0s) Introduction and agenda (1 min)
- [0:32](https://www.youtube.com/watch?v=hNom9ZZuca0&t=32s) Why data-driven testing matters (1 min)
- [1:13](https://www.youtube.com/watch?v=hNom9ZZuca0&t=73s) Demo: data-driven tests in Test Explorer (1 min)
- [2:12](https://www.youtube.com/watch?v=hNom9ZZuca0&t=132s) Test data sources, typed test context and tooling support (2 min)
- [4:21](https://www.youtube.com/watch?v=hNom9ZZuca0&t=261s) Test handlers: levels and types (2 min)
- [6:13](https://www.youtube.com/watch?v=hNom9ZZuca0&t=373s) Demo: registering and implementing test handlers (2 min)
- [8:27](https://www.youtube.com/watch?v=hNom9ZZuca0&t=507s) Migration from test toolkit events and skipping tests (1 min)
- [9:36](https://www.youtube.com/watch?v=hNom9ZZuca0&t=576s) Wrap-up and feedback (1 min)

## Features in this video

- [Data-driven tests](../features/data-driven-tests.md) - status not stated - [0:32 to 1:13](https://www.youtube.com/watch?v=hNom9ZZuca0&t=32s), demo [1:13 to 2:12](https://www.youtube.com/watch?v=hNom9ZZuca0&t=73s) - One test procedure can run against many data sets from a test data source, so more tests come from adding data points.
- [Data-driven tests in Test Explorer](../features/data-driven-tests-test-explorer.md) - status not stated - [1:29 to 2:12](https://www.youtube.com/watch?v=hNom9ZZuca0&t=89s), demo [1:29 to 2:12](https://www.youtube.com/watch?v=hNom9ZZuca0&t=89s) - After one run, all test cases appear in the VS Code Test Explorer.
- [Test data source interface](../features/test-data-source-interface.md) - status not stated - [2:12 to 3:42](https://www.youtube.com/watch?v=hNom9ZZuca0&t=132s), demo [2:12 to 3:42](https://www.youtube.com/watch?v=hNom9ZZuca0&t=132s) - An interface with one function to list test cases and one to build test context objects.
- [Strongly typed test context](../features/strongly-typed-test-context.md) - status not stated - [3:01 to 3:28](https://www.youtube.com/watch?v=hNom9ZZuca0&t=181s), demo [3:01 to 3:28](https://www.youtube.com/watch?v=hNom9ZZuca0&t=181s) - The data source returns an ITestContext, but the test can use its own interface for typed test data.
- [Data-driven tests via AL tool and AL MCP](../features/data-driven-tests-al-tool-mcp.md) - status not stated - [3:42 to 3:56](https://www.youtube.com/watch?v=hNom9ZZuca0&t=222s) - Data-driven tests can also run through the AL tool and the AL MCP.
- [AI Test Toolkit migration to data-driven tests](../features/ai-test-toolkit-migration.md) - announced - [3:56 to 4:21](https://www.youtube.com/watch?v=hNom9ZZuca0&t=236s) - AI Test Toolkit data-driven tests do not use the new system yet and cannot run from VS Code.
- [Test handlers](../features/test-handlers.md) - status not stated - [4:21 to 5:26](https://www.youtube.com/watch?v=hNom9ZZuca0&t=261s) - Test handlers provide setup and tear down in AL, with hooks before and after the test codeunit, test procedure and each data-driven test case.
- [Default test handlers](../features/default-test-handlers.md) - status not stated - [5:26 to 6:13](https://www.youtube.com/watch?v=hNom9ZZuca0&t=326s), demo [6:24 to 7:05](https://www.youtube.com/watch?v=hNom9ZZuca0&t=384s) - Regular test handlers are declared by the test codeunit, while default handlers run on every test, including tests from other apps.
- [Test handler registration via enum extensions](../features/test-handler-enum-registration.md) - status not stated - [6:13 to 7:05](https://www.youtube.com/watch?v=hNom9ZZuca0&t=373s), demo [6:24 to 7:05](https://www.youtube.com/watch?v=hNom9ZZuca0&t=384s) - Handlers are registered by extending the test handler enum for opt-in or the default test handler enum for global.
- [ITestHandler interface](../features/itesthandler-interface.md) - status not stated - [7:05 to 7:43](https://www.youtube.com/watch?v=hNom9ZZuca0&t=425s), demo [7:05 to 7:43](https://www.youtube.com/watch?v=hNom9ZZuca0&t=425s) - The interface offers before and after hooks at codeunit, procedure and test case level.
- [TestHandlers property](../features/testhandlers-property.md) - status not stated - [7:43 to 8:27](https://www.youtube.com/watch?v=hNom9ZZuca0&t=463s), demo [7:43 to 8:27](https://www.youtube.com/watch?v=hNom9ZZuca0&t=463s) - A test codeunit property takes a comma-separated list of handlers.
- [Migration from test toolkit events to test handlers](../features/test-toolkit-events-migration.md) - status not stated - [8:27 to 9:05](https://www.youtube.com/watch?v=hNom9ZZuca0&t=507s) - Test handlers are separate from the test toolkit events.
- [Skipping test cases with test handlers](../features/skip-tests-with-handlers.md) - status not stated - [8:46 to 9:36](https://www.youtube.com/watch?v=hNom9ZZuca0&t=526s) - Handlers can skip test cases, for example AI tests once a monthly token limit is exceeded.

## Quotes

- [1:03](https://www.youtube.com/watch?v=hNom9ZZuca0&t=63s) "we can broaden our test um scope to such an extent that we gain the trust uh and confidence in our AI features" - States the main reason for data-driven testing: wider test coverage for AI features.
- [3:28](https://www.youtube.com/watch?v=hNom9ZZuca0&t=208s) "right now this reads from the resource file but it could equally be reading from an AL table or your web service" - Shows the data source is open-ended, not tied to resource files.
- [3:56](https://www.youtube.com/watch?v=hNom9ZZuca0&t=236s) "This is not yet using these new capabilities which means that you are not able to run these from Visual Studio Code." - A limitation: AI Test Toolkit data-driven tests do not yet work in VS Code.
- [4:48](https://www.youtube.com/watch?v=hNom9ZZuca0&t=288s) "but we sort of lost that when we moved to the platform test runners." - Explains why test handlers were brought back.
- [5:26](https://www.youtube.com/watch?v=hNom9ZZuca0&t=326s) "default test handlers uh or I like to think of them as global test handlers because they run on every single um test" - Describes the design of default handlers, which run on every test.
- [7:26](https://www.youtube.com/watch?v=hNom9ZZuca0&t=446s) "you can just implement the before after test code unit and you don't have to implement the rest." - Default interface implementations keep handlers small.
- [8:27](https://www.youtube.com/watch?v=hNom9ZZuca0&t=507s) "these um test handlers are separate from the test toolkit events that are driven by AL test runners" - The new handlers do not replace the old events automatically, so there is a separate mechanism.
- [8:46](https://www.youtube.com/watch?v=hNom9ZZuca0&t=526s) "if you're using those you will need to migrate across to this if you want to take advantage of these functionalities" - Existing event-based test code needs migration to use test handlers.
- [9:05](https://www.youtube.com/watch?v=hNom9ZZuca0&t=545s) "one common use case nowadays for us internally is we use it for managing token consumption" - A practical use case: skipping AI tests when the token or credit budget is used up.

## Disclaimers and status moments

- [3:56](https://www.youtube.com/watch?v=hNom9ZZuca0&t=236s) not-in-this-release: "This is not yet using these new capabilities"
- [4:11](https://www.youtube.com/watch?v=hNom9ZZuca0&t=251s) coming-later: "we are planning on migrating them to this new system"

## Documented features matched

- Data-driven tests -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (high confidence, docs say GA)
- Test handlers -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (high confidence, docs say GA)
- Default test handlers -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (high confidence, docs say GA)
- Test data source interface -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (high confidence, docs say GA)
- Test handler registration via enum extensions -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (medium confidence, docs say GA)
- Skipping test cases with test handlers -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (medium confidence, docs say GA)
- TestHandlers property -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (medium confidence, docs say GA)
- Data-driven tests in Test Explorer -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (medium confidence, docs say GA)
- ITestHandler interface -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (high confidence, docs say GA)
- Strongly typed test context -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (medium confidence, docs say GA)
- Data-driven tests via AL tool and AL MCP -> [Build extensible and data-driven AL test suites](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#build-extensible-and-data-driven-al-test-suites) (medium confidence, docs say GA)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/hNom9ZZuca0.md](../transcripts/full/hNom9ZZuca0.md) (JSON segments: [hNom9ZZuca0.json](../transcripts/full/hNom9ZZuca0.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/hNom9ZZuca0/hqdefault.jpg_
