"use client";

import React, { useState } from "react";
import { jobs } from "../data/jobsData";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Define the Job interface
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
        <section id="job-timeline" className="my-12 p-4 container mx-auto">
            <div className="relative">
                {/* Vertical Pill-Shaped Timeline Line */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>

                {jobs.map((job, index) => (
                    <JobItem
                        key={index}
                        job={job}
                        index={index}
                        isExpanded={expandedJob === index}
                        onToggle={() =>
                            setExpandedJob(expandedJob === index ? null : index)
                        }
                    />
                ))}
            </div>
        </section>
    );
};

interface JobItemProps {
    job: Job;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}

const JobItem: React.FC<JobItemProps> = ({
    job,
    index,
    isExpanded,
    onToggle,
}) => {
    return (
        <div
            className="mb-8 flex items-start relative pl-8 cursor-pointer group"
            onClick={onToggle}
        >
            {/* Job Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 flex-1`}
            >
                {/* Job Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                            {job.title} @ {job.company}
                        </h3>
                        <time className="block text-sm text-gray-600 dark:text-gray-400">
                            {job.date}
                        </time>
                    </div>
                </div>

                {/* Job Description */}
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                    {isExpanded
                        ? job.description
                        : `${job.description.substring(0, 80)}...`}
                </p>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 text-gray-600 dark:text-gray-300">
                    {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                            }}
                            className="mt-4 text-gray-700 dark:text-gray-300 overflow-hidden"
                        >
                            {job.details.split("\n").map((line, idx) => (
                                <p key={idx} className="mb-2">
                                    {line}
                                </p>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default JobTimeline;
