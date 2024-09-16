"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const InfoSection: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-3xl shadow-2xl max-w-4xl w-full mx-auto"
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
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={24} />
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
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className={`bg-gray-700 p-4 rounded-xl ${
                size === "large" ? "col-span-2" : ""
            }`}
        >
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <div className="text-gray-300">{content}</div>
        </motion.div>
    );
};

export default InfoSection;
