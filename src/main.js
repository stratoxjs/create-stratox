import './style.css';
import App from '@/App';
import components from '@/templates/components';
import navigation from '@/templates/views/navigation';
import routes from '@/routes/app';


const app = new App({
    handlers: {
        fields: components,
        helper: function() {
            return {
                youName: "YOUR HELPER"
            };
        }
    }
});

app.prepareDynamicViews(import.meta.glob('@/templates/views/*.js'));


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