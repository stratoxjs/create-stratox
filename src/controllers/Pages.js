//import { text } from '@/templates/views/text.js';

export class Pages {

    constructor() {

    }

    start(request, container, helper, builder) {
        this.view("text", {
            headline: "Start",
            content: "lorem ipsum dolor",
        });
        return this;
    }

    about(request, container, helper, builder) {

        if(!request.inc) request.inc = 1;

        const inst = this.open();
        const textSection1 = this.view("text#section1", {
            headline: "About 1",
            content: "lorem ipsum dolor",
        });

        const textSection2 = this.view("text#section2", {
            headline: "About 2",
            color: "light",
            content: "lorem ipsum dolor",
        });

        this.done(function(a, b) {
            const el = document.getElementById("tetetete");
            el.addEventListener("click", function(e) {
                e.preventDefault();
                textSection1.set({headline: "About 1 update: "+request.inc }).update();
                textSection2.set({headline: "About 2 update: "+request.inc }).update();
                request.inc++;
            });
        });
        
        return {
            append: true,
            output: '<a id="tetetete" href="#about">dwqdwq</a>'
        };
    }

    contact(request, container, helper, builder) {
        this.view("form", {
            action: "#contact",
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
            <pre>${JSON.stringify(postData, true, 2)}</pre>
        </div>
        `;
    }

}
