//import { Stratox } from '../../stratox/src/Stratox.js';
import { Router } from '../../StateHandler/src/Router.js';
import { FormTemplateFields } from './FormTemplateFields.js';
import navigation from './Pages/nav.js';
import { ingress } from './Pages/ingress.js';
import { App } from './App.js';

const app = new App({
    directory: "../src/Pages/",
     handlers: {
        fields: FormTemplateFields,
        helper: function() {
            return {
            };
        }
    }
});

const router = new Router();
/*
router.get('', function(data, router) {
    this.view({ start: ingress}, {
        headline: "START",
        content: "lorem ipsum dolor call",
    });
    return this;
});
 */

router.get('', ["Pages", "start"]);
router.get('{page:about}', ["Pages", "about"]);
router.get('{page:contact}/{id:[0-9]+}', ["Pages", "contact"]);
router.post('{page:contact}/{id:[0-9]+}', ["Pages", "contactPost"]);

const dispatcher = app.setup("#app").mount(router, function(response) {
    return `
    ${this.partial(navigation)}
    <main id="main">
        ${response}
    </main>
    `;
});



// MOUNT MULTIPLE
const router2 = new Router();
router2.get('{page:about}', ["Pages", "test"]);

let www = app.setup("#test").mount(router2, function(response, request) {
    if(request.status !== 200) response = "";
    return `
    whdqwhwdqh
    <main>
        ${response}
    </main>
    `;
});

