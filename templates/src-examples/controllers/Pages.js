import { text } from "@/templates/views/text";
import { increment } from "@/templates/views/increment";
import { form } from "@/templates/views/form";

/**
 * The Pages Controller
 * This is a quick example showcasing some powerful functions
 */
export class Pages {

    /**
     * Start page
     */
    start(request, container, helper, builder) {

        const textSection1 = this.view({ textSection1: text }, {
            headline: "Thanks for installing Stratox!",
            content: `You've chosen the empty option. If this is your first time using the Stratox framework, we recommend following our step-by-step guide <a href="https://stratox.wazabii.se/v/stratox-framework" target="_blank">here</a>.`,
        });

        const textSection2 = this.view({ textSection2: text }, {
            headline: `Lorem ipsum`,
            content: `You can also install the example version alongside your current setup to switch between them and get helpful hints.`,
        });

        // Onload will be triggered once on page load!
        // Once the page is loaded, then dynamically update the headline in the textSection2 view.
        this.onload(function() {
            textSection2.set({ headline: "The example" }).update();
        });

        return this;
    }

    /**
     * About page
     */
    about(request, container, helper, builder) {
        const inst = this;

        // Add a regular text view
        inst.view(text, {
            headline: "About us",
            content: "lorem ipsum dolor",
        });
        
        // The increment view contains a click event
        inst.view(increment, {
            headline: "Start increment",
            increment: 0
        });

        return inst;
    }

    /**
     * Contact page with form builder
     */
    contact(request, container, helper, builder) {

        const form = this.view("form", {
            action: "#contact",
            method: "post",
            ingress: {
                headline: "Contact us", 
                content: "Lorem ipsum dolor"
            }
        });

        form.setFields({
            firstname: {
                type: "text",
                label: "First name",
                conAttr: {
                    class: "grow"
                }
            },
            lastname: {
                type: "text",
                label: "Last name",
                conAttr: {
                    class: "grow"
                }
            },
            message: {
                type: "textarea",
                label: "Message",
            },
            custom: {
                label: "Contact information",
                type: "group",
                fields: {
                    headline: this.getViewComponent({ 
                        myStaticView: function(data) {
                            return `<header class="ingress mb">
                                <h2 class="headline-3 title">${data.headline}</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </header>`;
                        } 
                    }, {
                        headline: "How can we reach you?" 
                    }),
                    email: {
                        type: "text",
                        label: "E-mail",
                        attr: {
                            type: "email"
                        }
                    },
                    phone: {
                        type: "text",
                        label: "Phone",
                        attr: {
                            type: "tel"
                        }
                    }
                },
                config: {
                    // Recommended configs
                    nestedNames: true,
                    controls: true
                }
            },
            submit: {
                type: "submit",
                value: "Send"
            }
        });

        return this;
    }

    /**
     * Contact form POST page
     */
    contactPost(request, container, helper, builder) {
        const postData = request.request.post;
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

    /**
     * Takover example will replace the whole browser view 
     * with the output.
     */
    takeover(request, container, helper, builder) {
        return {
            //append: true,
            type: "takeover", 
            output: 'Will take over the whole view!'
        };
    }
}
