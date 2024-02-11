import router from './routes.js';
import { App } from './App.js';
import FormTemplateFields from './FormTemplateFields.js';
import navigation from './Pages/nav.js';

const app = new App({
    directory: "../src/Pages/", // DYNAMIC VIEW FIX
    handlers: {
        fields: FormTemplateFields,
        helper: function() {
            return {
            };
        }
    }
});

const dispatcher = app.setup("#app").mount(router, function(response) {
    return `
    ${this.partial(navigation)}
    <main id="main">
        ${response}
    </main>
    `;
});
