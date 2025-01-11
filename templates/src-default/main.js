import '@/assets/style.css';
import { App } from '@stratox/core';
import routes from '@/routes/app';
import Fields from '@/templates/Fields';

const app = new App({
    fields: Fields
});

app.setup("#app").mount(routes, app.serverParams("auto"), function(response, request) {
    return `
        <main>
            ${response}
        </main>
    `;
});
