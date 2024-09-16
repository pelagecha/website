"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-500">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    <Link href="/">My Portfolio</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link
                        href="/blogs"
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/projects"
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        About
                    </Link>
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
