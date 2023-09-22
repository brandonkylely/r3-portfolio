# React-Three Fiber Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Site Link 💡

https://brandonkylely.github.io/r3-portfolio/

![Brandon's Portfolio](/public/r3-portfolio.jpg)

## Table of Contents

[About](#about)

[Usage](#usage)

[Technologies Used](#technologies-used)

[Credits](#credits)

## About

This portfolio is inspired by Bruno Simon's R3F portfolio from Threejs Journey. While the original portfolio concept showcased some cool concepts, it was rather simple in design and I wanted to expand upon some of these ideas. For example, the original concept used an iframe to display a separate HTML/CSS page, but I chose to overlay the pages in React to gain more control over reacting to user input, such as changing the screen's reflection as the user switches tabs.

I also wanted to showcase the fun of using a 3d space while also trying to maintain accessibility. I created the laptop opening animation by playing around with the scene graph and then using React hooks to set up rotation along an axis. It was a really fun feature to implement, and from a design aspect, I really enjoyed having a subtle, yet theatrical introduction to my portfolio.

I believe that Three.js is a powerful frontend tool, and if used correctly, it can be very effective at grabbing a user's attention. Working with WebGL poses it's own unique challenges, such as camera-relative transformations, animation loops, and dreaded performance issues. However, I believe that it's a worthwhile technology to learn due to the novelty it can provide to web applications and simply the enjoyment of learning it!

### Usage

Install dependencies with:

```npm i```

Use ```npm run dev``` to run your application locally based on source code.

Use ```npm run build``` to bundle your files with Vite. 

Use ```npm run preview``` to run your application locally based on the distribution code.

Use ```npm run deploy``` to deploy your application on Github Pages.

## Technologies Used

React, React-Three Fiber, React-Three Drei, Node, Express, Vite, TailwindCSS

## Credits

[Macbook](https://market.pmnd.rs/model/macbook) by [sriniwasjha](https://blendswap.com/blend/25911) at [PMNDRS Market](https://market.pmnd.rs/)

[iPhone X](https://market.pmnd.rs/model/iphone-x) by [sriniwasjha](https://blendswap.com/blend/25911) at [PMNDRS Market](https://market.pmnd.rs/)

[Bruno Simon's Three.js Web Course](https://threejs-journey.com/)
