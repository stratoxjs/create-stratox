
export default function header(data, container, helper, builder) {
   return `
    <header id="header" class="card-4 border-bottom items">
        <figure id="logo" class="headline-6 m-0">
            [DIN LOGOTYP]
        </figure>
    	<nav class="ml-auto">
            <ul class="items gap-x-15">
                <li><a class="nav-to-btn" href="#">Start</a></li>
                <li><a class="nav-to-btn" href="#about">About</a></li>
                <li><a class="nav-to-btn" href="#contact/12">Contact</a></li>
                <li><a class="nav-to-btn" href="#wdddqw">404</a></li>
            </ul>
        </nav>
    </header>
    `;
}
