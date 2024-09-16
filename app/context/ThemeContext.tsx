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

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Load theme from localStorage or system preference on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as
            | "light"
            | "dark"
            | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle(
                "dark",
                storedTheme === "dark"
            );
        } else {
            // Optionally, use system preference
            const prefersDark =
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", prefersDark);
        }
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

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
