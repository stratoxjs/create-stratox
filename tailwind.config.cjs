/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg': {
                    'primary': "#1E40AF",
                    'secondary': "#E2E8F0",
                    'light': "#F9F9F9",
                    'approve': '#17A355',
                    'error': '#D32E32',
                },
                'text': {
                    'primary': "#0F172B",
                    'secondary': "#47566C",
                    'link': '#1E40AF',
                    'approve': '#17A355',
                    'error': '#D32E32',
                },
                'border': {
                    'primary': "#CDD5E0",
                    'secondary': "#70A3F3",
                    'light': "#E3E8EF",
                    'approve': '#4CA054',
                    'error': '#8D2822'
                },
            }
        }
    },
    plugins: [
        require('@stratox/tailwind').config({
            fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
            fontFace: [
                {
                        'font-family': '"Open Sans"',
                        'src': 'url("/src/assets/opensans-bold-webfont.woff2") format("woff2")',
                        'font-weight': 'bold',
                        'font-style': 'normal',
                        'font-display': 'swap'
                },
                {
                        'font-family': '"Open Sans"',
                        'src': 'url("/src/assets/opensans-italic-webfont.woff2") format("woff2")',
                        'font-weight': 'normal',
                        'font-style': 'italic',
                        'font-display': 'swap'
                },
                {
                        'font-family': '"Open Sans"',
                        'src': 'url("/src/assets/opensans-regular-webfont.woff2") format("woff2")',
                        'font-weight': 'normal',
                        'font-style': 'normal',
                        'font-display': 'swap'
                }
            ]
        })
    ],
}