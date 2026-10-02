---
id: kOCiyVql0go
title: "Introducing: Business Central Integration with Microsoft Fabric"
wave: 2026w2
url: https://www.youtube.com/watch?v=kOCiyVql0go
thumbnail: https://i.ytimg.com/vi/kOCiyVql0go/hqdefault.jpg
duration_seconds: 613
area: integration
audience:
  - admin
  - consultant
  - developer
  - partner
presenters: []
features:
  - fabric-mirroring
  - power-bi-apps-fabric
  - fabric-export-logs-in-fabric
  - multi-company-power-bi-fabric
  - fabric-synchronization-logs
  - fabric-connection-setup
  - fabric-onelake-sql-endpoint
  - fabric-configuration-packages
  - fabric-table-company-selection
  - fabric-integration-apis
  - fabric-permission-sets
status_mentions:
  preview: 9
  announced: 2
chapters: 7
quotes: 8
disclaimers: 2
docs_matched: 0
transcript: data/transcripts/full/kOCiyVql0go.md
---

# Introducing: Business Central Integration with Microsoft Fabric

> This video introduces mirroring from Business Central to Microsoft Fabric, which is coming in public preview in version 29.x. It walks through a three-step setup: create a mirror database in Fabric, connect Business Central to it, then pick tables and companies and start synchronization. It shows how the data appears in OneLake with a SQL endpoint, and the Power BI apps that were converted to run on the Fabric backend, including multi-company versions. It then covers monitoring in the client, the APIs, the logs pushed to Fabric, and the permission sets. It ends with pointers to aka.ms/bcanalytics and Microsoft Learn.

Watch: https://www.youtube.com/watch?v=kOCiyVql0go (10:13). Area: Integration (Fabric, Shopify, MDM). Audience: admin, consultant, developer, partner. Presenters as heard: not introduced by name.

## Chapters

