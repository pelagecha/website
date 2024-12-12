"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticlesBackground from "../components/ParticlesBackground";

const AboutPage: React.FC = () => {
    return (
        <>
            <div className="relative min-h-screen bg-white dark:bg-gray-900">
                <ParticlesBackground />
                <main className="container mx-auto px-4 py-24 relative z-10">
                    <motion.h1
                        className="text-5xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 cursor-default inline-block pb-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, color: "#3B82F6" }}
                    >
                        About Me
                    </motion.h1>
                    <motion.div
                        className="space-y-6 text-lg text-gray-800 dark:text-gray-300 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-lg p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 1,
                            ease: "easeOut",
                        }}
                    >
                        <p className="leading-relaxed">
                            Hello! I'm{" "}
                            <span className="font-semibold">
                                Nikita Pelagecha
                            </span>
                            , a Computer Science student at the University of
                            Warwick. I am passionate about developing quality
                            software and training deep neural networks.
                        </p>
                        <p className="leading-relaxed">
                            I hope this website provides a comprehensive
                            introduction to my professional and academic
                            journey, as well as offers a glimpse into my
                            personal interests. Feel free to explore and reach
                            out if you have any questions.
                        </p>
                        <motion.div
                            className="p-6 bg-blue-50/70 dark:bg-cyan-900/70 rounded-md shadow-inner border border-blue-300 dark:border-cyan-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 0.6,
                                duration: 1,
                                ease: "easeOut",
                            }}
                        >
                            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
                                This website was built using{" "}
                                <span className="font-semibold text-blue-700 dark:text-blue-300">
                                    Next.js
                                </span>{" "}
                                with TypeScript, Tailwind CSS, and Framer
                                Motion.
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="flex justify-center mt-10">
                        <Link href="/" passHref>
                            <motion.button
                                className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                Explore
                            </motion.button>
                        </Link>
                    </motion.div>
                </main>
            </div>
        </>
    );
};

export default AboutPage;
