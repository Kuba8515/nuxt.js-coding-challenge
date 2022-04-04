# nuxt.js-coding-challenge

## My approach

As this was my first try using NuxtJS, I started going through the Documentation first. I realized there are quite a few similarities between nuxt and nextjs.
When initializing the project in the previously created GitHub repo, I encountered my first problem. I got an error message saying I cant create the project because the directory is not empty. I solved the problem by starting the project locally, and then pushing it on to GitHub.
My next step was to visit the official Hokify page. I used DevTools in order to indentify your main color aswell as download the Logo.
My main idea for this challenge was to create a simple yet visually pleasing app. For that I created three components: one for the Header, one for the main page and one for the Footer. I tried to integrate some small features for hovering and focus. For the input fields I used placeholder. For the success message I used a simple alert() method, as from my understanding the main focus of this challenge was the frontend itself. My next step was to create a tailwind.config.js file by running the "yarn tailwindcss init" command. In this file I change Darkmode from false to class. I also included cyan: '#0fb1af' in order to use it for the project.
Then I went over to implement the Dark Mode. For that I installed the "nuxtjs/color-mode" library. Then I went through the nuxt/colormode documentation. I integrated the color mode in the nuxt.config.js file in the modules. I used the select element in the Header for the user to switch between light and dark mode.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
