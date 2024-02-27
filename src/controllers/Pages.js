

export class Pages {


    constructor() {

    }

    start(data, router) {
        this.view("textView", {
            headline: "About",
            content: "lorem ipsum dolor",
        });
        return this;  
    }

    about(data, router) {

        this.view("textView#a", {
            headline: "About 1",
            content: "lorem ipsum dolor",
        });

        this.view("textView#b", {
            headline: "About 2",
            content: "lorem ipsum dolor",
        });
        
        /*
        setTimeout(function() {
            ingressStart.set({headline: "About yeah"}).update();
        }, 500);
         */
        
        return this;
    }

    contact(request, container, helper, builder) {
      
        this.view("textView", {
            headline: "Contact",
            content: "lorem ipsum dolor",
        });
        
        this.group("form", function() {
            this.form("firstname").setType("text").setLabel('Förnamn');
            this.form("lastname").setType("text").setLabel('Label');
            return `
            <article class="card-2">
                <div class="wrapper md">
                    <form action="#contact/12" method="post">
                        ${this.execute()}
                        <input type="submit" name="submit">
                    </form>
                </div>
            </article>
            `;
        });

        return this;
    }

    contactPost(request, container, helper, builder) {
        return "qw dqwd wqdq d";
    }

}
