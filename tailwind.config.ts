// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
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
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            animation: {
                float: "float 3s ease-in-out infinite",
            },
        },
    },
    darkMode: "class", // Enable class-based dark mode
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-scrollbar"),
    ],
};
