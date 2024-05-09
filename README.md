# create-stratox
JavaScript template framework for the effortless creation of component, views and user interfaces (UI).


## Installation 
```
npm create stratox
```

## Updating Stratox
You only need to trigger the command bellow to update the framework

```
npm update
```


## Configuration
...

## Main
The "src/main.js" file is the root JavaScript file, it is where all the JavaScript functionallity is initilized, dispatched end emitted through. It is also here you can make your global configs and changes to your app.

```js
app.setup("#app").mount(routes, app.serverParams("fragment"), function(response, request) {
    return `
        <main>
            ${response}
        </main>
    `;
});
```

* response: The response argumnet is the apps main response view.
* request: Is all request data that is being passed.

You can see the mount method as you apps index file and this is a good place to add your for example navigation. It is allowed to mount multiple indexs or start points if you wish to do that it is up to you but in most cases once will på sufficent.


## Quick start guide
This is just a quick start guide

Open up your router file named "routes/app.js" and add let add one regular pages, just under the initilized router class. If you then visit "http://localhost:5173/" in your browser you will see the "Hello world" page

```js
router.get('/', function(request, container, helper, builder) {
	return `<h1>Hello world</h1>`;
});

router.get('/about', function(request, container, helper, builder) {
	return `<h1>Hello world</h1>`;
});

```
## Explaining the argumnets
The callable function has some very usefull arguments that I will explain bellow.
* request: This it the requests passed to the function such as the anchor fragment, pathm HTTP query strings and such.
* container: The container is used to pass data and functionallity between the controllers and views.
* helper: You can pass your own or third-party libraries to the helper so that you then can access them in the controllers, views and components.
* builder: this is the Strotox builder library and only used for advanced and custom user cases.


## Template engine
The template engine is allready applied on the callable function and is ready to be used and you can utilize it by calling "this". Lets create a quick template view and then change the "Hello world" example above.

### 1. Create the view file
Start by creating the view file "src/templates/views/text.js" and paste in some HTML Code.

```js
export function text(request, container, helper, builder) {
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
The **data argument** is the passed data that will be passed to the template view the other arguments is the same as I have allready explained in the example above. You will understand the data argumnet if you compare the example above with bellow,

### 2. Use the template
Lets open up our "Hello world" exmaple again, but this time we will utilize the template view we just created.

You can access the template engine inside the function with "this".
```js
import { text } from "@/templates/views/text";

router.get('/', function(request, container, helper, builder) {
	this.view(text, {
        headline: "Hello world!",
        content: "lorem ipsum dolor",
    });
    return this;
});

```
And thats it, we now are using the Stratox dynamic template engine. You can read more about the template engine here later but before that lets build ono with our example by adding one more page and alos organize it.


## Controllers
The controller have some what the same principle as a callable function. Controller is used to structure your code and make it more clean and easier to manage and is recommended that you use when building bigger apps. The example works great for small apps but as soon as you building something bigger then it can quickly get some what messy and that is where controller file come in and by breaking up the code in diffrent files making it much easier to build and test.


### 1. Create a JavaScript Class
Let us create a class named "Pages" and do not forget to add export to the class like bellow.

```js
export class Pages {


}
```

### 2. Add methods to the class
Next we need to add the class methods that in this case will reprensent the pages in the app. I will add the method named "start" and "about"

```js
export class Posts {

	start(request, container, helper, builder) {
		this.view(text, {
	        headline: "Hello world!",
	        content: "lorem ipsum dolor",
	    });
	    return this;
	}

	about(request, container, helper, builder) {
		this.view(text, {
	        headline: "About us!",
	        content: "lorem ipsum dolor",
	    });
	    return this;
	}

}
```


### 3. Router
Now lets change the router 
```js
router.get('/posts', [Posts, "index"]);
router.get('/post/{id:[0-9]+}', [Pages, "show"]);
```
Done!