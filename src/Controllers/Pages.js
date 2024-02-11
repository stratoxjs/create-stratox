import { ingress } from '../Pages/ingress.js';

export class Pages {


    constructor() {

    }

    httpStatus() {

    }

    start(data, router) {
        this.view({ start: ingress}, {
            headline: "START",
            content: "lorem ipsum dolor 12",
        });
        return this;
    }

    about(data, router) {
        let inst = this, 
        www = this.view({ start: ingress}, {
            headline: "About",
            content: "lorem ipsum dolor",
        });
        
        setTimeout(function() {
            inst.setElement("#main");
            www.set({headline: "About YEAH"}).update();
        }, 500);

        /*
        if(data.request.get.test === "wwww") {
            this.view({ start: ingress}, {
                headline: "About NEW",
                content: "lorem ipsum dolor",
            });
        } else {

            this.view({ start: ingress}, {
                headline: "About",
                content: "lorem ipsum dolor",
            });

            setTimeout(function() {
                router.navTo("#about", {
                    test: "wwww"
                });
            }, 1000);
        }
         */

        
        return this;
    }

    contact(request, container, helper, builder) {
        
        this.view({ start: ingress}, {
            headline: "Contact",
            content: "lorem ipsum dolor",
        });

        this.group("form", function() {
            this.form("firstname").setType("text").setLabel('Förnamn');
            this.form("lastname").setType("text").setLabel('Label');

            return `
            <form action="?lorem=1212#contact/12">
                ${this.execute()}
                <input type="submit" name="submit">
            </form>
            `;
        });

        return this;
    }

    contactPost(request, container, helper, builder) {
        return "qw dqwd wqdq d";
    }

    test() {
        this.view({ start: ingress}, {
            headline: "Test",
            content: "lorem ipsum dolor",
        });

        return this;
    }

}
