# Loopstudios Landing Page - React.js webpage - Frontend Mentor Challenge

This project solution is single paged react.js webpage, that serves to display aesthetic content to the user and give appealing interactive features as the user navigates through the page, mainly by implementing: The parallax layout effect, Interactive transitions, Responsive web design and aethetic fonts, images and layout.

Its a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Build process](#build-process)
  - [Built with](#built-with)
  - [Learned content](#learned-content)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Getting Started

clone the repo to your machine and run:

```npm
npm run dev
```

or

```
yarn dev
```

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/active-states.jpg)

### Links

- Solution URL: [GitHub](https://github.com/Jaweki/parallax-effect-web-design)
- Live Site URL: [Deployed on Vercel](https://parallax-effect-web-design.vercel.app/)

## Build process

### Built with

- Semantic HTML5 markup
- CSS custom properties - to create scaling interaction
- Flexbox
- CSS Grid - at the creations section
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com) - CSS Framework

### Learned Content

Once on the landing page, and scrolling down, its observable that the background image in the hero section, scrolls up slower than the foreground, while the hero text and header images, scrollat the same pace as the foreground. This effect is Known as the Parallax layout effect.

Parallax effect can be applied to multiple elements and with varing rate(speed); for the positions of an element to change, it can be configured individually relative to the pageYOffset or as is known in modern development, the scrollY, for each element.

This and more techniques like image or UI card scalling, change in background on hover, appearance of text on hover, and more, make the webpage interactive for the user.

Parallax effect, can be implemented in react apps using developer libraries like [react spring]() and more, or can be implemented directly with html and JS code. Here's an example:

```html
<main id="hero">Content Here</main>
```

```js
const heroElement = document.getElementById("hero");

window.addEventListener("scroll", function () {
  const offsetY = window.scrollY;

  // causes hero element to scroll up slower
  heroElement.styles.Top = offsetY * 0.8 + "px";
});
```

```css
#hero {
  position: absolute;
  width: 100vw;
  height: 90vh;
  background: linear-gradient(to bottom, black, green, blue);
  display: flex;
  justify-content: center;
  align-items: center;
}
```

With such code and having the main being contained in a parent folder with css position relative and while the main container and another foreground container be child containers, on scrolling the webpage, It's noticable that the main section with a linear gradient scrolls slower than the foreground.

### Continued development

As of this point this project is at a development milestone; and can be used or intergrated to other existing react pages. Also Notice it uses Tailwind CSS. However, if there more ideas of how it can be made better, send an email and we'll take a look.

## Author

- Website - [Jack Weru Kioni](https://portfolio.jaweki.com)
- Frontend Mentor - [@Jaweki](https://www.frontendmentor.io/profile/Jaweki)
- Twitter - [@JackKioni](https://www.twitter.com/JackKioni)
- LinkedIn - [Jack Weru Kioni](https://linkedin.com/in/jaweki-dekut)

## Acknowledgements

This task was done with co-operation in a pair programming session with [Terri Tse](https://github.com/hiulam1). Pair Programming session organized by chingu.io and This project challenge guided and design resources provided by Frontend Mentor.

Pair programming session was prepared by [Chingu](https://www.chingu.io/) a web developers forum, that helps in boost developer growth.
Chingu organizes weekly planned pair programming session which developer enroll on weekly basis, and Voyagers which developers join in teams to do a much complex tasks.
Chingu is free to Join and participate, and has some premium perks it offers, which are quite affordable. [see their website for more...](https://www.chingu.io/)

The challenge undertaken in this Repo project, was initially provided by [Frontend Mentor](https://www.frontendmentor.io). Frontend mentor provides chllenges at different developer levels from junior to intermidiate to advanced; and of course, there is free and premium versions of the challenges, with premium versions offering figma sketches. For free versions only design templates are given as snapshots.

# More Resources

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
