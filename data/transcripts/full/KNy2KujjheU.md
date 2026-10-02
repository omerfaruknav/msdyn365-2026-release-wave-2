---
id: KNy2KujjheU
title: "What's new: Database Export Enhancements"
wave: 2026w2
url: https://www.youtube.com/watch?v=KNy2KujjheU
duration_seconds: 243
kind: captions
language: en
word_count: 620
segment_count: 18
note: YouTube auto-captions, cleaned by pipeline step 01. Expect transcription errors. Each paragraph links to the second it starts.
---

# What's new: Database Export Enhancements

[0:06](https://www.youtube.com/watch?v=KNy2KujjheU&t=6s) Hi, I'm Ehor Hanzuk. I'm a senior software engineer on the business central team. And in this presentation, I would like to tell you about the improvements to database expert functionality we've delivered in this release. Uh the first one is reliability. Experts are now in a much better place. And the second one is that experts are not tucked away in their own page anymore. Quick bit of context first though in case you haven't used this. A database export gives you the whole environment database as a backpack file in your own Azure storage account. People use it for audits, migrations, or just to get the data into their own tooling.

[0:45](https://www.youtube.com/watch?v=KNy2KujjheU&t=45s) It's not something you do every day, but when you need it, you really need it. Uh so two headlines this time. Reliability. Fewer than 1% of exports are failing today. and visibility. Every expert turns up on the operations page right right next to your other environment operations such as renames, updates, and copies. Let's start with reliability because that's the one you'll feel first. Uh fewer than 1% of database exports are failing today and in many weeks we see no failures at all.

[1:20](https://www.youtube.com/watch?v=KNy2KujjheU&t=80s) That also means that big environments can be exported reliably. To achieve this, we went through and eliminate and eliminated all of the most common failures one by one by implementing improvements across the whole expert pipeline. The second change is about visibility. Experts used to be a special case. They were shown on their own page separate from all the other environment operations. Uh if an expert was running, you could not easily check um how far along it was and if it failed. From this release, an export is an environment operation like any other.

[1:55](https://www.youtube.com/watch?v=KNy2KujjheU&t=115s) Once an expert starts, you can see it on the operations page with a status, start and end time, uh who triggered it, and if it fails, the error message. This is what it looks like in the admin center. Exports it in the same list as every other operation. So the filters, the sorting, and the details flyyou you already know work in the same way. Uh let me show you in a demo. So here I would open one of my environments. As you can see, export database is now a single button. It used to be a dropdown that had the export history option for the page we now removed.

[2:32](https://www.youtube.com/watch?v=KNy2KujjheU&t=152s) When I click on the button, the mostly familiar flyyou opens with the same fields as usual, but also with some additional information like this text saying you can track progress and results of an of an expert of the operation on the operation page. Now I will paste an SAS URI and trigger the expert. The usual message appears warning me that the expert may take a while a while to finish. I'll close it and navigate to the operations page where you can see I've had a few experts in the past and completed

[3:03](https://www.youtube.com/watch?v=KNy2KujjheU&t=183s) uh one completed in one field as well as the one I have triggered just now with running status. A few practical notes. Firstly, the database expert history page is retiring. everything it used to show and some extra uh information will now be shown on the operations page. Secondly, if you automate against the admin center API, the expert history endpoint is deprecated. It keeps working on API versions 2.29 and earlier, but it is not carried forward to newer versions. So if you want to um keep your automations

[3:40](https://www.youtube.com/watch?v=KNy2KujjheU&t=220s) for checking the database history, you should move them to use the environment operations API. And uh thank you for watching. That is all.
