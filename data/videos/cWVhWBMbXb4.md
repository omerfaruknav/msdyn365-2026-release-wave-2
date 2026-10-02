---
id: cWVhWBMbXb4
title: "What's new in Expense Agent: Improved Mileage Handling"
wave: 2026w2
url: https://www.youtube.com/watch?v=cWVhWBMbXb4
thumbnail: https://i.ytimg.com/vi/cWVhWBMbXb4/hqdefault.jpg
duration_seconds: 291
area: expense-agent
audience:
  - consultant
  - admin
  - end-user
presenters: []
features:
  - mileage-rates-periods
  - mileage-amount-calculation
  - mileage-rates-vehicle-type
  - mileage-standard-rate
  - mileage-rate-currency
status_mentions:
  unclear: 5
chapters: 5
quotes: 8
disclaimers: 0
docs_matched: 4
transcript: data/transcripts/full/cWVhWBMbXb4.md
---

# What's new in Expense Agent: Improved Mileage Handling

> This video covers changes to mileage handling in Expense Agent. Mileage rates can now have start and end dates, so a new rate for the next period can be set up ahead of time. Rates can also be set per vehicle type, such as car, truck, SUV or motorcycle. The presenter shows the setup in Expense Agent setup and then creates a mileage expense, where the user picks a vehicle type and the amount is calculated from the date. The simple standard rate model still works for companies that don't need this.

Watch: https://www.youtube.com/watch?v=cWVhWBMbXb4 (4:51). Area: Expense Agent. Audience: consultant, admin, end-user. Presenters as heard: not introduced by name.

## Chapters

- [0:00](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=0s) Intro and the old single-rate limitation (1 min)
- [0:38](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=38s) What is new: date ranges and vehicle types (1 min)
- [1:48](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=108s) Demo: mileage rate setup (1 min)
- [3:07](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=187s) Demo: creating a mileage expense (1 min)
- [4:09](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=249s) Wrap-up (1 min)

## Features in this video

- [Mileage rates per period](../features/mileage-rates-periods.md) - status not stated - [0:18 to 1:21](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=18s), demo [2:14 to 2:56](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=134s) - Mileage allowance can have start and end dates for several periods.
- [Mileage rates per vehicle type](../features/mileage-rates-vehicle-type.md) - status not stated - [1:21 to 1:48](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=81s), demo [2:41 to 4:09](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=161s) - Mileage rates can be set per vehicle type from a new table, combined with periods.
- [Standard mileage rate](../features/mileage-standard-rate.md) - status not stated - [1:48 to 2:28](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=108s), demo [2:04 to 2:14](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=124s) - The standard rate setup still works.
- [Currency code on mileage rates](../features/mileage-rate-currency.md) - status not stated - [2:41 to 3:07](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=161s), demo [2:41 to 3:07](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=161s) - Mileage rates have an optional currency code field.
- [Automatic mileage amount calculation](../features/mileage-amount-calculation.md) - status not stated - [3:07 to 4:32](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=187s), demo [3:17 to 4:22](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=197s) - The amount is filled from the date and vehicle type when creating a mileage expense.

## Quotes

- [0:53](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=53s) "so you do not need to change in the moment when you have new amount" - States the benefit of date ranges: the next period's rate can be entered ahead of time.
- [1:10](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=70s) "If you don't need, you can skip only one simple model, so you are not supposed to use this." - The new setup is optional, and the simple single-rate model stays available.
- [1:36](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=96s) "Okay, in vehicle type situation you need to choose which one you are using." - With vehicle types configured, the user has an extra step when entering mileage.
- [2:04](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=124s) "So, if you put standard rate of mileage, system will not look into do this new complicated and more complex mileage setup." - Design decision: a filled-in standard rate overrides the new mileage rate setup.
- [2:56](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=176s) "most of cases for mileage companies are using local currency, so you do not need to add local currency here." - Explains that the currency code on mileage rates is usually left empty.
- [3:31](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=211s) "you will see I didn't get calculated amount even if I have 1.2 dollars" - Shows that no amount is calculated until a vehicle type is chosen, even when a standard rate exists.
- [3:56](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=236s) "Because this is 2016 year. And if I choose truck, you will see this is calculated 2.5 per miles." - Shows the rate being picked by date and vehicle type. The year is said as 2016 although the setup was described as 2026, probably a slip.
- [4:22](https://www.youtube.com/watch?v=cWVhWBMbXb4&t=262s) "If you do not have different vehicle types, you keep it simple." - Summarises the design: without vehicle types the system picks the amount from the date alone.

## Documented features matched

- Mileage rates per period -> [Add date ranges and vehicle types in your mileage calculation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#add-date-ranges-and-vehicle-types-in-your-mileage-calculation) (high confidence, docs say preview)
- Automatic mileage amount calculation -> [Add date ranges and vehicle types in your mileage calculation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#add-date-ranges-and-vehicle-types-in-your-mileage-calculation) (high confidence, docs say preview)
- Mileage rates per vehicle type -> [Add date ranges and vehicle types in your mileage calculation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#add-date-ranges-and-vehicle-types-in-your-mileage-calculation) (high confidence, docs say preview)
- Standard mileage rate -> [Add date ranges and vehicle types in your mileage calculation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details#add-date-ranges-and-vehicle-types-in-your-mileage-calculation) (medium confidence, docs say preview)

## Transcript

Cleaned transcript with timestamps: [data/transcripts/full/cWVhWBMbXb4.md](../transcripts/full/cWVhWBMbXb4.md) (JSON segments: [cWVhWBMbXb4.json](../transcripts/full/cWVhWBMbXb4.json)).

_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: https://i.ytimg.com/vi/cWVhWBMbXb4/hqdefault.jpg_