- [0:00](https://www.youtube.com/watch?v=kOCiyVql0go&t=0s) Introduction to mirroring and Fabric (1 min)
- [1:22](https://www.youtube.com/watch?v=kOCiyVql0go&t=82s) Setting up mirroring in three steps (3 min)
- [4:25](https://www.youtube.com/watch?v=kOCiyVql0go&t=265s) Data in OneLake and the SQL endpoint (1 min)
- [5:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=315s) Power BI apps on the Fabric backend (2 min)
- [7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=427s) Monitoring, logs and APIs (2 min)
- [8:59](https://www.youtube.com/watch?v=kOCiyVql0go&t=539s) Permission sets (0 min)
- [9:24](https://www.youtube.com/watch?v=kOCiyVql0go&t=564s) Learn more and wrap-up (1 min)

## Features in this video

- [Mirroring to Microsoft Fabric](../features/fabric-mirroring.md) - preview - [0:07 to 4:25](https://www.youtube.com/watch?v=kOCiyVql0go&t=7s), demo [1:36 to 4:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=96s) - Business Central data is synchronized live into OneLake through an open mirroring database.
- [Fabric connection setup](../features/fabric-connection-setup.md) - preview - [2:00 to 3:10](https://www.youtube.com/watch?v=kOCiyVql0go&t=120s), demo [2:12 to 2:57](https://www.youtube.com/watch?v=kOCiyVql0go&t=132s) - A Fabric integration app holds the workspace and mirroring database setup.
- [Table and company selection for Fabric](../features/fabric-table-company-selection.md) - preview - [3:10 to 3:48](https://www.youtube.com/watch?v=kOCiyVql0go&t=190s), demo [3:10 to 4:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=190s) - You choose which tables and companies to synchronize, then start synchronization.
- [Configuration packages for Fabric tables](../features/fabric-configuration-packages.md) - preview - [3:32 to 4:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=212s), demo [4:04 to 4:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=244s) - Configuration packages define tables to synchronize, for example for the Power BI apps.
- [Mirrored data with SQL endpoint](../features/fabric-onelake-sql-endpoint.md) - preview - [4:25 to 5:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=265s), demo [4:25 to 5:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=265s) - Tables are stored as Delta Parquet files in the mirroring database.
- [Power BI apps on Fabric](../features/power-bi-apps-fabric.md) - announced - [5:15 to 7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=315s), demo [5:52 to 7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=352s) - The Power BI apps were converted to the Fabric backend.
- [Multi-company Power BI reporting](../features/multi-company-power-bi-fabric.md) - announced - [5:33 to 7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=333s), demo [5:52 to 7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=352s) - Multi-company app versions show data across companies with a company filter.
- [Synchronization overview and details logs](../features/fabric-synchronization-logs.md) - preview - [7:07 to 8:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=427s), demo [7:37 to 8:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=457s) - Overview and details logs are under monitoring with views for all, errors or pushed data.
- [Export logs pushed to Fabric](../features/fabric-export-logs-in-fabric.md) - preview - [7:22 to 8:59](https://www.youtube.com/watch?v=kOCiyVql0go&t=442s), demo [8:48 to 8:59](https://www.youtube.com/watch?v=kOCiyVql0go&t=528s) - Synchronization logs are also written into Fabric for monitoring through the SQL endpoint.
- [Fabric integration APIs](../features/fabric-integration-apis.md) - preview - [8:19 to 8:48](https://www.youtube.com/watch?v=kOCiyVql0go&t=499s), demo [8:32 to 8:48](https://www.youtube.com/watch?v=kOCiyVql0go&t=512s) - Setup and monitoring data are available as six APIs listed on the API overview page.
- [Permission sets for Fabric integration](../features/fabric-permission-sets.md) - preview - [8:59 to 9:24](https://www.youtube.com/watch?v=kOCiyVql0go&t=539s) - Permission sets cover activation, administration and read-only configuration access.

## Quotes

- [0:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=19s) "this is coming in public preview in version 29.x, likely 9 29.1" - States the release status and target version of mirroring to Fabric.
- [1:22](https://www.youtube.com/watch?v=kOCiyVql0go&t=82s) "One, set up a mirroring database in Fabric. Two, connect to Business Central. Three, choose tables and companies, click go, and that's it." - Summarizes the whole setup flow in three steps.
- [3:48](https://www.youtube.com/watch?v=kOCiyVql0go&t=228s) "If you have ISV solutions or other things where that solution requires certain tables to be synchronized, they can specify a configuration package." - Shows how ISVs can declare the tables their solutions need synchronized.
- [4:46](https://www.youtube.com/watch?v=kOCiyVql0go&t=286s) "They're actually not SQL tables, they're Delta Parquet files" - Clarifies the real storage format behind the SQL endpoint in Fabric.
- [5:33](https://www.youtube.com/watch?v=kOCiyVql0go&t=333s) "they will be available uh soon either as code samples or on AppSource" - Gives the delivery channels for the Fabric-based Power BI apps and says they are not available yet.
- [5:33](https://www.youtube.com/watch?v=kOCiyVql0go&t=333s) "for each of the nine Power BI apps, there will be a single company version" - Gives the number of Power BI apps converted to run on the Fabric backend.
- [7:22](https://www.youtube.com/watch?v=kOCiyVql0go&t=442s) "And we also put it in Fabric so that if you want to monitor from Fabric point of view, you can do that." - Logs can be monitored from Fabric as well as from Business Central.
- [8:32](https://www.youtube.com/watch?v=kOCiyVql0go&t=512s) "the new API overview page in Business Central, if you search for Fabric, you can see those six APIs available there." - Gives the number of APIs for setup and monitoring, relevant for automation.

## Disclaimers and status moments

- [0:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=19s) preview: "this is coming in public preview in version 29.x, likely 9 29.1"
- [5:33](https://www.youtube.com/watch?v=kOCiyVql0go&t=333s) coming-later: "they will be available uh soon either as code samples or on AppSource"

## Documented features matched

- none of the features in this video matched an item in the documented features baseline

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/kOCiyVql0go.md](../transcripts/full/kOCiyVql0go.md) (JSON segments: [kOCiyVql0go.json](../transcripts/full/kOCiyVql0go.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/kOCiyVql0go/hqdefault.jpg_
