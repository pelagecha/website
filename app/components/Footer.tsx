"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useParticles } from "../context/ParticlesContext";

const Footer: React.FC = () => {
    const { particlesEnabled } = useParticles();

    return (
        <footer
            id="contact"
            className={`relative z-10 w-full ${
                particlesEnabled ? "bg-opacity-80 backdrop-blur-md" : ""
            }`}
        >
            <div className="flex flex-col md:flex-row">
                {/* Blue section (left half) */}
                <div
                    className={`w-full md:w-1/2 bg-blue-500 ${
                        particlesEnabled ? "bg-opacity-80" : ""
                    } p-4 text-white`}
                >
                    <h2 className="text-xl font-bold mb-2">Contact Me</h2>
                    <p className="mb-2 text-sm">
                        Feel free to reach out for collaborations or just a
                        friendly chat.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/pelagecha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/pelagecha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://twitter.com/pelagecha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="mailto:nikitapelagecha@gmail.com"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                {/* Yellow section (right half) */}
                <div
                    className={`w-full md:w-1/2 bg-yellow-400 ${
                        particlesEnabled ? "bg-opacity-80" : ""
                    } p-4 text-gray-800`}
                >
                    <h2 className="text-xl font-bold mb-2">About This Site</h2>
                    <p className="mb-2 text-sm">
                        This site is built with Next.js, TypeScript, Tailwind
                        CSS, and Framer Motion.
                    </p>

                    <p className="text-xs mt-2 whitespace-wrap text-ellipsis">
                        This work is licensed under a Creative Commons
                        Attribution-NonCommercial 4.0 International License.
                        <a
                            href="https://creativecommons.org/licenses/by-nc/4.0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline ml-1 hover:text-gray-600 transition-colors"
                        >
                            View License
                        </a>
                    </p>
                    <p className="text-sm mt-2">
                        © 2024 Nikita Pelagecha. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
