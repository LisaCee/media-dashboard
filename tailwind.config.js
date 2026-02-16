/** @type {import('tailwindcss').Config} */

const config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                "red": "hsl(var(--background-pattern))",
                card: "hsl(var(--card))",
                foreground: "hsl(var(--foreground))",
                "muted-foreground": "hsl(var(--muted-foreground))"
            },
            fontFamily: {
                sans: ['var(--font-family-sans)'],
            },
            fontSize: {
                body: 'var(--body-font-size)',
            },
            fontWeight: {
                regular: 'var(--font-weight-regular)',
                bold: 'var(--font-weight-bold)',
            },
        }
    },
    plugins: []
}

export default config;