"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import Image from "next/image"; // Ensure this import is present
import { SiLeetcode } from "react-icons/si";

// Interface for InfoTile props
interface InfoTileProps {
    title: string;
    content: string | React.ReactNode;
    size?: "normal" | "large";
    centerContent?: boolean;
}

// InfoTile Component
const InfoTile: React.FC<InfoTileProps> = ({
    title,
    content,
    size = "normal",
    centerContent = true,
}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0.25, y: 0 },
                visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.01 }}
            className={`
                ${
                    theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800" // Changed from gradient to solid white
                }
                p-5 sm:p-6 rounded-xl ${
                    theme === "dark" ? "shadow-lg" : "shadow-md" // Use a lighter shadow in light mode
                }
                ${size === "large" ? "col-span-1 sm:col-span-2" : ""}
                ${
                    theme === "dark"
                        ? "border border-[#cfc4af]"
                        : "border border-gray-400" // Lighter border in light mode
                }
                transition-all duration-400 ease-in-out
            `}
        >
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">
                {title}
            </h2>
            <div
                className={`text-sm sm:text-base ${
                    theme === "dark" ? "text-white" : "text-gray-700" // Slightly darker text in light mode
                } ${centerContent ? "text-center" : ""}
                `}
            >
                {content}
            </div>
        </motion.div>
    );
};

