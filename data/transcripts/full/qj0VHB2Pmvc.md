---
id: qj0VHB2Pmvc
title: "What's new: Enhanced Financial Reporting"
wave: 2026w2
url: https://www.youtube.com/watch?v=qj0VHB2Pmvc
duration_seconds: 565
kind: captions
language: en
word_count: 1256
segment_count: 43
note: YouTube auto-captions, cleaned by pipeline step 01. Expect transcription errors. Each paragraph links to the second it starts.
---

# What's new: Enhanced Financial Reporting

[0:06](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=6s) Welcome to 2026 release wave two launch edition of our enhanced financial reporting. We have three types of features to show you. Features for authors, for users, and for administrators. So, let's get started on the first, which is for the authors. Um basically, we have a bunch of what we call quality of life features. All the little things that just makes your life easier. Things all the way from discover uncategorized accounts on the chart of account, all the way down to previewing when you are working with row and column definitions.

[0:45](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=45s) The latter is coming in a minor version of 29, but I'll show you here. Anyway. So, when you are on the chart of accounts page, and if you use account categories, which you should, in my opinion, both to make your financial reporting definitions easier, also if you're using Power BI for finance, both features use categories. Now, if you add a new GL account and you didn't categorize it, how do you know? Well, now you have an easy way. We added two new saved views or list views on chart of accounts.

[1:26](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=86s) One called at uncategorized accounts. You can see that here. And another one within this new account 42. Another one is uncategorized accounts where we are also showing if you have a missing subcategory. Because with categorization, you can categorize and have subcategories. So, hopefully this just helps you check if there was something you were missing, especially if a financial report is not really showing the data you expected it to because you have on card authorized accounts.

[2:03](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=123s) Another thing for the controller or for the author is how do you track if a given GL account is being used in financial report definitions? So the where used lists as you can see here the action that has been on the account card for ages now include data from which reports would include this account. So if we click this, we can see that this particular account is being used in these two row definitions for financial reporting. Switching to row definitions in financial reporting

[2:41](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=161s) if you use which you probably do use totaling lines, then if you have complicated formulas for the totaling how do you troubleshoot which accounts are actually uh covered by that filter? Uh in an in this new version we are adding you can see here there's a new fact box where you can see for the given line which accounts this filter is including.

[3:11](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=191s) If if you take this fact box and then you can even navigate directly back to the GL account lists if you want to dive even further into these accounts. Now row definitions have um these filters but actually you can do the same on a column. So um on a here is a column definition where we have a GL account totaling um not probably not something a lot of users of financial reporting

[3:43](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=223s) use but you can do it. And because we have a totaling field here, we are also have added the same fact box showing the GL accounts. And then this is all this is all part of the major release, but in here in the fall there will be some other goodies. The first is that you can preview the so if you're working on a row or a column definition, you can set the corresponding other thing. So if you're on a row definition, you can set a default

[4:20](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=260s) column definition for testing and for a column definition you can set a default row definition for testing. And then there's going to be a test button so that you don't have to leave the row or column definition to kind of see the full report. So that's the general idea of these preview features when you work on the these definitions. But wait, there's more. There's always more. Also coming in a minor to 29 is defaulting. So if you work on a row or column definition and add the lines of the same type, then now we're defaulting to that.

[5:01](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=301s) Hopefully that makes the data entry working with definitions much easier. And we also have a a few other small things to make the experience easier. Now let's switch to user features. There's actually just one, but a big one, report packs. So what is that? Well, it's as simple as you can now run multiple reports in one go and get a single PDF. Here in Business Central, you now have a new menu action called packages.

[5:40](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=340s) If you navigate to this, you can define a package, a report package, give it a code, a description, and then start adding which reports should be part of that report package. You can even set um custom filters on on each of these wrench entries. Um and also start and end date filters because these can also be scheduled. Um and for this particular choice of uh the account category overview analysis and balance sheet, the PDF you get, as you can see here, contains of five pages,

[6:19](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=379s) account categories overview, and then followed by the capital structure, and then the balance sheet in one PDF. You can also schedule these, as I mentioned. If you go to the top here, uh the for the schedules, uh you can schedule a pack. So, the idea is that maybe each Friday for the team meeting in the finance team, there's going to be a pack of reports, and that's been scheduled, so that lands in your report inbox uh in the morning.

[6:53](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=413s) Speaking of report inbox, that's actually part of the administrator features, we have two things for you. The first is that we now uh simply set up change log on all financial report definitions, not the actual uh log tables, but everything else. And that means that your financial reporting feature is kind of auto um set up for uh for change log, which means auditing.

[7:23](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=443s) And um here's an example of change log entries, where I didn't d- do anything, uh I didn't set up anything. I I just ran uh some changes to, in this case, financial report um definition for account overview, uh category overview, and the corresponding road definition and this get locks gets locked here. You can see my my user ID Kenny on top of it and that I did that. I mentioned the report inbox as part of the scheduling. There's now an API on this as well. So that means that each of the operations you would expect

[8:06](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=486s) on the report inbox has their own API. Just filtering on the new API overview page to report inbox and you can see them here. The use cases that maybe when things are scheduled, let's say the Friday meeting, maybe you want to kick off some other automation. Maybe you want to use some AI to analyze the report output something and that is now possible with the new APIs. You can call them through MCP server, power platform or any other thing that speaks API. And that's it.

[8:45](https://www.youtube.com/watch?v=qj0VHB2Pmvc&t=525s) Just one more thing. If you want to learn more about financial reporting, take a look at this AKA link aka.ms/bcfinanceanalytics and under that landing page there is also a landing page for financial reporting. All right, that's it for now. I hope you have a great launch edition with lots of other videos to learn from. I'm done here. So goodbye from me.
