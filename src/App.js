import { Stratox } from 'stratox/src/Stratox.js';
import { Dispatcher } from './assets/Dispatcher.js';

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
					if(controllerClass) method = controllerClass[data.meta.controller[1]];
				}

				if(typeof method !== "function") {
					throw new Error("The router controller argumnet expects either a callable or an array with class and method");
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
		let controllerClass;
		if(typeof data.controller?.[0]?.constructor === "function") {
			if(typeof data.controller[0] === "function") {
				controllerClass = new data.controller[0]();
			} else {
				controllerClass = data.controller[0];
			}
		}
		return controllerClass;
	}

	static createResponse(response) {
		if(typeof response === "object" && typeof response.execute === "function") {
       		response = response.execute();
        }
        return response;
	}

}