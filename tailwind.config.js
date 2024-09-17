module.exports = {
    darkMode: "class", // Enables class-based dark mode
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
                lightBackground: "#f5f5f5", // Softer light background
                lightText: "#4a4a4a", // Softer text color
                lightBorder: "#dcdcdc", // Softer border color
                lightNavbar: "#f0f0f0", // A soft light gray color
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
                "bounce-slow": "bounce 2s infinite",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-scrollbar"),
    ],
};
