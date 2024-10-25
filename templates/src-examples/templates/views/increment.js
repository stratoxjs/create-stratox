
// You can name it to whatever. 
// The important part is that at least one function must be exported
export function increment(data, container, helper, builder) {
	const inst = this;

    // Bind event and then pass it to below onclick
    const clickEvent = builder.bind((event) => {
		data.headline = "Incremented";
        data.increment += 1;
	});

    return `
	<article class="relative card-1 border-bottom ingress">
	    <div class="wrapper md">
	        <header class="mb">
	            <h2 class="headline-2">${data.headline}</h2>
	            <p>Has been incremented <strong>${data.increment}</strong> times!</p>
	        </header>
	        <a class="button bg-primary sm" href="#" onclick="${clickEvent}">Increment +</a>
	    </div>
	</article>
	`;
}
