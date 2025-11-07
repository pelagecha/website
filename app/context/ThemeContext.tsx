// app/context/ThemeContext.tsx
"use client";

import React, { createContext, useState, useEffect } from "react";

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
    // Start with *undefined* – we’ll read the real value on first mount
    const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

    // Hydrate the state **after** mount (no DOM change needed)
    useEffect(() => {
        const stored = localStorage.getItem("theme") as "light" | "dark" | null;
        const resolved =
            stored ??
            (document.documentElement.classList.contains("dark")
                ? "dark"
                : "light");
        setTheme(resolved);
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";

            // Sync the class instantly
            document.documentElement.classList.toggle(
                "dark",
                newTheme === "dark"
            );
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    // Render nothing until we know the theme (prevents a flash of the wrong UI)
    if (theme === undefined) return null;

    return (
        <ThemeContext.Provider
            value={{ theme: theme as "light" | "dark", toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
