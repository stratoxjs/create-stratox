import '@/assets/style.css';
import Alpine from 'alpinejs';
import { App } from '@stratox/core';
import routes from '@/routes/app';
import components from '@/templates/components';
import navigation from '@/templates/layout/navigation';

window.Alpine = Alpine;

const app = new App({
    components: components, 
});

app.setup("#app").mount(routes, app.serverParams("fragment"), function(response, request) {
    return `
        ${this.partial(navigation, request)}
        <main>
            ${response}
        </main>
    `;
});
