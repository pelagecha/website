"use client";

import React, { useContext, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Projects from "./Projects";
import JobTimeline from "./JobTimeline";
import InfoSection from "./InfoSection";
import { ThemeContext } from "../context/ThemeContext";
import { FaChevronDown } from "react-icons/fa";
import { useParticles } from "../context/ParticlesContext";
import { motion } from "framer-motion";

const sections = ["General", "Projects", "Blogs", "Experience", "Contact"];

const HomePage: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const { particlesEnabled } = useParticles();
    const nextSectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ParallaxProvider>
            <div
                className={`min-h-screen relative ${
                    particlesEnabled ? "" : "grainy-gradient"
                } bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900`}
            >
                {particlesEnabled && <ParticlesBackground />}
                <div className="relative z-10">
                    {/* General Section */}
                    <section
                        id="general"
                        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 py-16 md:py-24"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-teal-500/10 to-blue-500/10 dark:from-green-900/30 dark:via-teal-800/30 dark:to-blue-900/30 opacity-50"></div>
                        <InfoSection />
                        {/* Scroll Down Button */}
                        <button
                            onClick={handleScroll}
                            className="mt-8 animate-bounce flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300 relative z-10"
                            aria-label="Scroll to Projects"
                        >
                            <FaChevronDown size={24} />
                        </button>
                    </section>

                    {/* Projects Section */}
                    <section
                        id="projects"
                        ref={nextSectionRef}
                        className="scroll-mt-20 px-4 md:px-8 py-16 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-yellow-500/10 to-orange-500/10 dark:from-blue-900/30 dark:via-yellow-800/30 dark:to-orange-800/30 opacity-50"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center relative z-10"
                        >
                            <Link href="/projects" passHref>
                                <h2 className="text-4xl font-bold text-gray-800 dark:text-white cursor-pointer hover:underline">
                                    Projects
                                </h2>
                            </Link>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                A showcase of my recent work and
                                accomplishments.
                            </p>
                        </motion.div>
                        <div className="relative z-10">
                            <Projects />
                        </div>
                    </section>

                    {/* Blogs Section */}
                    <section
                        id="blogs"
                        className="scroll-mt-20 px-4 md:px-8 py-16 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-pink-500/10 to-red-500/10 dark:from-orange-800/30 dark:via-pink-900/30 dark:to-red-900/30 opacity-50"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center relative z-10"
                        >
                            <Link href="/blogs" passHref>
                                <h2 className="text-4xl font-bold text-gray-800 dark:text-white cursor-pointer hover:underline">
                                    Blogs
                                </h2>
                            </Link>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                Insights and articles on technology,
                                programming, and more.
                            </p>
                        </motion.div>
                        <div className="relative z-10">
                            <Blogs />
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section
                        id="experience"
                        className="scroll-mt-20 px-4 md:px-8 py-16 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-blue-500/10 to-purple-500/10 dark:from-red-900/30 dark:via-blue-900/30 dark:to-purple-900/30 opacity-50"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center relative z-10"
                        >
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                                Experience
                            </h2>
                        </motion.div>
                        <div className="relative z-10">
                            <JobTimeline />
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section
                        id="contact"
                        className="scroll-mt-0 px-0 md:px-0 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-indigo-500/10 to-cyan-500/10 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-cyan-800/30 opacity-50"></div>
                    </section>
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default HomePage;
