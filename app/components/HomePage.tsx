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
                } ${theme === "dark" ? "bg-gray-900" : "bg-lightBackground"}`}
            >
                {particlesEnabled && <ParticlesBackground />}
                <div className="relative z-10">
                    {/* General Section */}
                    <section
                        id="general"
                        className="relative h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 md:px-8"
                    >
                        <InfoSection />
                        {/* Scroll Down Button */}
                        <button
                            onClick={handleScroll}
                            className="mt-8 md:mt-0 md:ml-8 animate-bounce flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
                            aria-label="Scroll to Projects"
                        >
                            <FaChevronDown size={24} />
                        </button>
                    </section>

                    {/* Projects Section */}
                    <section
                        id="projects"
                        ref={nextSectionRef}
                        className="scroll-mt-20 px-4 md:px-8 py-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center"
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
                        <Projects />
                    </section>

                    {/* Blogs Section */}
                    <section
                        id="blogs"
                        className="scroll-mt-20 px-4 md:px-8 py-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center"
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
                        <Blogs />
                    </section>

                    {/* Experience Section */}
                    <section
                        id="experience"
                        className="scroll-mt-20 px-4 md:px-8 py-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center"
                        >
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                                Experience
                            </h2>
                        </motion.div>
                        <JobTimeline />
                    </section>

                    {/* Contact Section */}
                    <section
                        id="contact"
                        className="scroll-mt-20 px-4 md:px-8 py-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center"
                        >
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                                Contact
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                Get in touch with me for collaborations or
                                inquiries.
                            </p>
                        </motion.div>
                        <div className="max-w-md mx-auto">
                            <form className="flex flex-col space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    className="p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                    rows={5}
                                ></textarea>
                                <button
                                    type="submit"
                                    className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default HomePage;
