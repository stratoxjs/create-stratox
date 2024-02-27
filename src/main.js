import './style.css';
import { App } from './App';
import FormTemplateFields from './templates/FormTemplateFields';
import header from './templates/views/header';
import mainRoutes from './routes';

const app = new App({
    directory: "/src/templates/views/",
    handlers: {
        fields: FormTemplateFields,
        helper: function() {
            return {
                youName: "YOUR HELPER"
            };
        }
    }
});


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
