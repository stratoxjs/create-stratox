import { Stratox } from '../../stratox/src/Stratox.js';
//import { Stratox } from 'stratox/src/Stratox';
import { Dispatcher } from '@stratox/pilot/src/Dispatcher';

export class App {

	#stratox;
	#dispatcher;
	#router;
	#config = {};
	#elem;
	static view = false;
	static hasLoaded = false;

	constructor(config) {
		Stratox.setConfigs(config);
		this.#config = config;
	}

	/**
	 * Man view response handler
	 * @param  {object} data
	 * @param  {Container} container
	 * @param  {object} helper
	 * @param  {StrtoxBuilder} builder
	 * @return {string}
	 */
	main(data, container, helper, builder) {
		let response;
		let method;
		const inst = this.open();

		if(typeof data.meta.controller === "function") {
			method = data.meta.controller;
		} else {
			const controllerClass = App.getClass(data.meta);
			if(controllerClass) method = controllerClass[data.meta.controller[1]];
		}

		if(typeof method !== "function") {
			throw new Error("The router controller argument expects either a callable or an array with class and method");
		}

		const obj = App.createResponse(method.apply(inst, [data.meta, data.router, data.app]));

		if(response === undefined) {
            response = "";
        }
        if(typeof response !== "string") {
            throw new Error("The controller response needs to be string or an instance of Stratox");
        }

		if(typeof data.callable === "function") {
			let call = data.callable.apply(obj.inst, [obj.response, data.meta]);
			return call;
		}

		return response;
	}

	/**
	 * Setup / init app
	 * @param  {string} elem Query element string
	 * @return {self}
	 */
	setup(elem) {
		this.setElement(elem);
		this.#dispatcher = new Dispatcher({
		    catchForms: true
		});
		return this;
	}

	getDispatcher() {
		return this.#dispatcher;
	}

	serverParams(type) {
		return this.#dispatcher.serverParams(type);
	}

	request(type) {
		return this.#dispatcher.request(type);
	}

	
	/**
	 * Set app main element
	 * @param {string} elem  Set elem Query element string
	 * @return {self}
	 */
	setElement(elem) {
		this.#elem = elem;
		return this;
	}

	mount(routeCollection, serverParams, fn) {
		const inst = this;
		const elem = this.#elem;
		const name = (typeof elem === "string" ? elem : "main");
		const stratox = new Stratox(elem, this.#config);
		inst.#dispatcher.dispatcher(routeCollection, serverParams, inst.mountIndex(name, stratox, fn));
		return this;
	}

	mountAt(routeCollection, serverParams, fn) {
		const app = new App(this.#config);
		app.setup("#main");
		const div = document.createElement("div");
		div.id = "main";
		document.body.appendChild(div);
		return app.mount(routeCollection, serverParams, fn);
	}
	
	mountIndex(name, stratox, fn) {

		const inst = this;


		Stratox.setComponent(name, this.main);
		Stratox.setComponent("mainView", this.main);
		console.log("INIT");

		return function(data, status) {

			

			const arg = {
				meta: data,
				router: this,
				app: inst,
				callable: fn
			};

			/*
			console.log("DATA", App.view);

			if(App.hasLoaded) {
				stratox.createElement("wdwwq");
			}
			 */

			stratox.view(name, arg);
			stratox.execute(function() {
				App.hasLoaded = true;
			});

			
		}
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

		let inst = response, main = response;

		// WTF
		/*
		if(typeof response === "object" && (typeof response.execute !== "function")) {
			inst = response.response;
			response = response.response;
		}
		 */

		if(typeof response === "object" && typeof response.execute === "function") {

			let carrot = false, uniqueIDA, uniqueIDB = "stratox-el-"+App.genRandStr(10);
       		response = inst.execute(function() {
       			if(carrot) {
       				document.getElementById(uniqueIDA).outerHTML = this.getResponse();
       			}
       			inst.eventOnload(function() {
       				inst.setElement("#"+uniqueIDB);
       			});
       		});
       		if(inst.hasView() === false) {
       			carrot = true;
       			uniqueIDA = "stratox-node-"+App.genRandStr(10);
       			response = '<template id="'+uniqueIDA+'"></template>';
       		}
       		response = '<div id="'+uniqueIDB+'">'+response+'</div>';
        }
        return {
        	view: (main?.view ?? false),
        	response: response,
        	inst: inst
        };
	}


	static getNodeID(prefix) {
	    return "#"+prefix+this.genRandStr();
	}

	static getShadowTag(prefix) {
	    return '<template id="'+this.getElementID("stratox-node")+'"></template>';
	}

	static genRandStr(length) {
	    return (Math.random().toString(36).substring(2, 2 + length));
	}
}
