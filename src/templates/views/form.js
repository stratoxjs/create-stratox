
export function formComponent(data, container, $, builder)
{
    let out = '';
    out += `
    <article class="card-1">
        <div class="wrapper md">
             ${getIngress()}

            <form action="${data.action}" method="${data.method}">`;
                builder.groupFactory(function (o, val) {
                    out += o;
                });
            out += `
            </form>
        </div>
    </article>
    `;

    function getIngress() {
        let out = "";
        if(data?.ingress?.headline) {
            out += `
            <header class="mb-50">
                <h2 class="headline-2">${data.ingress.headline}</h2>
                ${data?.ingress?.content ? '<p>'+data?.ingress?.content+'</p>' : ""}
            </header>
            `;
        }
        return out;
    }
    
    return out;
}