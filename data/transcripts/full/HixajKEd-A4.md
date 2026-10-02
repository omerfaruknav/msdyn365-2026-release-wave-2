---
id: HixajKEd-A4
title: "What's new: Match Production Database Configuration"
wave: 2026w2
url: https://www.youtube.com/watch?v=HixajKEd-A4
duration_seconds: 163
kind: captions
language: en
word_count: 403
segment_count: 10
note: YouTube auto-captions, cleaned by pipeline step 01. Expect transcription errors. Each paragraph links to the second it starts.
---

# What's new: Match Production Database Configuration

[0:07](https://www.youtube.com/watch?v=HixajKEd-A4&t=7s) Hi everyone and welcome to this session on matching your sandbox environment database configuration to that of your production environment. A new feature we're shipping in 2026 release wave two. With this feature administrators will be able to temporarily match the configuration of a sandbox database to the configuration of a typical production database. This means that developers and administrators using the performance tool get developing apps or running cloud migration projects can mimic the configuration of a production database in their sandbox environment to evaluate how processes would run in a typical production environment.

[0:43](https://www.youtube.com/watch?v=HixajKEd-A4&t=43s) To match the configuration of your sandbox environment database to that of a typical production environment database you'll see a new button in the admin center for your sandbox environments called match production configuration at the top here. Clicking that button opens a flyout that explains what this does and warns you that enabling this action will restart the environment meaning that any users that are connected to the environment at the time you do this will be disconnected. And also that your environment will automatically revert back to a typical sandbox configuration after 72 hours. Once you start this operation you can track it like any other operation in the admin center with the operation details telling you who did this when it started which would also give you an indication of when the environment is

[1:29](https://www.youtube.com/watch?v=HixajKEd-A4&t=89s) expected to move back to a regular sandbox configuration. As you start matching the configuration of your sandbox environment database to that of a typical production environment database there's a few things that are good to be aware of. First of all this operation is limited to three occurrences per tenant per calendar month for 72 hours at a time. Once those 72 hours end your sandbox environment automatically moves back to a typical sandbox configuration

[1:59](https://www.youtube.com/watch?v=HixajKEd-A4&t=119s) during the first environment update window after those 72 hours end. Um this operation is also supported in the admin center APIs, so for developers that are automating um their development and want to match the configuration as part of their processes, uh this can be automated. And um finally, this is only available on tenants that have a paid license type, including partners that are using the partner sandbox license. This concludes this session on matching the configuration of your sandbox environment database to that of a typical production environment. Thank you for watching.
