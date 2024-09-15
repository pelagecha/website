// app/components/SocialLinks.tsx

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks: React.FC = () => {
    return (
        <div className="flex space-x-4">
            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
                <FaGithub size={24} />
            </a>
            <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
                <FaLinkedin size={24} />
            </a>
            <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
                <FaTwitter size={24} />
            </a>
            {/* Add more social icons as needed */}
        </div>
    );
};

export default SocialLinks;
