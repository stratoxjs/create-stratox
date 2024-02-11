import navigation from './nav.js';
import httpStatus from './httpStatus.js';

export function app(data, container, helper, builder) {    
    const inst = this;

    return `
    ${this.partial(navigation)}

    <main>
        ${main(this, arguments)}
    </main>
    `;

    this.update();
}

function main(stratox, args) {
    const [data, container, helper, builder] = args;
    //const stratox = inst.open();

    if(data.status === 404) {
        //stratox.view(httpStatus);
        //return stratox.execute();

    } else {
        if(typeof data.controller === "function") {
            return data.controller.apply(stratox, [data, container, helper, builder]);
        }
        
        const controllerClass = getClass(data);
        if(typeof controllerClass[data.controller[1]] !== "function") {
            throw new Error("The controller view method \""+data.controller[1]+"\" does not exist in the class \""+data.controller[0]+".js\".");
        }

        let response = controllerClass[data.controller[1]].apply(stratox, [data, container, helper, builder]);



        //return response.execute();
        //return inst.execute();


        /*
        if(typeof response === "object" && typeof response.execute === "function") {
            return response.execute();
        }

        if(response === undefined) {
            response = "";
        }

        if(typeof response !== "string") {
            throw new Error("The controller response needs to be string or an instance of Stratox");
        }
         */

        //return response;
    }
}

function getClass(data) {
    let controllerData = data.controller[0].split("/"), 
    className = controllerData.pop(),
    directory = controllerData.join("/");
    if(directory.length > 0) directory = directory+"/";

    try {
        const controllerReq = require('../Controllers/'+directory+className+'.js');
        return new controllerReq[className]();
    } catch (error) {
        throw new Error("Could not find the file \""+directory+className+".js\" with the class \""+className+"\"!");
    }
}

