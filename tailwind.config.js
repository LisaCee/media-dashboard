/** @type {import('tailwindcss').Config} */

import theme from ".theme.css";

export const content = [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
    extend: {
    },
};
export const plugins = [];