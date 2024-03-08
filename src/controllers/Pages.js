/**
 * The Pages Controller
 * This is a quick example showcasing some powerful functions
 */
export class Pages {

    start(request, container, helper, builder) {

        const textSection1 = this.view("text#textSection1", {
            headline: "Welcome!",
            content: "lorem ipsum dolor",
        });

        const textSection2 = this.view("text#textSection2", {
            headline: `Lorem ipsum`,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor est non congue molestie. 
            Duis nisi tortor, vehicula quis erat et, accumsan sodales magna. Suspendisse sed justo non lorem lacinia feugiat sed id tortor. 
            Sed mattis lorem quis diam ultricies malesuada. Donec quis quam elementum, ornare quam in, facilisis ex.`,
        });

        // Onload will be triggered once on page load!
        this.onload(function() {
            textSection2.set({ headline: "Here some information" }).update();
        });

        return this;
    }

    about(request, container, helper, builder) {
        const inst = this;

        // Add a regular text view
        inst.view("text#myIngress", {
            headline: "About us",
            content: "lorem ipsum dolor",
        });
        
        // This is also just a regualar view without any special functionality
        const customTemplate = inst.view("increment", {
            headline: "Start increment",
            increment: 0
        });

        let inc = 1;
        // The done function will be triggered every time the view has been changed
        inst.done(function(a, b) {
            const el = document.getElementById("my-btn");
            el.addEventListener("click", function(e) {
                e.preventDefault();
                customTemplate.set({headline: "Incremented", increment: inc });
                customTemplate.update();
                // Increment for next update
                inc++;
            });
        });   

        return inst;
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

    takeover(request, container, helper, builder) {
        return {
            //append: true,
            type: "takeover", 
            output: 'Will take over the whole view!'
        };
    }

}
