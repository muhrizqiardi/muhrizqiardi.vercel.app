---
layout: ../../layouts/PostLayout.astro
title: "Project: Journal App"
date: 2023-01-09T11:16:12.455Z
author: "Muhammad Rizqi Ardiansyah"
excerpt: "A web application that allows users to keep a journal and track their mood. It also has a feature that shows monthly or yearly statistics of the user’s mood. It was built using TypeScript, Next.js 13 with Server Components, Tailwind CSS, and built on top of Supabase’s PostgreSQL instance. "
coverImageSrc: "/assets/projects/project-journal-app-thumbnail.png"
slug: "project-journal-app"
draft: true
---

## Links

- Source code — <https://github.com/muhrizqiardi/journal-app>
- Try it out — <https://journal-app-lilac.vercel.app>

## What is the motivation behind the making of this app?

Journaling has always been a thing that I wanted to do. With journaling, I can write an entry and the entry will be able to be used as a reflection in future. You can look at an entry and ask yourself, "what happened that day, how much has things changed compared to today, are things becoming better, just the same, or actually becoming worse". It's kinda like a time machine, actually.

But, I'll admit I am kinda nitpicky, and I kinda have a strict "requirements" so that I can comfortably start journaling. Those "requirements" are:

- being able to _quickly_ capture any moment;
- being able to retrieve the "raw" data (in form of .csv file or similar); and
- being able to securely store the entries.

So, I started looking for an option. Storing entry in form of a handwriting is out of the question, because I don't think I can securely store my journal (unless if I put it inside a vault, maybe, but that's inconvinient, of course) and I gotta be honest, I kinda hate handwriting and much prefer typing on keyboard.

So, the only option is digital journal. I look around for an app that satisfies the requirements above, but can't find any. 

That's when I start thinking--what if I made my own? I mean, I have the skill to make one, what else is stopping me? None. 

So I started making one. 

## Development of Journal App

Obviously, time is money, and I want to be able to develop the app with the fewest time spent possible. So I chose to use the framework that have most feature built in to it, and that is Next.js. Being a React metaframework, Next.js supply the tools needed for developer to build a web application, especially routing, API routes, etc. 

For the styling, I used Tailwind CSS alongside with Daisy UI. Wow, it's such a time saver. I can not imagine writing CSS files after I start using Tailwind CSS. It saves you time by not having to write and maintain CSS files. And with Daisy UI saves my time even more, by providing components such as 