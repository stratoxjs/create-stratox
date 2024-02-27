import { ingress } from '/src/templates/views/ingress';

// You can name it to whatever. 
// The important part is that at least one function must be exported
export function section(data, container, helper, builder) {
    let inst = this, out = `
	<article class="article border-bottom">

		<h1>YEYE</h1>
		${data.ingress ? inst.partial(ingress, data.ingress) : ""}

	    
	</article>
	`;
    return out;
}
