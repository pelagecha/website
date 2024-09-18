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
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Load theme from localStorage or use dark as default on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as
            | "light"
            | "dark"
            | null;
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        document.documentElement.classList.toggle("dark", theme === "dark");
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
