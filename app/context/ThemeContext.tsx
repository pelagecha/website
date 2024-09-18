// app/context/ThemeContext.tsx
"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as
            | "light"
            | "dark"
            | null;
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
        document.documentElement.classList.toggle(
            "dark",
            initialTheme === "dark"
        );
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";
            document.documentElement.classList.toggle(
                "dark",
                newTheme === "dark"
            );
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    if (theme === null) {
        return null; // or a loading spinner
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
