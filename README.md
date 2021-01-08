# Ghibli Recommend
[![Netlify Status](https://api.netlify.com/api/v1/badges/b792bc04-5eae-4f39-bfc8-31e7da5592ad/deploy-status)](https://app.netlify.com/sites/ghibli-recommend/deploys)

🎬 **Ghibli Recommend** is a project I did to practice using API, Javascript, and CSS styling.

The app generates a random Ghibli film recommendation at the click of a button.✨ I recommend you use it if you want to watch a Ghibli animated film but don't know where to start.

This is written in vanilla HTML, CSS, and JS.

I used [Studio Ghibli API](https://ghibliapi.herokuapp.com/) to get the data for my project.

### What I learned from this project

1. **Posters**: Unfortunately, the API doesn't return film poster images so I handled them manually, which was possible because the total number of films was only 20. I handled them using switch cases in Javascript.

2. **Ease**: For the sliding animations in CSS, I had difficulty making smooth animations with `linear`. Discovering `ease` "eased" my life. I no longer had to modify so many points in the timeline.

3. **Repaint**: I didn't know this advanced JS concept yet but my brother (a web developer) helped solve this. The animations were only applied to the elements once. If I clicked the button again, the animations no longer happened because the animation class was already applied to the element. Therefore the class needed to be removed but it wasn't possible without the delay/ repaint/ async concept, which I will need to study more about later.

4. **Animation Improvements**: I had a bug where the film title would appear before the animation even began, which made the animation seem glitchy. To fix this, I applied `visibility: hidden` to the original class of the element and `visibility: visible` to the animation class so that it only becomes visible once the animation starts. I also used increasing `opacity` to improve the sliding effect. This is better than using `overflow: hidden;` in the animation wrapper which made the element look like it was coming out of a solid line.

5. **Unique Random**: Sometimes, the `Math.random()` generates a random number that is the same as the previous number. This causes the webpage to not change when the button is clicked. I wrote a recursive function called `uniqueRandom()` to make sure the same number is not produced two times in a row.

6. **Netlify**: I learned how to auto deploy from Github using Netlify. I made the mistake of making the `build` script in package.json `parcel src/index.html` instead of `parcel build src/index.html`. The former deploys on a local port for development purposes while the latter deploys for production. I also learned how to add dependencies and scripts in package.json. Note: parcel is a devDependency because it's needed only in development and not for the user.
