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
                bgPattern: "hsl(var(--background-pattern))",
                card: "hsl(var(--card))",
                foreground: "hsl(var(--foreground))",
                "muted-foreground": "hsl(var(--muted-foreground))",
                "brand-red": "hsl(var(--brand-red))",
                "brand-green": "hsl(var(--brand-green))",
                "facebook-blue": "hsl(var(--facebook-blue))"
            },
        }
    },
    plugins: []
}

export default config;