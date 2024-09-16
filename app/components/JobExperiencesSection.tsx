"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { jobs } from "../data/jobsData";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

const JobExperiencesSection: React.FC = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="job-experiences"
            className={`my-16 p-4 container mx-auto ${
                theme === "dark"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-800"
            }`}
        >
            <h2 className="text-3xl font-bold mb-8 text-center">
                Job Experiences
            </h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {jobs.map((job) => (
                    <motion.div
                        key={job.id}
                        className={`rounded-lg p-6 shadow-lg ${
                            theme === "dark"
                                ? "bg-gray-800 hover:bg-gray-700"
                                : "bg-white hover:bg-gray-50"
                        } transition-all duration-300`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">
                            {job.title}
                        </h3>
                        <p
                            className={`text-sm mb-2 ${
                                theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-600"
                            }`}
                        >
                            {job.company}
                        </p>
                        <p
                            className={`text-sm mb-4 ${
                                theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-500"
                            }`}
                        >
                            {job.duration}
                        </p>
                        <p
                            className={`mt-4 ${
                                theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                            }`}
                        >
                            {job.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default JobExperiencesSection;
