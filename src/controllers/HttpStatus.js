
export class HttpStatus {

    constructor() {
        
    }

    statusError(data, router) {
        this.view("text", {
            headline: "404",
            content: "lorem ipsum dolor 12",
        });
        return this;
    }

}
