"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-gray-100 dark:bg-gray-800 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Contact Me
                </h2>
                <div className="flex justify-center space-x-6 mb-8">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
