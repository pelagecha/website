"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
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
            } p-12 rounded-3xl shadow-2xl max-w-7xl w-full mx-auto backdrop-blur-lg`}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Profile Image */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center items-center"
                >
                    <ImageWithFallback
                        src="/images/me.png"
                        alt="Nikita Pelagecha"
                        width={250}
                        height={250}
                        className="object-cover rounded-3xl border-4 border-black shadow-lg"
                        style={{
                            // Center the image within its container
                            margin: "auto",
                        }}
                    />
                </motion.div>

                {/* Information Tiles */}
                <InfoTile
                    title="Education"
                    content="University of Warwick - BSc Hons Computer Science"
                />
                <InfoTile
                    title="Current Position"
                    content="ML Research Intern at DCS Warwick"
                />
                <InfoTile
                    title="Competitions"
                    content="NWERC and UKIEPC 2024 Contestant"
                />
                <InfoTile
                    title="Technical Skills"
                    content="Java, Python, Git, C++, C, SQL, JavaScript, TypeScript, React, Next.js, TailwindCSS, HTML, CSS"
                    size="large"
                />
                <InfoTile title="Languages" content="English, Ukrainian" />
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
            whileHover={{ scale: 1.05 }}
            className={`${
                theme === "dark"
                    ? "bg-gray-700 bg-opacity-50 text-white"
                    : "bg-gray-100 bg-opacity-80 text-gray-800"
            } p-6 rounded-xl shadow-md ${size === "large" ? "col-span-1" : ""}`}
        >
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <div
                className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
            >
                {content}
            </div>
        </motion.div>
    );
};

export default InfoSection;
