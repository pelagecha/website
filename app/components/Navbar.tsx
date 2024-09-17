"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { useParticles } from "../context/ParticlesContext";
import { FaSnowflake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["projects", "blogs", "job-timeline", "contact"];

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const router = useRouter();
    const pathname = usePathname();
    const { particlesEnabled, toggleParticles } = useParticles();
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const scrollPercentage =
                scrollPosition / (fullHeight - windowHeight);
            setProgress(Math.min(scrollPercentage, 0.9999)); // Limit to 99.99% to avoid filling the last button completely
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveSection(section);
                        }
                    },
                    { threshold: 0.5 }
                );
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        if (pathname !== "/") {
            router.push(`/#${sectionId}`);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
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
                            className={`absolute left-0 top-0 h-full ${
                                theme === "dark" ? "bg-blue-600" : "bg-blue-400"
                            } rounded-full`}
                            style={{ width: `${progress * 100}%` }}
                            initial={false}
                            animate={{ width: `${progress * 100}%` }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                            }}
                        />
                        {sections.map((section, index) => (
                            <motion.button
                                key={section}
                                className={`relative flex-1 h-8 rounded-full text-xs font-medium z-10 ${
                                    activeSection === section
                                        ? theme === "dark"
                                            ? "text-white bg-blue-700"
                                            : "text-white bg-blue-500"
                                        : theme === "dark"
                                        ? "text-gray-300 hover:text-white"
                                        : "text-gray-600 hover:text-gray-800"
                                } transition-colors duration-300`}
                                onClick={() => scrollToSection(section)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {section.replace("-", " ")}
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
