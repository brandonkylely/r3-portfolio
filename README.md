# React-Three Portfolio

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

📖
This portfolio is a heavily modified version of Bruno Simon's laptop portfolio from his Three.js Journey course. While the original portfolio concept showcased an iframe to display a separate static site, I chose to overlay the pages in React. This allowed me to more easily maintain my portfolio in one repository as well as have more control over reacting to user input, such as changing the screen's reflection as the user switches tabs.

I also wanted to showcase the fun of using a 3d space while also trying to maintain accessibility. I created the laptop opening animation to create this fun factor, but otherwise kept the camera focused on my portfolio and the rest of the site (Bruno Simon's laptop portfolio used a farther camera at a moderate angle to showcase the contact shadows, float bounce, and lighting, and I found myself getting dizzy when actually trying to read the page!). In earlier versions of my portfolio, I added another model and more effects, but these elements, while cool, took up more gpu processing power without really adding significant functionality. Luckily the site turned out to be pretty fast and mobile responsive, despite the scene rendering 1 million triangles!

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
