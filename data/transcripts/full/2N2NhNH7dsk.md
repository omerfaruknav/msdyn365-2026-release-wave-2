---
id: 2N2NhNH7dsk
title: "What's new in reporting: Layout Management and Report Inbox API's"
wave: 2026w2
url: https://www.youtube.com/watch?v=2N2NhNH7dsk
duration_seconds: 311
kind: captions
language: en
word_count: 689
segment_count: 22
note: YouTube auto-captions, cleaned by pipeline step 01. Expect transcription errors. Each paragraph links to the second it starts.
---

# What's new in reporting: Layout Management and Report Inbox API's

[0:07](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=7s) Welcome to the 2026 release wave two launch edition of Business Central. This session is about uh reporting, specifically layout management and report inbox APIs. This is the video one of three um and we're going to talk about layout management in general and report inbox APIs. So, um let's see what that is. So, back in the fall in the spring release in wave one of 2026, we added the ability for an layout administrator on the report layouts page to set kind of a a status of the layouts so that they could control which layouts are ready to consume and which

[0:51](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=51s) are still kind of in the making. And we that was only for user-defined uploaded layouts, but we are now extending this to app-supplied layouts including the layouts that we ship with Business Central out of the box. So, here on the report layout page, you now have a new menu called layout status where you can set a layout um kind of a life cycle starting from a draft, um pending approval,

[1:22](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=82s) approved, and retired. And there's nothing changed on the report layouts page. You can still run any layout you want from this page. So, in this case, I can run the financial report landscape even though it is um set as retired. Note that in this example, I actually set one of the Microsoft-supplied layout to retired. So, as an administrator, I can still run everything from that page, but whenever a user touches the report layouts control in the request page,

[1:59](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=119s) they can only see approved layouts there. So, this is a way for you as an administrator to control exactly which layouts are approved for use usage out there with the users. And you can still experiment as much as you want with making the the next ones available. And if there are some of the layouts that we ship in the base app from Business Central that you say, "These are not for us." you can make sure that users cannot use those layouts. Also, for any layout that is shipped from an app, whether it's a patent and extension and ISV app from AppSource or Microsoft, we have this ability for a developer to put a summary or description for a layout.

[2:41](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=161s) And you can actually override that now and kind of put a comment like, "We don't like this layout." or "This is not for us." or whatever. And you can override that developer comment so it shows up in the report layout page and and actually also the version of that for users. The second feature we are giving you as administrators is an ability to to interact or have agents or automation interact with the report inbox.

[3:16](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=196s) So, report inbox is used for anything where things are scheduled, reports that are scheduled, reports in finance or reporting that are scheduled or report packs. All of that lands in the users' report inbox. And therefore, they the users can have agents do more things with that. With Power Platform, with MTP server, with Microsoft Copilot Studio, or any other tool that speaks APIs. The new APIs are easiest to find them is to go to the new API overview page that we are also shipping here in version 29.

[3:58](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=238s) Um, search for report inbox and now you have both the API names and also the URLs if you want to try them out. That's basically it for now for this video. Just a final thing, if you want to learn more about reporting as such, uh, if you use the landing page aka.ms/bcdeveloper, scroll down to the report section and everything about reporting and layouts, uh, you can learn that there. And everything related to integrations and the new API, you find that on the landing page for integrations,

[4:35](https://www.youtube.com/watch?v=2N2NhNH7dsk&t=275s) which is aka.ms/bcintegration. And there, uh, everything related to each type of API is documented there. That's it for this video in the launch edition. I hope you will watch many of the other, especially the two others on reporting, and, uh, have a great day. Bye.
