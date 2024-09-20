"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes, FaMagic } from "react-icons/fa";
import { useParticles } from "../context/ParticlesContext";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["General", "Projects", "Blogs", "Experience", "Contact"];

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { particlesEnabled, toggleParticles } = useParticles();
    const [activeSection, setActiveSection] = useState<string>("general");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(scrolled);

            // Update active section based on scroll position
            let currentSection = "general";
            for (const section of sections) {
                const element = document.getElementById(section.toLowerCase());
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        currentSection = section.toLowerCase();
                    }
                }
            }

            // Check if the user has scrolled to the bottom of the page
            if (
                window.innerHeight + window.scrollY >=
                document.body.scrollHeight
            ) {
                currentSection = "contact";
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial call to set progress and active section on load
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
            const navbarHeight = 64; // Adjust this value to match your navbar height
            const yOffset = -navbarHeight + 5; // Increased from -20 to -40
            const y =
                section.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }
        setActiveSection(sectionId.toLowerCase());
        setIsSidebarOpen(false); // Close sidebar after navigation
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className={`${
                    theme === "dark" ? "bg-gray-900" : "bg-lightNavbar"
                } shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-500`}
            >
                <div className="container mx-auto p-4 flex justify-between items-center">
                    {/* Logo */}
                    <div
                        className={`text-xl font-bold ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                    >
                        <Link href="/">Nikita Pelagecha</Link>
                    </div>

                    {/* Section Buttons (Visible on md and above) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {sections.map((section) => (
                            <motion.button
                                key={section}
                                className={`px-3 py-1 rounded-full border ${
                                    activeSection === section.toLowerCase()
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : theme === "dark"
                                        ? "bg-transparent text-gray-300 border-transparent hover:border-gray-500 hover:text-white"
                                        : "bg-transparent text-gray-600 border-transparent hover:border-gray-400 hover:text-gray-800"
                                } transition-colors duration-300`}
                                onClick={() => scrollToSection(section)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {section}
                            </motion.button>
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        {/* About Link */}
                        <Link href="/about" passHref>
                            <span
                                className={`hidden md:block ${
                                    theme === "dark"
                                        ? "text-gray-300 hover:text-white"
                                        : "text-gray-600 hover:text-gray-800"
                                } cursor-pointer transition-colors duration-300 hover:underline`}
                            >
                                About
                            </span>
                        </Link>

                        {/* Toggle Theme */}
                        <motion.button
                            onClick={toggleTheme}
                            className="focus:outline-none"
                            aria-label="Toggle Theme"
                            whileHover={{ scale: 1.2 }}
                        >
                            {theme === "light" ? (
                                <FaSun className="text-yellow-500 hover:text-yellow-600" />
                            ) : (
                                <FaMoon className="text-gray-300 hover:text-white" />
                            )}
                        </motion.button>

                        {/* Toggle Particles */}
                        <motion.button
                            onClick={toggleParticles}
                            aria-label="Toggle Particles"
                            className="focus:outline-none"
                            whileHover={{ scale: 1.2 }}
                        >
                            <FaMagic
                                className={`${
                                    particlesEnabled
                                        ? "text-blue-500"
                                        : "text-gray-400"
                                } hover:text-teal-400`}
                            />
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden focus:outline-none"
                            onClick={() => setIsSidebarOpen(true)}
                            aria-label="Open menu"
                        >
                            <FaBars
                                className={
                                    theme === "dark"
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Progress Bar at the Bottom of the Viewport */}
            <div className="fixed bottom-0 left-0 right-0 z-40">
                <motion.div
                    className={`h-1 ${
                        theme === "dark" ? "bg-gray-700" : "bg-lightBorder"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress * 100}%` }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                >
                    <motion.div
                        className="h-full bg-black"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress * 100}%` }}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                    />
                </motion.div>
            </div>

            {/* Sidebar for Mobile Navigation */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className={`fixed top-0 right-0 h-full w-64 ${
                            theme === "dark" ? "bg-gray-800" : "bg-white"
                        } shadow-lg z-50`}
                    >
                        <div className="p-4 relative h-full">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 focus:outline-none"
                                onClick={() => setIsSidebarOpen(false)}
                                aria-label="Close menu"
                            >
                                <FaTimes className="text-gray-600 dark:text-gray-300" />
                            </button>

                            {/* Sidebar Content */}
                            <div className="mt-12 flex flex-col items-start space-y-6">
                                {/* Section Links */}
                                {sections.map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className={`w-full text-left py-2 px-4 rounded-lg text-lg font-medium ${
                                            activeSection ===
                                            section.toLowerCase()
                                                ? "bg-blue-500 text-white"
                                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        } transition-colors duration-300`}
                                    >
                                        {section}
                                    </button>
                                ))}

                                {/* About Link */}
                                <Link href="/about" passHref>
                                    <button
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`w-full text-left py-2 px-4 rounded-lg text-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300`}
                                    >
                                        About
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
