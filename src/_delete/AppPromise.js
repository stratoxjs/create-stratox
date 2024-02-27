//import { Stratox } from 'stratox/src/Stratox.js';
import { Stratox } from './assets/stratox/src/Stratox.js';
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

	async main(data, container, helper, builder) {

		const startox = this, resolveResp = App.getClass(data.meta);

		



		return Promise.resolve(resolveResp).then(function(mod) {

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
					const inst = startox.open();

					if(typeof data.meta.controller === "function") {
						method = data.meta.controller;
					} else {
						const controllerClass = new mod[data.meta.controller[0]]();
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
				let call = data.callable.apply(startox, [response, data.meta]);
				if(typeof response === "string") {
					return App.createResponse(call);
				}
			}
			return response;

		});


		
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

	static async loadModule(path) {
		try {
			const module = await import(path);
			return module;

		} catch (error) {
			console.error('Module failed to load', error);
		}

	}

	static getClass(data, fn) {
		if(data.controller !== null) {
		    let controllerData = data.controller[0].split("/"), 
		    className = controllerData.pop(),
		    directory = controllerData.join("/");
		    if(directory.length > 0) directory = directory+"/";
		    return App.loadModule('./Controllers/'+directory+className+'.js');
	    }
	    return false;
	}

	static createResponse(response) {
		if(typeof response === "object" && typeof response.execute === "function") {
       		response = response.execute();
        }
        return response;
	}

}