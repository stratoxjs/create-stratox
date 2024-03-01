import { Stratox } from 'stratox/src/Stratox';
//import { Stratox } from '../../stratox/src/Stratox.js';
import { Dispatcher } from '@stratox/pilot';


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

		let createResponse = method.apply(inst, [data.meta, data.router, data.app]);
		if(typeof createResponse === "string") {
			response = createResponse;
			Stratox.setComponent("StratoxPlaceholderView", function() {
				return response;
			});
			inst.view("StratoxPlaceholderView");
			createResponse = inst;
		}

		const obj = App.createResponse(createResponse);

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

	/**
	 * Get the Dispatcher instance
	 * @return {Dispatcher}
	 */
	getDispatcher() {
		return this.#dispatcher;
	}

	/**
	 * Dynamic function for collecting Server requests
	 * @param  {string} type
	 * @return {function}
	 */
	serverParams(type) {
		return this.#dispatcher.serverParams(type);
	}

	/**
	 * Dynamic function for collecting common js requests
	 * @param  {string} type
	 * @return {function}
	 */
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

	/**
	 * Mount app to dispatcher
	 * @param  {Router}   	routeCollection Instance of Router (@Stratox/Pilot Router)
	 * @param  {Function}   serverParams    Dynamic function for collecting server requests (App.serverParams("hash") or App.request("path"))
	 * @param  {Function} 	fn              Set index view
	 * @return {self}
	 */
	mount(routeCollection, serverParams, fn) {
		const inst = this;
		const elem = this.#elem;
		const name = (typeof elem === "string" ? elem : "main");
		const stratox = new Stratox(elem, this.#config);
		inst.#dispatcher.dispatcher(routeCollection, serverParams, inst.mountIndex(name, stratox, fn));
		return this;
	}

	/**
	 * Mount app to dispatcher
	 * @param  {Router}   	routeCollection Instance of Router (@Stratox/Pilot Router)
	 * @param  {Function}   serverParams    Dynamic function for collecting server requests (App.serverParams("hash") or App.request("path"))
	 * @param  {Function} 	fn              Set index view
	 * @return {self}
	 */
	index(fn) {
		const inst = this;
		const elem = this.#elem;
		const name = (typeof elem === "string" ? elem : "main");
		const stratox = new Stratox(elem, this.#config);
		//inst.mountIndex(name, stratox, fn)()
		return this;
	}

	
	/**
	 * Will mount index view
	 * @param  {string}   name    Index view name
	 * @param  {Stratox}  stratox Instance of Stratox
	 * @param  {Function} fn
	 * @return {Function}
	 */
	mountIndex(name, stratox, fn) {
		const inst = this;
		Stratox.setComponent(name, this.main);

		return function(data, status) {
			stratox.view(name, {
				meta: data,
				router: this,
				app: inst,
				callable: fn
			});
			stratox.execute();
		}
	}

	/**
	 * Will prepare dynamic views for vite build
	 * @param  {object} importManifest
	 * @return {void}
	 */
	prepareDynamicViews(importManifest) {
        for (const path in importManifest) {
            importManifest[path]().then((mod) => {
            });
        }  
    }

    /*
    mountAt(routeCollection, serverParams, fn) {
		const app = new App(this.#config);
		app.setup("#main");
		const div = document.createElement("div");
		div.id = "main";
		document.body.appendChild(div);
		return app.mount(routeCollection, serverParams, fn);
	}
     */

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
		let inst = response;
		if(typeof response === "object" && typeof response.execute === "function") {
			let carrot = false, uniqueIDA, uniqueIDB = "stratox-el-"+App.genRandStr(10);
       		response = inst.execute(function() {
       			if(carrot) {
       				inst.eventOnload(function() {
	       				const el = document.getElementById(uniqueIDA);
	       				el.outerHTML = inst.getResponse();
       				});
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
