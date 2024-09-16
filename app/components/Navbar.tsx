"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-800 dark:text-white"
                >
                    My Portfolio
                </Link>
                <div className="flex items-center space-x-4">
                    <Link
                        href="/"
                        className="hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Home
                    </Link>
                    <Link
                        href="/blogs"
                        className="hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/projects"
                        className="hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        About Me
                    </Link>
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="focus:outline-none"
                    >
                        {theme === "light" ? (
                            <FaMoon className="text-gray-800" size={20} />
                        ) : (
                            <FaSun className="text-yellow-400" size={20} />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
