//import { text } from '@/templates/views/text.js';

export class Pages {

    constructor() {

    }

    start(data, router) {
        this.view("text", {
            headline: "Start",
            content: "lorem ipsum dolor",
        });
        return this;
    }

    about(data, router) {
        const textSection1 = this.view("text#section1", {
            headline: "About 1",
            content: "lorem ipsum dolor",
        });

        const textSection2 = this.view("text#section2", {
            headline: "About 2",
            color: "light",
            content: "lorem ipsum dolor",
        });

        /*
        setTimeout(function() {
            textSection1.set({headline: "About yeah"}).update();
        }, 1000);
        */
        return this;
    }

    contact(request, container, helper, builder) {
        this.view("form", {
            action: "#contact/12",
            method: "post",
            ingress: {
                headline: "Contact us", 
                content: "Lorem ipsum dolor"
            }

        }).setFields({
            firstname: {
                type: "text",
                label: "First name"
            },
            lastname: {
                type: "text",
                label: "Last name"
            },
            custom: {
                label: "Som more information",
                type: "group",
                fields: {
                    headline: {
                        type: "text",
                        label: "Headline"
                    },
                    description: {
                        type: "textarea",
                        label: "Description"
                    }
                },
                config: {
                    nestedNames: true,
                    controls: true

                }
            },
            submit: {
                type: "submit",
                value: "Send"
            },
        });

        this.bindGroupEvents("#app");
        return this;
    }

    contactPost(request, container, helper, builder) {
        const postData = Object.fromEntries(request.request.post.entries());
        return `
        <div class="wrapper md card-1">
            <header class="mb">
                <h2 class="headline-1">Post request</h2>
                <p>Bellow is the catched request data:</p>
            </header>
            <pre>${JSON.stringify(postData)}</pre>
        </div>
        `;
    }

}
