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
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
            if (storedTheme) {
                return storedTheme;
            }
            // Check system preference
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        }
        return "light"; // Default for SSR
    });

    useEffect(() => {
        // Set initial theme class
        document.documentElement.classList.toggle("dark", theme === "dark");
        
        // Store theme in localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

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
