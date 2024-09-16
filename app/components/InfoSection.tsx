"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import Image from "next/image"; // Ensure this import is present
import ImageWithFallback from "./ImageWithFallback";

const InfoSection: React.FC = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${
                theme === "dark"
                    ? "bg-gray-800 bg-opacity-50 text-white"
                    : "bg-white-300    bg-opacity-90 text-gray-800"
            } p-8 rounded-2xl shadow-2xl max-w-6xl w-full mx-auto backdrop-blur-md`}
        >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ImageWithFallback
                    src="/images/me.png"
                    alt="Nikita Pelagecha"
                    width={200}
                    height={200}
                    className="object-cover rounded-xl"
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                    }}
                />
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
                    content="Proficient in Java, Python, Git, C++, C, SQL, JavaScript, TypeScript, React, Next.js, TailwindCSS, HTML, CSS"
                    size="large"
                />
                <InfoTile
                    title="Languages"
                    content="Fluent in English, Ukrainian and Russian"
                />
                <InfoTile
                    title="Social"
                    content={
                        <div className="flex space-x-4">
                            {/* Github */}
                            <a
                                href="https://github.com/pelagecha"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub
                                    size={24}
                                    className={
                                        theme === "dark"
                                            ? "text-white hover:text-gray-400 transition-colors"
                                            : "text-gray-800 hover:text-gray-600 transition-colors"
                                    }
                                />
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/pelagecha"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin
                                    size={24}
                                    className={
                                        theme === "dark"
                                            ? "text-white hover:text-blue-400 transition-colors"
                                            : "text-blue-700 hover:text-blue-500 transition-colors"
                                    }
                                />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/nikitapelagecha"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram
                                    size={24}
                                    className={
                                        theme === "dark"
                                            ? "text-white hover:text-gray-400 transition-colors"
                                            : "text-gray-800 hover:text-gray-600 transition-colors"
                                    }
                                />
                            </a>

                            {/* Mail */}
                            <a
                                href="mailto:nikitapelagecha@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaEnvelope
                                    size={24}
                                    className={
                                        theme === "dark"
                                            ? "text-white hover:text-gray-400 transition-colors"
                                            : "text-gray-800 hover:text-gray-600 transition-colors"
                                    }
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
            whileHover={{ scale: 1.05 }}
            className={`${
                theme === "dark"
                    ? "bg-gray-700 bg-opacity-50 text-white"
                    : "bg-gray-200 bg-opacity-80 text-gray-800"
            } p-4 rounded-xl ${size === "large" ? "col-span-2" : ""}`}
        >
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <div
                className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
            >
                {content}
            </div>
        </motion.div>
    );
};

export default InfoSection;
