// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        // Include other directories if needed
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1D4ED8", // Blue 700
                secondary: "#FBBF24", // Amber 400
            },
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
        },
    },
    darkMode: "class", // Enable class-based dark mode
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-scrollbar"),
    ],
};
