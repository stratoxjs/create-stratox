import { Stratox } from '../../stratox/src/Stratox.js';
import { Dispatcher } from '../../StateHandler/src/Dispatcher.js';
//import { Router } from '../../StateHandler/src/Router.js';

export class App {

	#stratox;
	#dispatcher;
	#router;
	#config = {};
	#elem;

	constructor(config) {
		Stratox.setConfigs(config);
		this.#config = config;
	}

	main(data, container, helper, builder) {
		let response;
		switch(data.meta.status) {
			case 404:
				response = data.meta.status+" Page not found";
			break;
			case 405:
				response = data.meta.status+" Method not allowed";
			break;
			default:

				let method;
				const inst = this.open();

				if(typeof data.meta.controller === "function") {
					method = data.meta.controller;
				} else {
					const controllerClass = App.getClass(data.meta);
					method = controllerClass[data.meta.controller[1]];
				}

				response = App.createResponse(method.apply(inst, [data.meta, data.router]));

				if(response === undefined) {
		            response = "";
		        }
		        if(typeof response !== "string") {
		            throw new Error("The controller response needs to be string or an instance of Stratox");
		        }

			break;
		}
		
		if(typeof data.callable === "function") {
			let call = data.callable.apply(this, [response, data.meta]);
			if(typeof response === "string") {
				return App.createResponse(call);
			}
		}
		return response;
	}

	setElement(elem) {
		this.#elem = elem;
	}

	setup(elem) {
		const app = new App(this.#config);
		app.setElement(elem);
		return app;
	}

	mount(routeCollection, fn) {
		const elem = this.#elem;
		const name = (typeof elem === "string" ? elem : "main");
		const stratox = new Stratox(elem, this.#config);
		Stratox.setComponent(name, this.main);
		const inst = this, dispatcher = new Dispatcher();
		dispatcher.dispatcher(routeCollection, function(data, status) {
			stratox.view(name, {
				meta: data,
				router: this,
				callable: fn
			});
			stratox.execute();
		});

		return dispatcher;
	}

	static getClass(data) {
	    let controllerData = data.controller[0].split("/"), 
	    className = controllerData.pop(),
	    directory = controllerData.join("/");
	    if(directory.length > 0) directory = directory+"/";

	    try {
	    	const controllerReq = require('./Controllers/'+directory+className+'.js');
	    	return new controllerReq[className]();
	       
	    } catch (error) {
	        throw new Error("Could not find the file \""+directory+className+".js\" with the class \""+className+"\"!");
	    }
	}

	static createResponse(response) {
		if(typeof response === "object" && typeof response.execute === "function") {
       		response = response.execute();
        }
        return response;
	}

}