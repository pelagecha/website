"use client";

import React, { useContext } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaInstagram,
    FaInfoCircle,
} from "react-icons/fa";
import { useParticles } from "../context/ParticlesContext";
import { ThemeContext } from "../context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    const { particlesEnabled } = useParticles();
    const { theme } = useContext(ThemeContext);

    return (
        <footer
            id="contact"
            className={`relative z-10 w-full ${
                theme === "dark" ? "bg-gray-900" : "bg-lightNavbar"
            } ${
                particlesEnabled ? "bg-opacity-80 backdrop-blur-md" : ""
            } shadow-md`}
        >
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 dark:text-gray-300">
                            © 2024 Nikita Pelagecha. All rights reserved. 🇺🇦
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <SocialLink
                            href="https://github.com/pelagecha"
                            icon={FaGithub}
                            label="GitHub"
                        />
                        <SocialLink
                            href="https://linkedin.com/in/pelagecha"
                            icon={FaLinkedin}
                            label="LinkedIn"
                        />
                        {/* <SocialLink
                            href="https://instagram.com/nikitapelagecha"
                            icon={FaInstagram}
                            label="Instagram"
                        /> */}
                        <SocialLink
                            href="https://leetcode.com/u/pelagecha/"
                            icon={LeetCodeIcon}
                            label="LeetCode"
                        />
                        <SocialLink
                            href="mailto:nikitapelagecha@gmail.com"
                            icon={FaEnvelope}
                            label="Email"
                        />
                        <Link href="/about">
                            <FaInfoCircle
                                size={24}
                                className={`${
                                    theme === "dark"
                                        ? "text-white hover:text-blue-400"
                                        : "text-gray-800 hover:text-blue-600"
                                } transition-colors duration-300`}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

interface SocialLinkProps {
    href: string;
    icon: React.ElementType;
    label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transform hover:scale-110 transition-transform"
        >
            <Icon
                size={24}
                className={`${
                    theme === "dark"
                        ? "text-white hover:text-blue-400"
                        : "text-gray-800 hover:text-blue-600"
                } transition-colors duration-300`}
            />
        </a>
    );
};

const LeetCodeIcon: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Image
            src="/images/leetcode.png"
            alt="LeetCode"
            width={24}
            height={24}
            className={`w-6 h-6 object-contain ${
                theme === "dark"
                    ? "filter invert brightness-0 hover:brightness-100 hover:invert-0"
                    : "hover:filter hover:brightness-75"
            } transition-all duration-300`}
        />
    );
};

export default Footer;
