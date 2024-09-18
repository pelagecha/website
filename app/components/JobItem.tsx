import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Define the Job interface
interface Job {
    id?: string; // Ensure each job has a unique ID
    title: string;
    company: string;
    date: string;
    description: string;
    details: string;
    companyUrl?: string;
}

interface JobItemProps {
    job: Job;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}

const JobItem: React.FC<JobItemProps> = React.memo(
    ({ job, index, isExpanded, onToggle }) => {
        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="mb-8 flex items-start relative pl-8 cursor-pointer group"
                onClick={onToggle}
            >
                {/* Job Card */}
                <div
                    className={`bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 border-l-4 ${
                        isExpanded ? "border-indigo-500" : "border-transparent"
                    }`}
                >
                    {/* Job Header */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                {job.title} @{" "}
                                {job.companyUrl ? (
                                    <a
                                        href={job.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-500 hover:underline"
                                    >
                                        {job.company}
                                    </a>
                                ) : (
                                    job.company
                                )}
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
                            : job.description.length > 80
                            ? `${job.description.substring(0, 80)}...`
                            : job.description}
                    </p>

                    {/* Expand Icon */}
                    <div className="absolute top-4 right-4 text-gray-600 dark:text-gray-300">
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "auto" },
                                    collapsed: { opacity: 0, height: 0 },
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
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
                </div>
            </motion.div>
        );
    }
);

export default JobItem;
