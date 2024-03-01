import './style.css';
import { App } from './App';
import FormTemplateFields from './templates/FormTemplateFields';
import header from './templates/views/header';
import mainRoutes from './routes';


const app = new App({
    cache: true,
    directory: (import.meta.env.DEV ? "/src/templates/views/" : "./views/"),
    handlers: {
        fields: FormTemplateFields,
        helper: function() {
            return {
                youName: "YOUR HELPER"
            };
        }
    }
});

app.prepareDynamicViews(import.meta.glob('@/templates/views/*.js'));

app.setup("#app").mount(mainRoutes, app.serverParams("fragment"), function(response) {
    return `
        ${this.partial(header)}
        <main>
            ${response}
        </main>
        <footer class="card-4 text-center legend">
            Your footer text here
        </footer>
    `;
});

