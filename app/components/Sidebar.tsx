"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    FaTimes,
    FaHome,
    FaProjectDiagram,
    FaBlog,
    FaBriefcase,
    FaEnvelope,
    FaInfoCircle,
} from "react-icons/fa";
import Link from "next/link";

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
    theme: string;
    sections: string[];
    activeSection: string;
    scrollToSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    isSidebarOpen,
    setIsSidebarOpen,
    theme,
    sections,
    activeSection,
    scrollToSection,
}) => {
    return (
        <AnimatePresence>
            {isSidebarOpen && (
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className={`fixed top-0 right-0 h-full w-80 ${
                        theme === "dark" ? "bg-gray-900" : "bg-white"
                    } shadow-xl z-50 overflow-y-auto`}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="p-6 relative h-full flex flex-col"
                    >
                        {/* Close Button */}
                        <motion.button
                            className="absolute top-5 right-5 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white focus:outline-none"
                            onClick={() => setIsSidebarOpen(false)}
                            aria-label="Close menu"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaTimes className="text-2xl" />
                        </motion.button>

                        {/* Sidebar Header */}
                        <motion.h2
                            className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-8"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }} // Reduced delay and duration
                        >
                            Menu
                        </motion.h2>

                        {/* Sidebar Content */}
                        <nav className="flex-1">
                            <ul className="space-y-4">
                                {sections.map((section, index) => (
                                    <motion.li
                                        key={section}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.1 + index * 0.03, // Reduced delay and interval
                                            duration: 0.2, // Reduced duration
                                        }}
                                    >
                                        <button
                                            onClick={() => {
                                                scrollToSection(section);
                                                setIsSidebarOpen(false);
                                            }}
                                            className={`flex items-center w-full py-3 px-4 rounded-lg text-lg font-medium transition-colors duration-300 ${
                                                activeSection ===
                                                section.toLowerCase()
                                                    ? "bg-blue-600 text-white"
                                                    : "text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800"
                                            }`}
                                        >
                                            {getSectionIcon(section)}
                                            <span className="ml-3">
                                                {section}
                                            </span>
                                        </button>
                                    </motion.li>
                                ))}

                                {/* About Link */}
                                <motion.li
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.1 + sections.length * 0.03, // Reduced delay and interval
                                        duration: 0.2, // Reduced duration
                                    }}
                                >
                                    <Link href="/about" passHref>
                                        <motion.a
                                            onClick={() =>
                                                setIsSidebarOpen(false)
                                            }
                                            className="flex items-center w-full py-3 px-4 rounded-lg text-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
                                        >
                                            <FaInfoCircle className="text-xl" />
                                            <span className="ml-3">About</span>
                                        </motion.a>
                                    </Link>
                                </motion.li>
                            </ul>
                        </nav>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Helper function to get icons based on section name
const getSectionIcon = (section: string) => {
    switch (section.toLowerCase()) {
        case "general":
            return <FaHome className="text-xl" />;
        case "projects":
            return <FaProjectDiagram className="text-xl" />;
        case "blogs":
            return <FaBlog className="text-xl" />;
        case "experience":
            return <FaBriefcase className="text-xl" />;
        case "contact":
            return <FaEnvelope className="text-xl" />;
        default:
            return <FaInfoCircle className="text-xl" />;
    }
};

export default Sidebar;
