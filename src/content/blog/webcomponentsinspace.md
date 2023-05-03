---
pubDatetime: 2023-05-04T15:22:00Z
title: Season 1 of Web Components in Space
postSlug: wc-in-space
featured: true
draft: false
tags:
  - episodes
  - season 1
description:
    All 5 episodes from the first season of Web Components in Space
---

<h2>Web Components in Space</h2>
<p>
  Web Components in Space is the first season of Ben Farrell's video series follow up to his 2019 book <a href="https://www.manning.com/books/web-components-in-action">Web Components in Action</a>.
  With Ben now back from space, the second season has been renamed to "Web Components From Space". But feel free to dive into
  the five season 1 episodes!
</p>

<ul>
<ul class="episode-list">
        <li>
            <strong>Episode 5:</strong> <a href="s01e05">Stable Diffusion...in Space!</a>
            <p>
                In this final episode in space we try out AI image generation with Stable Diffusion. Ben creates a rather silly experiment
                to use HTML image accessibility text as the prompt to create AI generated images, which are then swapped in place on a web page using a
                combination of an image replacement web component, a Node.js server, a Chrome extension, and of course, a local copy of Stable Diffusion.
            </p>
            <p>
                Before hopping over to our first website to try (SimplyRecipes.com), we sit down with Christian Cantrell, who is VP of Product at Stability.ai
                to talk about AI and creativity.
            </p>
        </li>
        <li>
            <strong>Episode 4:</strong> <a href="s01e04">Web Music and Component Style...in Space!</a>
            <p>
                In this episode we explore different ways of playing music, whether its through the Web MIDI API, Tone.js, and even using pitch
                detection using the Web Audio API. We don't build the music practice application shown, but we explore these audio concepts that the
                web app uses by making small demos.
            </p>
            <p>
                We finish off these demos by making them into Lit Reactive controllers, but also turn to our guest Cassondra Roberts for advice
                to style the application.
            </p>
        </li>
        <li>
            <strong>Episode 3:</strong> <a href="s01e03">Pose Capture with Tensorflow...in Space!</a>
            <p>
                In this episode we dive into pose capture and pose visualization on a video or webcam using Tensorflow.js.
                Luckily we are joined by developer advocate Jason Mayes from the Tensorflow team to get us up to speed.
            </p>
            <p>
                Unfortunately, some of the TFJS libraries can't be pulled in as normal ES modules, and
                this causes our "Web Compon-o-tron" to break down. So, we're forced to make the pose capture components ourselves.
            </p>
            <p>
                This is fine, though, because there are some good problems that come up when building a complicated component like this one.
                We find that in order to do video playback we need to tweak our web-dev-server configuration a bit, we learn about subclassing events,
                and explore slots as a way to add non-essential or optional UI. Also, without really any UI in our main components, we avoid helper
                libraries like Lit and go completely vanilla with our Web Components.
            </p>
            <p>
                Lastly, we attempt to use Rollup, not as a final build step, but to bundle the Tensorflow packages that crashed the "Web Compon-o-tron" and use them as trouble-free ES modules in
                our development environment.
                <ul>
                    <li><a href="https://www.npmjs.com/package/pose-capture" target="_blank">Pose Capture on NPM</a></li>
                    <li><a href="https://github.com/Web-Components-in-Space/S01E03-PoseTracking" target="_blank">Demo App</a></li>
                </ul>
            </p>
        </li>
        <li>
            <strong>Episode 2:</strong> <a href="s01e02">Real-world issues and Doodles...in Space!</a>
            <p>
                In Episode 2 we are joined by Merl, the author of Shader Doodle. Shader Doodle is a fantastic Web Component
                that lets you author WebGL based computer graphics without all the headache of setting up your canvas,
                and managing lots of obscure WebGL program code. You simply focus on a fragment, and maybe a vertex shader
                for the more complex scenes.
            </p>
            <p>
                Again, we'll be creating another entire application from scratch with Lit, Web Dev Server, and Adobe's
                Spectrum Web Components. This time however, we'll be flexing Web Dev Server's muscles a bit. The application
                in episode one may have a been a bit too perfect. Our episode two application will explore some more
                complicated setup as well be using Typescript, using (or pretending to use) real CSS files - no more CSS in JS.
                We'll also have some unexpected hiccups with some libraries we use some extra Web Dev Server features to
                step in and save the day.
            </p>
            <p>
                Also, can AI have hurt feelings? Our "Web Compon-o-tron" might be a tad upset because Merl's Shader Doodle
                is already a Web Component, and we won't be requesting it's services this episode.
            </p>
        </li>
        <li>
            <strong>Episode 1:</strong> <a href="s01e01">Halftones...in Space!</a>
            <p>
                Dmitry Baranovskiy joins us for our very first episode. We'll talk about his method of creating
                halftone patterns, as well as his other experiments on ObservableHQ. We'll also go big with this first
                episode and create an entire application using Lit, Web Dev Server, and Adobe's Spectrum Web Components.
            </p>
            <p>
                Thanks to our AI powered friend, the "Web Compon-o-tron", Dmitry's halftone experiments have been turned 
                into a real Web Component we can use to create and render halftone patterns using a sample set of images, 
                ones we upload, or even your live webcam stream!
            </p>
        </li>
</ul>

<h2>Why Space?</h2>
<p>
    In summer of 2020, a billionaire playboy launched a rocket to space with a new set of web standards at the helm.
    In the weeks and months after their return, Web Components spread to many large and small organizations here on earth.
</p>

<p>
    Self dubbed "Web Componaut" Ben Farrell saw this happening and feared future invasions. Did Web Components change somehow
    in the depths of space to make ordinary buttons, accordions, hamburger menus, and other traditional UI prime for takeover by
    this new standard? Did something in space cause these new standards to evolve?
</p>

<p>
    Ben followed the trend of the fortunate Bay Area tech worker in the pandemic. He picked a remote location and left the city.
    Unlike others, this new "work from home" location wouldn't be on Earth, but orbiting the earth in a DIY spacelab built from
    abandoned La Croix fridges scavenged from the halls of his employer.
</p>
<p>
    WCIS is a series of experiments combining Web Components with experimental, bleeding edge, or just fun web technology.
    These experiments are done orbiting earth to ensure the safety of our planet when future unexpected incidents occur and to
    try and replicate whatever happened to UI components on the original mission to space.
</p>
<p>
    In each episode, we'll explore a new technology, talk with it's creator, and then build an app of our own with that technology.
    Each episode is split into multiple parts over a YouTube playlist. The experts might want to skip the lab where the app is being built, but at the very
    least, the interviews should be fantastic for anyone!
</p>
