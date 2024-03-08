import logo from '@/assets/images/logo-stratox.svg';

export default function navigation(data, container, helper, builder) {
    const pages = (data.vars?.page ?? []);
    const currentPage = pages.pop();

    function isActive(slug) {
        return (currentPage === slug) ? " underline" : "";
    }

    return `
    <header id="header" class="card-4 border-bottom items">
        <figure id="logo" class="headline-6 m-0">
            <img width="150" height="42" src="${logo}" alt="Stratox logotype">
        </figure>
    	<nav class="ml-auto">
            <ul class="items gap-x-25">
                <li class="nav-item${isActive(undefined)}"><a class="nav-to-btn" href="#">Start</a></li>
                <li class="nav-item${isActive("about")}"><a class="nav-to-btn" href="#about">About</a></li>
                <li class="nav-item${isActive("contact")}"><a class="nav-to-btn" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;
}
