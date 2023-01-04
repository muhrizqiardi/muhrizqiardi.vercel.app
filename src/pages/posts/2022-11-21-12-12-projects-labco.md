---
layout: ../../layouts/PostLayout.astro
title: "Project: LABCO"
author: "Muhammad Rizqi Ardiansyah"
date: "2022-11-21T12:12:12"
excerpt: "A lab management system made for final project in a Software Engineering class with my team. The app was made using Next.js framework, both the frontend and backend. Used TailwindCSS for the styling, and MongoDB for the non-relational database."
coverImageSrc: /assets/blog/projects-labco/cover.png
slug: 2022-11-21-12-12-projects-labco
---

Website: <https://labco.vercel.app>

Source Code: <https://github.com/muhrizqiardi/labco>

## About LABCO

LABCO is an application for managing a laboratorium. It's target user are laboratorium assistants, or anybody associated with a laboratorium.

I made this project for a final project in Software Engineering class. In that class, I learned how to design a piece of software from the ground up. From gathering a requirements, creating a software requirement specifications document (SRS), designing a UI wireframe, to actually implementing the app.

## Features

### Guest book

![Guest book page](/assets/blog/projects-labco/1.png)

This app has a guest book features, where a guest can write their name and activities done by the guest.

### Schedule

![Schedule](/assets/blog/projects-labco/2.png)

In this app, an admin can set schedule for activities and events in the laboratorium. Guest user of this website can also see the schedule.

### News and information center

![News and information page](/assets/blog/projects-labco/3.png)

In this app, an admin can also write and publish a news and information, and it will be visible to all visitor of the website.

### Administrator dashboard

![Administrator dashboard page](/assets/blog/projects-labco/4.png)

In this page, administrator are given an overview of all aspect of the app, like guest book, inventory, news and information, and agenda.

### Inventory

![Inventory page](/assets/blog/projects-labco/5.png)

In this page, laboratorium assistant can manage and track inventory of the laboratorium.

## Tech Stack

For this app to work, this app uses many technologies. Here are the tech used below.

### Next.js

This app uses Next.js framework. Why? Because, in my opinion, it's the most feature packed React framework yet. Out of the box, Next.js have features such as file-system based routing--so we don't have to install React routing library, API routes, and many more. By the way, the backend of this app also uses Next.js' API routes.

### TailwindCSS

For styling, we went with TailwindCSS and uses components from [Flowbite](https://flowbite.com/). The reason we decided to use TailwindCSS is because we didn't really want to be "stuck" within the limitation of many UI framework (such as Bootstrap, ChakraUI, etc). Because TailwindCSS only provide a utility classes out-of-the-box, we didn't really have any limitation. TailwindCSS also saves us time because we don't really have to write any CSS file at all!

### MongoDB

For the database, we uses non-relational database called MongoDB. We didn't really have any other reason to use this other than to save time. Because with MongoDB, the data isn't required to be constrained within specific schema (like in other RDBMS like MySQL, PostgreSQL, etc.), and as a result, we were able to decide how our data is being put inside the database as the app develops.

We also uses MongoDB Atlas to host our database.

### Vercel

To host our application, we decided to use Vercel, because of the fantastic UX and how easy it is to use. _And it's free :p._

## A Room for Improvement

We admit, this app isn't perfect. There is still a lot to improve. But, we did what we can to make it into the deadline of the project :D
