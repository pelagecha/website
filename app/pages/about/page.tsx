"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticlesBackground from "@/app/components/ParticlesBackground";

const AboutPage: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center">
            <ParticlesBackground />
            <main className="container mx-auto px-4 py-24 relative z-10 text-center">
                <h1 className="text-5xl font-bold text-black dark:text-white">
                    About Me
                </h1>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-semibold">
                    Hi! I&apos;m Nikita Pelagecha. I build software and train
                    deep neural networks.
                </p>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    This website was built using Next.js, React, framer-motion
                    and Tailwind CSS.
                </p>
                <div className="flex justify-center mt-8 space-x-4">
                    <Link href="/" passHref>
                        <motion.button
                            className="px-6 py-2 rounded-md shadow-md bg-blue-400 text-black hover:bg-blue-500 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Home
                        </motion.button>
                    </Link>
                    <motion.a
                        href="mailto:nikitapelagecha@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-md shadow-md bg-purple-400 text-black hover:bg-purple-500 dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact
                    </motion.a>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
