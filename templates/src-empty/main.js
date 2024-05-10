import '@/assets/style.css';
import { App } from '@stratox/core';
import routes from '@/routes/app';
import components from '@/templates/components';

const app = new App({
    components: components
});

app.setup("#app").mount(routes, app.serverParams("fragment"), function(response, request) {
    return `
        <main>
            ${response}
        </main>
    `;
});
