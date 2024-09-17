"use client";

import React, { useState } from "react";
import { jobs } from "../data/jobsData";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Job {
    title: string;
    company: string;
    date: string;
    description: string;
    details: string;
    companyUrl?: string;
}

const JobTimeline: React.FC = () => {
    const [expandedJob, setExpandedJob] = useState<number | null>(null);

    return (
        <section id="job-timeline" className="my-16 p-4 container mx-auto">
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700">
                {jobs.map((job, index) => (
                    <div key={index} className="mb-10 ml-6">
                        {/* Timeline Dot */}
                        <span
                            className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ${
                                expandedJob === index
                                    ? "bg-blue-600 ring-4 ring-white dark:ring-gray-900"
                                    : "bg-blue-500 ring-4 ring-white dark:ring-gray-900"
                            } transition-colors duration-300`}
                        />

                        {/* Job Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                        >
                            {/* Job Header */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {job.title} @ {job.company}
                                    </h3>
                                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                                        {job.date}
                                    </time>
                                </div>
                                {/* Company Link */}
                                {job.companyUrl && (
                                    <a
                                        href={job.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                                        aria-label={`${job.company} Website`}
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                )}
                            </div>

                            {/* Job Description */}
                            <p className="mt-4 text-gray-700 dark:text-gray-300">
                                {job.description.length > 150
                                    ? `${job.description.substring(0, 150)}...`
                                    : job.description}
                            </p>

                            {/* Toggle Details Button */}
                            <button
                                onClick={() =>
                                    setExpandedJob(
                                        expandedJob === index ? null : index
                                    )
                                }
                                className="mt-4 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center focus:outline-none"
                                aria-expanded={expandedJob === index}
                                aria-controls={`job-details-${index}`}
                            >
                                {expandedJob === index ? (
                                    <>
                                        <FaChevronUp className="mr-1" /> Less
                                        details
                                    </>
                                ) : (
                                    <>
                                        <FaChevronDown className="mr-1" /> More
                                        details
                                    </>
                                )}
                            </button>

                            {/* Expanded Details */}
                            <AnimatePresence>
                                {expandedJob === index && (
                                    <motion.div
                                        id={`job-details-${index}`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="mt-4 text-gray-600 dark:text-gray-400 overflow-hidden"
                                    >
                                        {job.details}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JobTimeline;
