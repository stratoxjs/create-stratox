
# Startox framework

Stratox.js is a user-friendly JavaScript framework that simplifies web application development. By focusing on core JavaScript and HTML, it empowers even beginners to efficiently build engaging projects. Its template engine and form builder follow HTML semantics, ensuring straightforward and accessible development. Stratox.js delivers optimal performance, swift response times, and seamless functionality across all devices, making it ideal for developing versatile web applications.

![enter image description here](http://wazabii.se/github-assets/installation-prompt-1.png)

## Documentation

**[You can find the full Startox documentation here](https://stratox.wazabii.se/)**

#### The documentation is divided into several sections:
-   [Why Stratox.js?](www)
-   [Installation](www)
-   [Directory overview](www)
-   [Getting started](www)
-   [Navigation](www)
-   [Controllers](www)
-   [Dynamic event](www)
-   [Form builder](wwww)
-   [Ajax Integration](www)
- ...

**[You can find the full Startox documentation here](https://stratox.wazabii.se/)**

## Installation 
To install Stratox, simply execute the following command:
```
npm create stratox
```
Next, follow the prompted instructions to complete the installation process. If you're a first-time user, I highly recommend reading through the entire guide.

_The installation prompt will also offer to install examples. While you can choose to install them, the step-by-step guide will build something similar to the examples. It is better to install the examples alongside your current setup to switch between them and receive helpful hints._

## Updating the framework
To update Stratox, use the following command:
```
npm update
```
This command will ensure that you have the latest version of the framework installed.

## Quick preview

Below you can se a quick preview how to use the framework.

### Create view

Let's begin by creating a dynamic template view file named `src/templates/views/text.js`. and add the following content to it.
```js
export function text(data, container, helper, builder) {
	return `
	<article class="relative card-1 border-bottom ingress">
		<div class="wrapper md">
		    <h1 class="headline-1">${data.headline}</h1>
		    <p>${data.content}</p>
		</div>
	</article>
	`;
}
```

### Create controller
Import the view at the top and add your pages to the controller like below. 
```js
import { text } from "@/templates/views/text";

export class Pages {

    start(request, container, helper, builder) {
        this.view(text, {
            headline: "Hello world!",
            content: "Lorem ipsum dolor",
        });
        return this;
    }
    
    about(request, container, helper, builder) {
        this.view(text, {
            headline: "About us",
            content: "Lorem ipsum dolor",
        });
        return this;
    }
}
```
### Router
Now that we have created the controller, we need to establish a connection between it and the router. Let's open up the router example again and make the following changes:

First, add the import statement for the `Pages` controller at the **top** of the router file `src/routes/app.js`:

```js
import { Pages } from '@/controllers/Pages';
```

Then, update the router routes for the start and about pages as follows, connecting your controller to each route:

```js
router.get('/', [Pages, "start"]);
router.get('/about', [Pages, "about"]);
```
### Resulting in

![enter image description here](https://wazabii.se/github-assets/example-result-about.png)


