# Playwright Guide

## Installation 
* After node is installed, run this command to install the browsers to make sure you have them. - `npx playwright install`: Install browsers (Chromium, Firefox, WebKit) supported by Playwright.  You don't need to install it in a project like their direction say, since I already have it installed in the assignment.  If you wanted to setup your own project you need to use these instructions [here](https://playwright.dev/docs/intro)

* This is a helpful video to watch because Playwright lets you view the site in the browser and records a video of the project running, it lets you see the output from the dev console too, its pretty slick. - [here](https://playwright.dev/docs/test-ui-mode)

* This video explainns how to make your own tests usig the browser based action recorder - [here](https://playwright.dev/docs/codegen-intro)

* Trace Viewer - Super helpful debuging tool - [here](https://playwright.dev/docs/trace-viewer-intro)


## Introduction to Playwright

Playwright is an open-source Node.js library to automate Chromium, Firefox and WebKit with a single API. Developed by Microsoft, Playwright enables developers to control a browser with code, automate web application testing and perform actions like click, fill, navigate, etc.

### History of Playwright

Playwright was introduced by Microsoft in January 2020. It was developed as a solution to the challenges associated with single browser automation tools. Since its release, Playwright has been appreciated for its fast and reliable end-to-end testing, including features like network interception and the ability to emulate mobile devices, geolocation, and more.

## Basic Information

Playwright allows testing on all modern browsers. It is also capable of automating Single Page Apps, and it provides in-depth debugging tools. You can take screenshots, trace logs, and even record videos of test runs.

### Helpful Playwright Commands

Here are some basic commands you may find helpful when getting started with Playwright:

- `npm i playwright`: Install Playwright in your Node.js project.
- `npx playwright install`: Install browsers (Chromium, Firefox, WebKit) supported by Playwright.

Please note that these commands are part of Playwright scripts and need to be run in the appropriate async function context.

## Conclusion

Playwright is a powerful tool for browser automation and end-to-end testing. It provides robust features that allow developers to simulate a wide variety of user actions and scenarios, leading to better tested and more reliable web applications. By understanding its basic commands and features, you can leverage Playwright to enhance the quality assurance processes for your web application development.
