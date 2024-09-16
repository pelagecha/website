// app/components/ExperienceTimeline.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string;
}

const experiences: Experience[] = [
    {
        company: "Tech Innovators Inc.",
        role: "Senior Software Engineer",
        duration: "Jan 2020 - Present",
        description:
            "Leading a team of developers in building scalable web applications using React and Node.js.",
    },
    {
        company: "Creative Solutions LLC",
        role: "Frontend Developer",
        duration: "Jun 2017 - Dec 2019",
        description:
            "Developed responsive user interfaces with React and collaborated with designers to enhance UX/UI.",
    },
    {
        company: "WebStart Corp.",
        role: "Junior Developer",
        duration: "Jan 2015 - May 2017",
        description:
            "Assisted in developing and maintaining company websites using HTML, CSS, and JavaScript.",
    },
    // Add more experiences as needed
];

const ExperienceTimeline: React.FC = () => {
    return (
        <section id="experience" className="my-16 p-4 container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Professional Experience
            </h2>
            <Parallax speed={-10}>
                {" "}
                {/* Removed tagOuter and used speed */}
                <div className="relative border-l-2 border-blue-500">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="mb-10 ml-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white dark:ring-gray-800">
                                <FaBriefcase className="text-white" />
                            </span>
                            <motion.div
                                className="bg-white dark:bg-gray-700 p-4 rounded-md shadow-md"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-xl font-semibold">
                                    {exp.role}
                                </h3>
                                <h4 className="text-lg text-gray-600 dark:text-gray-300">
                                    {exp.company}
                                </h4>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {exp.duration}
                                </span>
                                <p className="mt-2 text-gray-700 dark:text-gray-300">
                                    {exp.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </Parallax>
        </section>
    );
};

export default ExperienceTimeline;
