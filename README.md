# Harsh Kumar's Personal Portfolio Website

## Version 4 - June 2026

Claude Code Supremacy! In the age of AI why bother with a fancy hand made React project. Reverted back to a barebones HTML project all powered by Claude. This page brings in what I look at daily, the terminal. Ubuntu was my first Linux distro back in mid 2010's, and I have used the ubuntu terminal colors ever since, even when working primarily on Macs for the rest of my life.

## Version 3 - October 2020

This version of my portfolio is the first documented version of this Portfolio. I moved this project from being a basic HTML / CSS site to a full React powered app.
This was done to:
  - Showcase my skills in React
  - Create (somewhat) cleaner code 
  - Create components that could be reused and extended for future additions to this portfolio
  - `TODO`: Create a templatized version of this portfolio that will take in `JSON` files and easily generate a new portfolio
  
I worked on this project early October 2020 as part of my submission for [Code With Friends: Fall 2020](https://codewithfriends.io/events/cwf-fall-2020/).

This new portfolio design was partially inspired by [Brittany Chiang](https://github.com/bchiang7)s [personal website](https://brittanychiang.com/).

### Cloning / Forking this project

__*Plaigirism is bad.*__ Feel free to clone / fork this project and edit it for your own needs. I only request that you attribute me in your source code and README, and link back to my site, [hkumar.me](https://www.hkumar.me)

### IMPORTANT
This project uses a [Formspree](https://formspree.io) form. You can find the script related to this in a `script` tag inside `/public/index.html`. Make sure to either
  a) Remove this script
  b) Put in your own Formspree action url
  
If you do not, any responses on the form will come to me, not to you.

### Setup & Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). As such, installation should be pretty straighforward. 

Assuming you are using Node `v10+`
In the root folder, run
```
npm install
```

For development, run
```
npm start
```
Which will start your development server on localhost:3000. The site should have hot reloading working out of the box.

To build, run
```
npm run build
```
which will build this to the `/build` folder.

### Deploying to Github Pages
If you will be hosting this on github pages, this project comes with the `gh-pages` package installed that should deploy to github pages for you.
If you haven't already, enable Github pages in your repo settings. 

If you have a custom domain for your site, you do not need to make any changes.

If you do not have a custom domain yet, you will need to edit `package.json` and add a `homepage` key, with the value being
```
// package.json
{
  ....
  "homepage": "http://{github-username}.github.io/{repo-name}"
}

```

To deploy, simply run
```
npm run deploy
```

This will run the `build` command, and push the `build` folder to a `gh-pages` branch in your remote repository. It should also automatically update your repo settings to use the `gh-pages` branch as your deployed branch. If it doesn't make sure to update that in your repo settings.
