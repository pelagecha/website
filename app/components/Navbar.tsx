"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useParticles } from "../context/ParticlesContext";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation"; // Updated import
import Sidebar from "./Sidebar"; // Import the new Sidebar component

const sections = ["General", "Projects", "Blogs", "Experience"];

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { particlesEnabled, toggleParticles } = useParticles();
    const [activeSection, setActiveSection] = useState<string>("general");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const router = useRouter();
    const pathname = usePathname(); // Get current pathname

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(scrolled);

            // Update active section based on scroll position
            let currentSection =
                pathname === "/" ? "general" : pathname.substring(1); // Set active section based on pathname
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
                pathname === "/" &&
                window.innerHeight + window.scrollY >=
                    document.body.scrollHeight
            ) {
                currentSection = "contact"; // Only highlight "contact" if on the main page
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial call to set progress and active section on load
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const scrollToSection = (sectionId: string) => {
        if (pathname !== "/") {
            // Use pathname instead of router.pathname
            router.push(`/#${sectionId.toLowerCase()}`);
        } else {
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
                        {/* Products */}
                        <div className="hidden md:block">
                            <motion.button
                                className={`px-3 py-1 rounded-full border ${
                                    pathname === "/products" // Check if on the products page
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : theme === "dark"
                                        ? "bg-transparent text-gray-300 border-transparent hover:border-gray-500 hover:text-white"
                                        : "bg-transparent text-gray-600 border-transparent hover:border-gray-400 hover:text-gray-800"
                                } transition-colors duration-300`}
                                onClick={() => {
                                    if (pathname !== "/products") {
                                        router.push("/products");
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Products
                            </motion.button>
                        </div>
                        {/* About Link */}
                        <div className="hidden md:block">
                            <motion.button
                                className={`px-3 py-1 rounded-full border ${
                                    pathname === "/about" // Check if on the products page
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : theme === "dark"
                                        ? "bg-transparent text-gray-300 border-transparent hover:border-gray-500 hover:text-white"
                                        : "bg-transparent text-gray-600 border-transparent hover:border-gray-400 hover:text-gray-800"
                                } transition-colors duration-300`}
                                onClick={() => {
                                    if (pathname !== "/about") {
                                        router.push("/about");
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                About
                            </motion.button>
                        </div>

                        {/* Toggle Theme */}
                        <motion.button
                            onClick={toggleTheme}
                            className="focus:outline-none"
                            aria-label="Toggle Theme"
                            whileHover={{ scale: 1.2 }}
                        >
                            {theme === "dark" ? (
                                <FaSun className="text-yellow-500 hover:text-yellow-600" />
                            ) : (
                                <FaMoon className="text-gray-600 hover:text-gray-700" />
                            )}
                        </motion.button>

                        {/* Toggle Particles */}
                        <motion.button
                            onClick={toggleParticles}
                            aria-label="Toggle Particles"
                            className="focus:outline-none"
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className={`${
                                    particlesEnabled
                                        ? "bg-blue-500"
                                        : "bg-gray-400"
                                } hover:bg-teal-400 w-4 h-4 rounded-full`}
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

            {/* New Sidebar Component */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                theme={theme}
                sections={sections}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />
        </>
    );
};

export default Navbar;
