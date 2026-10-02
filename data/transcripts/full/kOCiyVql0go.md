---
id: kOCiyVql0go
title: "Introducing: Business Central Integration with Microsoft Fabric"
wave: 2026w2
url: https://www.youtube.com/watch?v=kOCiyVql0go
duration_seconds: 613
kind: captions
language: en
word_count: 1386
segment_count: 44
note: YouTube auto-captions, cleaned by pipeline step 01. Expect transcription errors. Each paragraph links to the second it starts.
---

# Introducing: Business Central Integration with Microsoft Fabric

[0:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=7s) >> Welcome to 2026 release wave two of Business Central launch edition. This video is something completely new introducing mirroring from Business Central to Microsoft Fabric. Now, bear in mind this is coming in public preview in version 29.x, likely 9 29.1. And what is mirroring to Fabric? Well, here on this slide you can see the typical way we introduce Microsoft Fabric. It's an ecosystem of data tools such as Power BI, analytics, data factory, and then build on a foundation with Copilot,

[0:48](https://www.youtube.com/watch?v=kOCiyVql0go&t=48s) OneLake, and security and governance. And OneLake is the foundation for all data in Fabric, and this is where you now have the ability to get Business Central data synchronized live. So, let me walk you through how to set it up, uh how it looks the data looks in OneLake, the Power BI apps we ship with this, and how you can monitor the integration if you are an administrator.

[1:22](https://www.youtube.com/watch?v=kOCiyVql0go&t=82s) We try to make this as simple as 1 2 3. One, set up a mirroring database in Fabric. Two, connect to Business Central. Three, choose tables and companies, click go, and that's it. And I kid you not, it is really that simple. Step one, where should data be synchronized to? You need to set up a mirroring database in Microsoft Fabric. Here is how it looks in the Fabric UI. You say new database, new mirror database. You You to give that a name. And then it's provisioning.

[2:00](https://www.youtube.com/watch?v=kOCiyVql0go&t=120s) And once it's done, you need to copy the connection strings from Fabric to step number two, which is tell Business Central where to copy the data. That happens in the new app for Microsoft Fabric integration or export. And here on the connection setup, you need to plug in those details. Uh where which workspace and which uh open mirroring database you have set up in step one. Once you have done that, you need to go to the Fabric menu and choose the connect to Fabric uh action here.

[2:42](https://www.youtube.com/watch?v=kOCiyVql0go&t=162s) Now, I did it already. The connect to Fabric will put our infrastructure in place, so we are ready to copy data. You have also a test connection action, and there you can test if if you set it up correctly, so that Business Central can write data to your Fabric environment. Final step three, you need to specify what data you want to have synchronized. And that happens also in our app under configuration. You have two choices, or you need to specify two things. Which tables and which companies. So, on the table

[3:21](https://www.youtube.com/watch?v=kOCiyVql0go&t=201s) menu here, you specify in this case, a number of tables. And then you need to specify which companies. You can choose just one or multiple companies. We'll just choose Cronus USA here. And uh that's was how you set it up in the UI. You can also use configuration packages, especially if you work with, say, the standard Power BI apps that we ship. We have a list of tables that that needs to be synchronized for those apps to work. If you have ISV solutions or other things where that solution requires certain tables to be synchronized, they can specify a configuration package.

[4:04](https://www.youtube.com/watch?v=kOCiyVql0go&t=244s) You import it here. Um and that sets up uh the tables needed to synchronize. Then, you just need one more thing. Click start synchronization. And that's it. As simple as 1 2 3. Now, what How does this synchronize data? How does it look in OneLake in Fabric? So, um let's dive into that Fabric platform. This is the mirror database.

[4:36](https://www.youtube.com/watch?v=kOCiyVql0go&t=276s) Basically, you have those tables as they look as seen from AL are now synchronized and created in the open mirroring database. And uh with Fabric, you get SQL endpoint on these tables. They're actually not SQL tables, they're Delta Parquet files, but uh that abstraction has been like uh that has been abstracted away in the SQL endpoint, and you can just write SQL queries against this just as if it was a normal SQL database. All right. But, um we thought, let's make sure that we we give you data in Fabric,

[5:15](https://www.youtube.com/watch?v=kOCiyVql0go&t=315s) but we also invested a lot in providing Microsoft providing Power BI apps on Business Central. Um those are sourcing data from APIs, but we converted them as well to to work on the Fabric backend. In two versions, they will be available uh soon either as code samples or on AppSource. Um we for each of the nine Power BI apps, there will be a single company version similar to the one you we ship and the ones that are designed to be embedded in Business Central.

[5:52](https://www.youtube.com/watch?v=kOCiyVql0go&t=352s) But we also ship multi-company versions so that the same Power BI app can show data across multiple companies. Here is an example from my Fabric workspace where I have the mirroring database and I have deployed two of the multi-company apps, one for finance, one for sales. If I open Oh, yeah. And if we just have a quick lineage view on things here, you can see from this diagram here that we have data residing in the mirror database.

[6:27](https://www.youtube.com/watch?v=kOCiyVql0go&t=387s) We have a SQL endpoint. We have the semantic model on top, which is part of the Power BI, and then the actual report. So, how does that, let's say, finance report look in a in a multi-company setting? Actually, almost the same as a single company excepts that you now have a filter on where you can filter as it I want to see data for all companies or for some companies. And then up here, you can see which companies you have filtered to. And that is multi-company reporting on Fabric with Power BI.

[7:07](https://www.youtube.com/watch?v=kOCiyVql0go&t=427s) Now, there's just one more thing until we are done. How do you monitor this integration if you are an administrator? We lock or we write two types of logs in Business Central for for this export or synchronization. An overview and details. And that data is available either in client. It also has APIs on it. Oh, yeah. And we also put it in Fabric so that if you want to monitor from Fabric point of view, you can do that. In client with Business Central under the monitoring menu, you have these two new options, synchronization overview or details. Here is example of the overview.

[7:49](https://www.youtube.com/watch?v=kOCiyVql0go&t=469s) We also have supplied um list views for all data or just if you want to dive into the errors. And for the details, I took that details page just into analysis mode here um to give you an idea of how you could write your own mini reports. We also have default views for uh all data, errors, or just if you only want to see the the synchronization details where actually some data was pushed over to Fabric.

[8:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=499s) Uh you can see it here. If APIs is a thing for you instead of using the UI, everything I showed you in the setup and in the monitoring tables are available as APIs. Um the new API overview page in Business Central, if you search for Fabric, you can see those six APIs available there. And if you want to monitor your Fabric integration from from Fabric, we also push those log files. Uh there you can see here the export summary, and here is uh the export details using the SQL endpoint in Fabric.

[8:59](https://www.youtube.com/watch?v=kOCiyVql0go&t=539s) Finally, there is of course permissions um part of this so that not everyone in your organization can set up Fabric integration. So, on the Business Central side, uh there are permission sets for activation, for administrate uh administering the the export in general, and if you just want to read the configuration, there's also a permission set for that. That's it. Just one more thing. If you want to learn more about this, there's a landing page called aka.ms/bcanalytics.

[9:35](https://www.youtube.com/watch?v=kOCiyVql0go&t=575s) If you scroll down a little bit into the TOC, the table of content here in Microsoft Learn, there's an article about Microsoft Fabric and Business Central where you can learn much more about this new fantastic synchronization and integration. That's it. I hope you have a great launch edition with lots of learning sessions, uh but this one is over. Have a great day. Bye.
