"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
    FaCode,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import Image from "next/image"; // Ensure this import is present
import ImageWithFallback from "./ImageWithFallback";

const InfoSection: React.FC = () => {
    const { theme } = useContext(ThemeContext);

    // Define animation variants for parent and children
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`${
                theme === "dark"
                    ? "bg-gray-800 bg-opacity-60 text-white"
                    : "bg-white bg-opacity-90 text-lightText"
            } p-4 sm:p-8 md:p-12 rounded-3xl shadow-2xl max-w-7xl w-full mx-auto backdrop-blur-lg`}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {/* Profile Image */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center items-center col-span-1 sm:col-span-2 lg:col-span-1 mb-4 sm:mb-0"
                >
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative">
                        <ImageWithFallback
                            src="/images/me.png"
                            alt="Nikita Pelagecha"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-3xl border-4 border-black shadow-lg"
                        />
                    </div>
                </motion.div>

                {/* Information Tiles */}
                <InfoTile
                    title="Education"
                    content={
                        <>
                            <p>
                                <a
                                    href="https://warwick.ac.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    University of Warwick
                                </a>
                                <strong> '26</strong>{" "}
                            </p>
                            <p>BSc Hons Computer Science</p>
                            <p>
                                <strong>Y1:</strong> 1st Class
                            </p>
                        </>
                    }
                />
                <InfoTile
                    title="Current Position"
                    content={
                        <div className="space-y-2">
                            <p className="font-semibold">ML Research Intern</p>
                            <p>
                                <a
                                    href="https://warwick.ac.uk/fac/sci/dcs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Department of Computer Science, University
                                    of Warwick
                                </a>
                            </p>
                            <ul className="list-disc list-inside text-sm">
                                Designing Algorithmic ML models and developing
                                LLM agents under the supervision of Dr. Long
                                Tran-Thanh
                            </ul>
                        </div>
                    }
                />
                <InfoTile
                    title="Competitions"
                    content={
                        <div className="space-y-2">
                            <p className="font-semibold">
                                <a
                                    href="https://ichack.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    ICHack
                                </a>
                                ,{" "}
                                <a
                                    href="https://ukiepc.info/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    UKIEPC
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://nwerc.eu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    NWERC
                                </a>{" "}
                            </p>
                            <div className="text-sm">
                                <p>
                                    Achieved 53rd place in UKIEPC, represented
                                    Warwick at NWERC.
                                </p>
                                <hr className="my-2 border-t border-gray-300 dark:border-gray-600" />
                                <p>
                                    Placed 7th in the optiver trading simulation
                                    challenge.
                                </p>
                            </div>
                        </div>
                    }
                />
                <InfoTile
                    title="Technical Skills"
                    size="large"
                    content={
                        <div className="space-y-2 text-xs sm:text-sm">
                            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg grid grid-cols-[auto,1fr] gap-x-2">
                                <p className="font-semibold text-blue-800 dark:text-blue-200">
                                    Proficient:
                                </p>
                                <p className="text-blue-700 dark:text-blue-300">
                                    Java, Python, HTML, CSS, Git, LaTeX
                                </p>
                            </div>
                            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg grid grid-cols-[auto,1fr] gap-x-2">
                                <p className="font-semibold text-green-800 dark:text-green-200">
                                    Intermediate:
                                </p>
                                <p className="text-green-700 dark:text-green-300">
                                    C, C++, Haskell, Javascript, Next.js
                                </p>
                            </div>
                            <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg grid grid-cols-[auto,1fr] gap-x-2">
                                <p className="font-semibold text-yellow-800 dark:text-yellow-200">
                                    Familiar:
                                </p>
                                <p className="text-yellow-700 dark:text-yellow-300">
                                    TypeScript, SQL, Tailwind CSS
                                </p>
                            </div>
                        </div>
                    }
                />

                <InfoTile
                    title="Languages"
                    content="English, Ukrainian and Russian"
                />
                <InfoTile
                    title="Social"
                    content={
                        <div className="flex space-x-6">
                            {/* Github */}
                            <a
                                href="https://github.com/pelagecha"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="transform hover:scale-110 transition-transform"
                            >
                                <FaGithub
                                    size={28}
                                    className={`${
                                        theme === "dark"
                                            ? "text-white hover:text-blue-400"
                                            : "text-gray-800 hover:text-blue-600"
                                    } transition-colors duration-300`}
                                />
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/pelagecha"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="transform hover:scale-110 transition-transform"
                            >
                                <FaLinkedin
                                    size={28}
                                    className={`${
                                        theme === "dark"
                                            ? "text-white hover:text-blue-400"
                                            : "text-blue-700 hover:text-blue-500"
                                    } transition-colors duration-300`}
                                />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/nikitapelagecha"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="transform hover:scale-110 transition-transform"
                            >
                                <FaInstagram
                                    size={28}
                                    className={`${
                                        theme === "dark"
                                            ? "text-white hover:text-pink-400"
                                            : "text-pink-600 hover:text-pink-400"
                                    } transition-colors duration-300`}
                                />
                            </a>
                            {/* LeetCode */}
                            <a
                                href="https://leetcode.com/u/pelagecha/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LeetCode"
                                className="transform hover:scale-110 transition-transform"
                            >
                                <Image
                                    src="/images/leetcode.png"
                                    alt="LeetCode"
                                    width={32}
                                    height={32}
                                    className={`w-7 h-7 object-contain ${
                                        theme === "dark"
                                            ? "filter invert brightness-0 hover:brightness-100 hover:invert-0"
                                            : "hover:filter hover:brightness-75"
                                    } transition-all duration-300`}
                                />
                            </a>

                            {/* Mail */}
                            <a
                                href="mailto:nikitapelagecha@gmail.com"
                                aria-label="Email"
                                className="transform hover:scale-110 transition-transform"
                            >
                                <FaEnvelope
                                    size={28}
                                    className={`${
                                        theme === "dark"
                                            ? "text-white hover:text-yellow-400"
                                            : "text-gray-800 hover:text-yellow-600"
                                    } transition-colors duration-300`}
                                />
                            </a>
                        </div>
                    }
                />
            </div>
        </motion.div>
    );
};

interface InfoTileProps {
    title: string;
    content: string | React.ReactNode;
    size?: "normal" | "large";
}

const InfoTile: React.FC<InfoTileProps> = ({
    title,
    content,
    size = "normal",
}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02 }}
            className={`
                ${
                    theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                }
                p-5 sm:p-6 rounded-xl shadow-lg
                ${size === "large" ? "col-span-1 sm:col-span-2" : ""}
                border ${
                    theme === "dark" ? "border-gray-700" : "border-gray-200"
                }
                transition-all duration-300 ease-in-out
            `}
        >
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                {title}
            </h2>
            <div
                className={`text-sm sm:text-base ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                }`}
            >
                {content}
            </div>
        </motion.div>
    );
};

export default InfoSection;
