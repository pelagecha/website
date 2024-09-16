"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

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
                    : "bg-white bg-opacity-90 text-gray-800"
            } p-8 rounded-3xl shadow-2xl max-w-4xl w-full mx-auto backdrop-blur-md`}
        >
            <h1 className="text-4xl font-bold mb-6">Nikita Pelagecha</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <InfoTile title="Experience" content="5+ years in Python" />
                <InfoTile title="Competition" content="NWERC Contestant" />
                <InfoTile title="Position" content="Software Engineer" />
                <InfoTile
                    title="Education"
                    content="CS at University of Warwick"
                    size="large"
                />
                <InfoTile
                    title="Social"
                    content={
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/yourusername"
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
                            <a
                                href="https://linkedin.com/in/yourusername"
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
