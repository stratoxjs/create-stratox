
export class HttpStatus {
    
    /**
     * The HTTP error status code page 
     * You can of course customize it with your own template view.
     */
    statusError(request, container, helper, builder) {
        return `
        <article class="relative card-1">
            <div class="wrapper md text-center">
                <h1 class="headline-2">404 - Page Not Found</h1>
                <p>We're sorry, but the page you're looking for no longer exists.</p>
                <p><a href="/">Return to the Homepage &raquo;</a></p>
            </div>
        </article>
        `;
    }
}
