
// You can name it to whatever. 
// The important part is that at least one function must be exported

export function ingress(data, container, helper, builder) {
    let inst = this, out = `
	<header class="relative article border-b">
	    <h1>${data.headline}</h1>
	    <p>${data.content}</p>
	</header>
	`;
    return out;
}
