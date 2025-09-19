"use client";

import React, { useContext, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";
import JobTimeline from "./JobTimeline";
import InfoSection from "./InfoSection";
import { FaChevronDown } from "react-icons/fa";
import { useParticles } from "../context/ParticlesContext";
import { motion } from "framer-motion";
import Story from "./Story";

const HomePage: React.FC = () => {
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
                        className="relative min-h-screen flex flex-col items-center justify-start pt-4 sm:pt-8 md:pt-16 lg:pt-10 overflow-hidden px-4 md:px-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-teal-500/10 to-blue-500/10 dark:from-blue-900/30 dark:via-teal-800/30 dark:to-blue-900/30 opacity-50"></div>
                        <div className="flex items-center justify-center w-full">
                            <InfoSection />
                        </div>
                        <div className="relative bottom-0 flex justify-center w-full hidden md:flex">
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                                className="cursor-pointer"
                                onClick={handleScroll}
                            >
                                <FaChevronDown className="text-4xl text-gray-600 dark:text-gray-400" />
                            </motion.div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section
                        id="projects"
                        ref={nextSectionRef}
                        className="scroll-mt-20 px-4 md:px-8 py-16 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-yellow-500/10 to-green-500/10 dark:from-blue-900/30 dark:via-yellow-800/30 dark:to-green-800/30 opacity-50"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center relative z-10"
                        >
                            <Link href="/projects" passHref>
                                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 cursor-pointer hover:underline">
                                    Projects
                                </h2>
                            </Link>
                            {/* <p className="mt-4 text-gray-600 dark:text-gray-300">
                                A showcase of my recent work and
                                accomplishments.
                            </p> */}
                        </motion.div>
                        <div className="relative z-10">
                            <Story storyType={"projects"} />
                        </div>
                    </section>

                    {/* Notes Section */}
                    {/* app/data/notes/CS254_Notes___Algorithmic_Graph_Theory.pdf */}
                    <section
                        id="notes"
                        className="scroll-mt-20 px-4 md:px-8 py-16 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-pink-500/10 to-red-500/10 dark:from-green-800/30 dark:via-pink-900/30 dark:to-red-900/30 opacity-50"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center relative z-10"
                        >
                            {/* <Link href="/notes" passHref> */}
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                                Notes
                            </h2>
                            {/* </Link> */}
                        </motion.div>
                        <div className="relative z-10">
                            <Story storyType={"notes"} />
                        </div>
                    </section>

                    {/* Blogs Section */}
                    {/* <section
                        id="blogs"
                        className="scroll-mt-20 px-4 md:px-8 py-16 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-pink-500/10 to-red-500/10 dark:from-green-800/30 dark:via-pink-900/30 dark:to-red-900/30 opacity-50"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 text-center relative z-10"
                        >
                            <Link href="/blogs" passHref>
                                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 cursor-pointer hover:underline">
                                    Blogs
                                </h2>
                            </Link> */}
                    {/* <p className="mt-4 text-gray-600 dark:text-gray-300">
                                Insights and articles on technology,
                                programming, and more.
                            </p> */}
                    {/* </motion.div>
                        <div className="relative z-10">
                            <Story storyType={"blogs"} />
                        </div>
                    </section> */}

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
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                                Experience
                            </h2>
                        </motion.div>
                        <div className="relative z-10">
                            <JobTimeline />
                        </div>
                        <div className="flex flex-col items-center mt-8 space-y-2 relative z-10">
                            <button
                                onClick={() =>
                                    (window.location.href = "/products")
                                }
                                className="inline-block bg-transparent border border-gray-500 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:bg-opacity-25 transition ease-in-out duration-200"
                            >
                                Explore My Other Projects
                            </button>

                            <a
                                href="mailto:nikitapelagecha@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-transparent border border-gray-500 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:bg-opacity-25 transition ease-in-out duration-200"
                            >
                                Contact me
                            </a>
                        </div>
                    </section>

                    {/* Contact Section */}
                    {/* <section
                        id="contact"
                        className="scroll-mt-0 px-0 md:px-0 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-indigo-500/10 to-cyan-500/10 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-cyan-800/30 opacity-50"></div>
                    </section> */}
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default HomePage;
