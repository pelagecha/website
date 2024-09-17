"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { useParticles } from "../context/ParticlesContext";
import { FaSnowflake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["General", "Projects", "Blogs", "Experience", "Contact"];

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const router = useRouter();
    const pathname = usePathname();
    const { particlesEnabled, toggleParticles } = useParticles();
    const [activeSection, setActiveSection] = useState<string>("general");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPercentage =
                scrollPosition / (documentHeight - windowHeight);
            setProgress(Math.min(scrollPercentage, 0.9999));

            // Check if scrolled to bottom
            const isAtBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 1;

            if (isAtBottom) {
                setActiveSection("Contact");
            } else {
                // Update active section based on scroll position
                const sectionElements = sections.map((section) =>
                    document.getElementById(section)
                );
                const activeIndex = sectionElements.findIndex((el, index) => {
                    if (!el) return false;
                    const rect = el.getBoundingClientRect();
                    const nextEl = sectionElements[index + 1];
                    const nextRect = nextEl
                        ? nextEl.getBoundingClientRect()
                        : { top: Infinity };
                    return rect.top <= 100 && nextRect.top > 100;
                });
                if (activeIndex !== -1) {
                    setActiveSection(sections[activeIndex]);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        if (sectionId === "general") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (pathname !== "/") {
            router.push(`/#${sectionId}`);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                const navbarHeight = 64; // Adjust this value to match your navbar height
                const offset = 20; // Additional offset to ensure the title is visible
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition +
                    window.pageYOffset -
                    navbarHeight -
                    offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }
        // Immediately update the active section
        setActiveSection(sectionId);
    };

    const getProgressColor = () => {
        return theme === "dark" ? "bg-emerald-600" : "bg-emerald-400";
    };

    return (
        <nav
            className={`${
                theme === "dark" ? "bg-gray-900" : "bg-white"
            } shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-500`}
        >
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    <Link href="/">Nikita Pelagecha</Link>
                </div>
                <div className="flex-1 flex justify-center">
                    <motion.div
                        className={`${
                            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                        } rounded-full h-10 w-2/3 flex items-center px-1 relative overflow-hidden`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        <motion.div
                            className={`absolute left-0 top-0 h-full ${getProgressColor()} rounded-full`}
                            style={{ width: `${progress * 100}%` }}
                            initial={false}
                            animate={{ width: `${progress * 100}%` }}
                            transition={{
                                type: "tween",
                                duration: 0.1,
                            }}
                        />
                        {sections.map((section) => (
                            <motion.button
                                key={section}
                                className={`relative flex-1 h-8 rounded-full text-xs font-medium z-10 ${
                                    activeSection === section
                                        ? theme === "dark"
                                            ? "text-white bg-emerald-700"
                                            : "text-white bg-emerald-500"
                                        : theme === "dark"
                                        ? "text-gray-300 hover:text-white"
                                        : "text-gray-600 hover:text-gray-800"
                                } transition-colors duration-300`}
                                onClick={() => scrollToSection(section)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {section === "general"
                                    ? "Home"
                                    : section.replace("-", " ")}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/about" passHref>
                        <span
                            className={`${
                                theme === "dark"
                                    ? "text-gray-300 hover:text-white"
                                    : "text-gray-600 hover:text-gray-800"
                            } cursor-pointer transition-colors duration-300`}
                        >
                            About
                        </span>
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="focus:outline-none p-2 rounded-md"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? (
                            <FaMoon
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                                size={20}
                            />
                        ) : (
                            <FaSun
                                className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
                                size={20}
                            />
                        )}
                    </button>
                    <button
                        onClick={toggleParticles}
                        aria-label="Toggle particles"
                    >
                        <FaSnowflake
                            className={`${
                                particlesEnabled
                                    ? "text-blue-500"
                                    : "text-gray-400"
                            } hover:text-blue-600 transition-colors duration-300`}
                            size={20}
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
