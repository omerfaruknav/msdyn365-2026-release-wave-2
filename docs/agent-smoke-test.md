# Agent smoke test

Acceptance criterion 3 from the brief: answer three questions using only files from this
repository, the way an agent following `AGENTS.md` would. Each answer lists the file trail
and cites the video and timestamp as `AGENTS.md` asks. Done on 2026-10-02 against the data
of the full run (38 videos, 319 features), updated after the status rule change (D15).

## 1. What changed for page scripting?

**Trail:** `AGENTS.md` -> `data/index/features.json` (filter `tags` contains
`page-scripting`, 6 hits, all in video `Aqi8Uq2bQyI`) -> `data/features/page-scripting-ga.md`
-> `data/videos/Aqi8Uq2bQyI.md` (chapters and the other five features). Three reads.

**Answer:** Page scripting moves from preview to generally available in this wave. The
presenter says it outright: "But in this release, we are now moving the page scripting from
preview into making it generally available." - What's new in Page Scripting,
[1:00](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=60s). To get there the tool was fully
localized ("every user-facing string is translated, all steps, error messages, tooltips",
[1:13](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=73s)) and given an accessibility and
usability pass ("now it's ready for broad production use across all languages",
[1:38](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=98s)). Two recording capabilities were
added: multiple selection in grids, so a script can select several rows and run a bulk
action ([1:51](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=111s)), and validation of the
text in message and error dialogs, which "turns the recording into actually a real
assertion, not just a sequence of clicks" ([2:13](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=133s)).
The video closes by noting that agents can now be used to generate page scripts
([2:29](https://www.youtube.com/watch?v=Aqi8Uq2bQyI&t=149s)); the video gives no status for
that. The docs baseline agrees on the headline: "Page Scripting enters General Availability"
is matched with high confidence and marked GA (`release_plan` in the feature).

## 2. Is the MCP server in preview or GA?

**Trail:** `AGENTS.md` -> `data/index/features.json` (slugs starting with `mcp`) ->
`data/features/mcp-data-tools.md` -> `data/index/gap-analysis.json` (`silent_on_status`).
Then a grep of `data/transcripts/full/*.md` for "MCP" near "preview" or "generally
available" to make sure nothing was missed. Three reads plus one grep.

**Answer:** The videos do not say. In "What's new: MCP Server" the presenters introduce four
new data tools ("we have uh introduced four new system tools",
[1:16](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=76s)), the compile-and-run loop for AL
queries ("the compilation messages you get is directly from our compiler",
[4:38](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=278s)) and a new on/off toggle for the
server ([7:14](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=434s)), but the words preview or
generally available do not occur in that video, and no other video pairs "MCP" with a
status word (grep over all 38 transcripts returned nothing). By the launch event rule in
`AGENTS.md` (GA unless the presenters say otherwise) all four MCP server features carry
`status: ga` with `status_source: implied`, and they appear in the gap analysis under
"status implied, docs agree". The documentation baseline is explicit: "Run data queries with
MCP Server" is listed as General availability in the update 29.0 overview (roadmap id
573312), matched to the data tools feature with high confidence. So: GA, implied on stage and
stated in Microsoft's docs. An agent should say both halves.

## 3. What does the Fabric integration need on the tenant?

**Trail:** `AGENTS.md` -> `data/videos/kOCiyVql0go.md` (the Fabric video, its features and
prerequisites) -> `data/features/fabric-connection-setup.md` and
`data/features/fabric-mirroring.md` -> `data/transcripts/full/kOCiyVql0go.md` for the exact
wording of the setup steps. Three reads plus the transcript.

**Answer:** On the Business Central side the video names these prerequisites. First, a
version: it is "coming in public preview in version 29.x, likely 29.1"
([0:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=19s)), so the tenant needs that update.
Second, the new app for Microsoft Fabric in Business Central, where you paste the
connection details of a mirroring database you created in Fabric ("you need to copy the
connection strings from Fabric to step number two, which is tell Business Central where to
copy the data", [2:00](https://www.youtube.com/watch?v=kOCiyVql0go&t=120s)); "connect to Fabric" then puts the
infrastructure in place and a test connection action checks it
([2:42](https://www.youtube.com/watch?v=kOCiyVql0go&t=162s)). Third, a configuration package
that lists the tables and companies to synchronize, imported before you click start
synchronization ([4:04](https://www.youtube.com/watch?v=kOCiyVql0go&t=244s)). Fourth,
permissions: "there are permission sets for ac[cess]" so that not everyone can set up the
integration ([8:59](https://www.youtube.com/watch?v=kOCiyVql0go&t=539s)). On the Fabric side
you need a workspace with an open mirroring database, which gives you the SQL endpoint on
the synchronized tables (they are Delta Parquet files, not SQL tables,
[4:36](https://www.youtube.com/watch?v=kOCiyVql0go&t=276s)). Monitoring is done through two
logs in Business Central and everything is also available as APIs
([7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=427s),
[8:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=499s)). The video says nothing about
Fabric capacity or licensing, and none of the Fabric features has a match in the documented
features baseline (they are in the "shown but not documented" list), so an agent should
flag that the docs do not yet back this up.

## Observations

- All three answers were possible within the three-read budget of `AGENTS.md`; the Fabric
  question needed the transcript for exact wording, which is what the fourth step is for.
- The "the video does not say" case (question 2) is where the data layer pays off: the
  status is GA by rule but marked `implied`, the docs status sits next to it, and the gap
  analysis lists agreement and disagreement instead of guessing.
