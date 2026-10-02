---
id: mXvKs6X1DNk
title: "What's new: Cross-environment Master Data Management"
wave: 2026w2
url: https://www.youtube.com/watch?v=mXvKs6X1DNk
duration_seconds: 580
kind: captions
language: en
word_count: 1269
segment_count: 44
note: YouTube auto-captions, cleaned by pipeline step 01. Expect transcription errors. Each paragraph links to the second it starts.
---

# What's new: Cross-environment Master Data Management

[0:06](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=6s) Hi, my name is Ksenia and today I will tell you what's new in Business Central 2026 Wave 2 for the master data management. So, uh I guess lots of you already used our master data management between companies in the same environment. So, you know that we already can synchronize data between headquarter and other companies, but it happened only inside the same environment. Lots of customers has a different story and they need to use multiple environments in the same tenant. For example, per country, per brand, or in other cases.

[0:42](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=42s) In that scenario, unfortunately, before now they had no chance to synchronize data with the standard functionality, so they needed to find another way, maybe retype it manually, do some other integration, whatever. And of course, it's not comfortable and cause lots of errors. So, what is new? Now, it will be possible for subsidiaries in the same tenant, but different environments to pull data from the HQ company. And it is a fully built-in solution, so no middleware, no custom code, no extra service.

[1:21](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=81s) It's built-in. And another plus, it is completely the same UI experience, similar setup, which you already knows. Let's see a bit on the picture, so it's more visual. You can see on the left side, it is HQ and it can give an access to the subsidiaries, so they can pull data from HQ. HQ still the read-only and the main source uh of the data. Uh we can see the data will cross the environment boundary and the access will be through the Microsoft Entra ID.

[2:00](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=120s) Uh so, all subsidiaries can pull the data, and they're not every time getting all the things, but only the changes. Behind it is a technology we're using or data before web service, and also, as I mentioned, it will go with the Entra ID. So, company will need to register an app in the Microsoft Entra. Then, uh HQ admin will need to approve, give a constant in BC. So, HQ always can decide which subsidiaries are going to read and what they're going to read. So, you need to remember when you're adding tables, HQ need to give the read permissions.

[2:43](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=163s) Uh so, the subsidiary will have an access to them. Uh also, pictures and attachments will travel along with the record. The only, for now, limitation there, pictures, uh should be up to 512 KB each, no more. So, as you already understand, all the environments should be in the same tenant, but different environments are allowed. Uh same mapping, same synchronization engine. So, only the setup for the app itself,

[3:20](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=200s) uh for subsidiaries, it will be quite easy. Uh they will have a wizard where they will need to type the credentials, and credentials will keep uh kept very secure, so no one will be able just to read them in any moment. So, that's also quite good. Also, customer can decide if they want to register one app and share it between multiple subsidiaries, or if they want to register app for each. So, depends on your audit path, you can make that decision. Uh now, I want to give a word to our engineer, George.

[3:57](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=237s) He will show how it works. >> Uh hello, my name is George and I will walk you through how synchronization of data across environment works in Business Central. So, here I am in a empty company that has no customers, vendors, or other master data. Uh it's in this environment that doesn't have CD a suffix. Uh and here I have another environment. This is my headquarters or the source environment where I'm pulling data from. So, just to show you that this this is a different environment.

[4:35](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=275s) It has the CD suffix. So, let's see how would we go about doing this in the subsidiary company. Just to show you how this is set up. I have master data management set up and we have added a few more actions and one of them is cross environment set up. It opens up a wizard in which you consent to the privacy notice. And I have already entered the environment name of my headquarters and the company name uh where I will be pulling data from and the client ID and client secret of the OAuth 2 app that I registered.

[5:17](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=317s) Where is that app? That app should be registered in the same tenant. You can do it in Azure portal. And here you we will document all this, but just to show you that uh the app needs to have this API read write all application level permissions. And it should have this redirect URL. We will document all this and it should have a single single tenant sign in audience. So, um I entered the um the credentials of this app. And in the source environment, here we are in the source environment.

[5:58](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=358s) Microsoft Entra applications, the admin needs to consent this app uh and allow it to access uh the data. And crucially, when the user for this app is created, uh there will be an Entra user. Uh then the admin should assign this specific um permission set that we designed. It's off the page and it includes the the rights to execute this logic.

[6:31](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=391s) And it includes read permissions for all the default tables. As Xenia mentioned, if you add more tables than the default ones, then you need to create a new permission set and add read permissions to these tables to this Entra user in the source. So, this way the admin has control of who reads what. Let's go back in the subsidiary. So, when you set this up and enable the data synchronization,

[7:02](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=422s) the typical flow like for same environment the synchronization is to start initial synchronization. Here you see all the all the default tables that we have. And for the initial synchronization, uh you click the start all and it goes in a certain order. It It asks you whether you want to proceed. Just like for the same environment uh case, it goes in a predefined order. First, business relation table, then dimension, and so on and so on. This uh takes some time.

[7:37](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=457s) So, you can uh you can keep refreshing to see the the status. So, now we can see that initial synchronization is completed. And we can go back to our starting page and refresh it. And we can see that we have our customers here in the subsidiary. They have synchronized from the source environment. You have also vendors and all the default master data records.

[8:12](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=492s) Now, let me demonstrate how the the the changes in the source propagate to the subsidiary. Let's change a customer that is synchronized. Change its name. And after about a minute in the in the source environment, we should see the change. While we're waiting for that, I can show you that I'm in the UI for managing the the synchronization is the same as for one single environment synchronization.

[8:50](https://www.youtube.com/watch?v=mXvKs6X1DNk&t=530s) You go to synchronization tables, and let's see for the customer table, I can I can look up my synchronization log. This is the crucial page. And I can see that one modified. It's because it changed in the source. And if I refresh, I can see it got the new value that was changed in the source. So, the rescheduling of synchronization jobs and the automatic change propagation works uh seamlessly. That's it for our demo. So, you can synchronize data across environments now. Thank you for watching.
