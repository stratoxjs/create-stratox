
export default function navigation(data, container, helper, builder) {

    const pages = (data.vars?.page ?? []);
    const currentPage = pages.pop();

    return `
    <header id="header" class="card-4 border-bottom items">
        <figure id="logo" class="headline-6 m-0">
            [DIN LOGOTYP]
        </figure>
    	<nav class="ml-auto">
            <ul class="items gap-x-15">
                <li class="nav-item${!currentPage ? " underline" : ""}"><a class="nav-to-btn" href="#">Start</a></li>
                <li class="nav-item${currentPage === 'about' ? " underline" : ""}"><a class="nav-to-btn" href="#about">About</a></li>
                <li class="nav-item${currentPage === 'contact' ? " underline" : ""}"><a class="nav-to-btn" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;
}
