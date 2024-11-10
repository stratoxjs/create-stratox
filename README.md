
# Stratox.js - framework ![npm](https://img.shields.io/npm/v/create-stratox)

Stratox.js is a user-friendly JavaScript framework that simplifies web application development. By focusing on core JavaScript and HTML, it empowers even beginners to efficiently build engaging projects. Its template engine and form builder follow HTML semantics, ensuring straightforward and accessible development. Stratox.js delivers optimal performance, swift response times, and seamless functionality across all devices, making it ideal for developing versatile web applications.

![enter image description here](http://wazabii.se/github-assets/installation-prompt-1.png)

## Documentation

**[You can find the full Startox documentation here](https://stratox.wazabii.se/)**

#### The documentation is divided into several sections:
-   [Why Stratox?](https://stratox.wazabii.se/)
-   [Installation](https://stratox.wazabii.se/quick-start-mvc)
-   [Quick Start (MVC)](https://stratox.wazabii.se/quick-start-mvc)
-   [Directory overview](https://stratox.wazabii.se/step-by-step-tutorial/directory-overview)
-   [Getting started](https://stratox.wazabii.se/step-by-step-tutorial/getting-started)
-   [Navigation](https://stratox.wazabii.se/step-by-step-tutorial/navigation)
-   [Controllers](https://stratox.wazabii.se/step-by-step-tutorial/controllers)
-   [Increment / Events](https://stratox.wazabii.se/step-by-step-tutorial/increment-events)
-   [Form builder](https://stratox.wazabii.se/step-by-step-tutorial/forms)
-   [Fetch Library (Ajax Requests)](https://stratox.wazabii.se/step-by-step-tutorial/fetch-library-ajax-requests)
- ...

**[You can find the full Startox documentation here](https://stratox.wazabii.se/)**

## Installation 
To install Stratox, simply execute the following command:
```
npm create stratox@latest
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

Let's begin by creating a dynamic template view file named `src/templates/views/HelloWorld.js`. and add the following content to it.
```js
export function HelloWorld(props, container, helper, context) {
	return `
	<article class="relative card-1 border-bottom ingress">
		<div class="wrapper md">
	    <h1 class="headline-1">${props.headline}</h1>
	    <p>${props.content}</p>
		</div>
	</article>
	`;
}
```

### Create controller
Let's create a controller file named `src/templates/controllers/PagesController.js` and add the following code to it. Incorporate your view into the controller and pass in template props such as `headline` and `content`.

```js
import { HelloWorld } from "@/templates/views/HelloWorld";

export default class PagesController {

  start(http, container, helper, context) {
    this.layout(HelloWorld, {
      headline: "Hello world!",
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
import { PagesController } from '@/controllers/PagesController';
```

Then, update the router routes for the start and about pages as follows, connecting your controller to each route:

```js
router.get('/', [PagesController, "start"]);
```
### Resulting in

![enter image description here](https://wazabii.se/github-assets/example-result-about.png)


