

export function component(data, container, helper, builder) {
    const inst = this;
    const view = container.get("view");

    let out = `
    <section id="event-holder" class="card-3 rounded border-primary relative text-center">
    	<div class="legend absolute pad right-0 top-0 z-10">Component</div>
        <h2 class="headline-2 mt-0">${data.headline}</h2>
        <p>${data.content}</p>
        <p><a class="btn button bg-primary" href="#">Click me</a></p>
    </section>
    `;

    if(!view.hasView()) {
        // It is possible to set stratox view element inside the view it self
        document.getElementById("wrap").insertAdjacentHTML("beforeend", `<div id="events">${out}</div>`);
        view.setElement("#events");

    } else {
        // Everything has been initiated now I only need to return the changed out!
        return out;
    }

    view.bindEvent(view.getElement(), "click", ".btn", function(e) {
        e.preventDefault();
        if(!inst.count) inst.count = 1;
        inst.update("component", function(obj) {
            obj.data.headline = "Updated "+inst.count+" time";
        });
        inst.count++;
    });
}
