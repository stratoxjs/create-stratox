import '@/assets/style.css';
import { App } from '@stratox/core';
import routes from '@/routes/app';
import components from '@/templates/components';
import navigation from '@/templates/layout/navigation';

const app = new App({
    components: components, 
    helper: function() {
        // The Helpers of your choice will be passed to the controllers, views and components
        return {
            yourHelper1: {},
            yourHelper2: {}
        };
    }
});

app.setup("#app").mount(routes, app.serverParams("fragment"), function(response, request) {
    return `
        ${this.partial(navigation, request)}
        <main>
            ${response}
        </main>
        <footer class="card-4 text-center legend">
            Your footer text here
        </footer>
    `;
});
