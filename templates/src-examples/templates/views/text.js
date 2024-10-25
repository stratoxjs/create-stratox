
// You can name it to whatever. 
// The important part is that at least one function must be exported
export function text(data, container, helper, builder) {
    return `
	<article class="relative card-1 border-bottom ingress">
		<div class="wrapper md">
		    <h1 class="headline-1">${data.headline}</h1>
		    <p>${data.content}</p>
	    </div>
	</article>
	`;
}
