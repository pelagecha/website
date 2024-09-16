"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-500">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    <Link href="/">Nikita Pelagecha</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => scrollToSection("job-experiences")}
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection("blogs")}
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Blogs
                    </button>
                    <Link href="/about" passHref>
                        <span className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
                            About
                        </span>
                    </Link>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Contact
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="focus:outline-none p-2 rounded-md"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? (
                            <FaMoon className="text-gray-200" size={20} />
                        ) : (
                            <FaSun className="text-yellow-500" size={20} />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