// InfoSection Component
const InfoSection: React.FC = () => {
    const { theme } = useContext(ThemeContext);

    // Define animation variants for parent and children
    const containerVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: {
            opacity: 1,
            y: 0,
            // transition: {
            //     staggerChildren: 0.2,
            //     duration: 0,
            // },
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
                    ? "bg-gray-900 bg-opacity-10 text-white" // Semi-transparent dark background
                    : "bg-transparent text-gray-800" // Fully transparent in light mode
            } p-4 sm:p-8 md:p-12 rounded-3xl max-w-7xl w-full mx-auto backdrop-blur-sm transition-colors duration-500`}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {/* Profile Image */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center items-center col-span-1 sm:col-span-2 lg:col-span-1 mb-4 sm:mb-0"
                >
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative">
                        <Image
                            src="/images/me.jpeg"
                            alt="Nikita Pelagecha"
                            fill
                            style={{
                                objectFit: "cover",
                                pointerEvents: "none",
                            }}
                            className={`rounded-3xl border-4 ${
                                theme === "dark"
                                    ? "border-gray-700"
                                    : "border-black"
                            } shadow-lg`}
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
                                    className={`${
                                        theme === "dark"
                                            ? "text-indigo-400"
                                            : "text-indigo-500"
                                    } hover:underline font-bold`}
                                >
                                    University of Warwick
                                </a>
                                <strong> '26</strong>{" "}
                            </p>
                            <hr className="my-2 border-t border-gray-300 dark:border-gray-600" />
                            <div className="text-left">
                                <p>BSc Hons Computer Science</p>
                                <p>
                                    <strong>Y1:</strong> 1st Class
                                    <br />
                                    <strong>Y2:</strong> Ongoing
                                </p>
                            </div>
                        </>
                    }
                />
                <InfoTile
                    title="Latest Position"
                    content={
                        <div className="space-y-2">
                            <div className="text-center">
                                <p className="font-semibold">
                                    ML Research Intern @{" "}
                                    <a
                                        href="https://warwick.ac.uk/fac/sci/dcs/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${
                                            theme === "dark"
                                                ? "text-indigo-400"
                                                : "text-indigo-500"
                                        } hover:underline font-bold`}
                                    >
                                        DCS
                                    </a>
                                </p>
                            </div>
                            <hr className="my-2 border-t border-gray-300 dark:border-gray-600" />
                            <ul className="list-disc list-inside text-sm text-center">
                                Designed and implemented <br></br>multi-agent
                                LLM Retrieval Augmented Generation models under
                                the supervision of <br></br>
                                <a
                                    href="https://scholar.google.co.uk/citations?user=YBQai3gAAAAJ&hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${
                                        theme === "dark"
                                            ? "text-indigo-400"
                                            : "text-indigo-500"
                                    } hover:underline font-bold`}
                                >
                                    Prof. Long Tran-Thanh
                                </a>
                            </ul>
                        </div>
                    }
                    centerContent={false}
                />
                <InfoTile
                    title="Competitions"
                    content={
                        <div className="space-y-2">
                            <p className="font-semibold text-center">
                                <a
                                    href="https://nwerc.eu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${
                                        theme === "dark"
                                            ? "text-indigo-400"
                                            : "text-indigo-500"
                                    } hover:underline font-bold`}
                                >
                                    NWERC,
                                </a>{" "}
                                <a
                                    href="https://ukiepc.info/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${
                                        theme === "dark"
                                            ? "text-indigo-400"
                                            : "text-indigo-500"
                                    } hover:underline font-bold`}
                                >
                                    UKIEPC(23', 24')
                                </a>{" "}
                                <a
                                    href="https://ichack.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${
                                        theme === "dark"
                                            ? "text-indigo-400"
                                            : "text-indigo-500"
                                    } hover:underline font-bold`}
                                >
                                    ICHack,
                                </a>{" "}
                                <a
                                    href="https://www.warwickhack.co.uk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${
                                        theme === "dark"
                                            ? "text-indigo-400"
                                            : "text-indigo-500"
                                    } hover:underline font-bold`}
                                >
                                    WHack
                                </a>
                            </p>
                            <hr className="my-2 border-t border-gray-300 dark:border-gray-600" />
                            <div className="text-sm text-center">
                                <p>
                                    Achieved 36th place in UKIEPC, represented
                                    Warwick at NWERC and placed 7th in the
                                    Optiver trading simulation challenge at
                                    ICHack.
                                </p>
                            </div>
                        </div>
                    }
                    centerContent={false}
                />
                <InfoTile
                    title="Technical Skills"
                    size="large"
                    content={
                        <div className="space-y-2 text-xs sm:text-sm">
                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 p-2 rounded-lg grid grid-cols-[auto,1fr] gap-x-7">
                                <p className="font-semibold text-indigo-700 dark:text-indigo-300 self-start">
                                    Proficient:
                                </p>
                                <p className="text-indigo-600 dark:text-indigo-200">
                                    Python, Java, HTML/CSS/JS, Git, LaTeX
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 p-2 rounded-lg grid grid-cols-[auto,1fr] gap-x-3">
                                <p className="font-semibold text-teal-700 dark:text-teal-300 self-start">
                                    Intermediate:
                                </p>
                                <p className="text-teal-600 dark:text-teal-200">
                                    C, SQL, Haskell, Swift, TypeScript
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 p-2 rounded-lg grid grid-cols-[auto,1fr] gap-x-9">
                                <p className="font-semibold text-amber-700 dark:text-amber-300 self-start">
                                    Familiar:
                                </p>
                                <p className="text-amber-600 dark:text-amber-200">
                                    C++, Bash
                                </p>
                            </div>
                        </div>
                    }
                    centerContent={false}
                />

                <InfoTile
                    title="Languages"
                    content="English, Ukrainian, Russian"
                />
                <InfoTile
                    title="Contact"
                    content={
                        <div className="flex justify-center space-x-6">
                            {/* GitHub */}
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
                                            ? "text-white hover:text-purple-400"
                                            : "text-gray-800 hover:text-purple-600"
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
                                            ? "text-white hover:text-purple-400"
                                            : "text-blue-700 hover:text-purple-500"
                                    } transition-colors duration-300`}
                                />
                            </a>

                            {/* LeetCode */}
                            <a
                                href="https://leetcode.com/u/pelagecha/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LeetCode"
                                className="transform hover:scale-110 transition-transform duration-300 ease-in-out"
                            >
                                <SiLeetcode
                                    size={28}
                                    className={`${
                                        theme === "dark"
                                            ? "text-white hover:text-purple-400"
                                            : "text-blue-700 hover:text-purple-500"
                                    } transition-colors duration-300`}
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

export default InfoSection;
