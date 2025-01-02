import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Device } from "../context/Device";

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
        const [deviceType, setDeviceType] = useState(""); // get current client device
        useEffect(() => {
            const userAgent = navigator.userAgent;
            const detectedDevice = Device(userAgent);
            console.log("Detected Device:", detectedDevice); // Debugging
            setDeviceType(detectedDevice);
        }, []);

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mb-6 flex flex-col sm:flex-row items-start relative pl-4 sm:pl-8 cursor-pointer group"
                onClick={onToggle}
            >
                {/* Job Card */}
                <div
                    // className={`bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200 flex-1 border-l-4 ${
                    //     isExpanded ? "border-indigo-500" : "border-transparent"
                    // }`}
                    className={`bg-gray-100 dark:bg-transparent dark:backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 flex-1 border-l-4 border border-gray-200 dark:border-gray-700 ${
                        isExpanded ? "border-indigo-500" : "border-transparent"
                    }`}
                >
                    {/* Job Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center relative">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                                {job.title}
                                {deviceType === "desktop" && (
                                    <>
                                        {job.company ? " @ " : ""}
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
                                    </>
                                )}
                            </h3>
                            {deviceType !== "desktop" && (
                                <>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
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
                                    </p>
                                </>
                            )}
                            <time className="block text-sm text-gray-600 dark:text-gray-400">
                                {job.date}
                            </time>
                        </div>
                        <div className="absolute top-4 right-4 sm:static text-gray-600 dark:text-gray-300">
                            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                    </div>

                    {/* Job Description */}
                    <p
                        className={`mt-4 text-gray-700 dark:text-gray-300 ${
                            isExpanded ? "" : "line-clamp-1"
                        }`}
                    >
                        {job.description}
                    </p>

                    {/* Expanded Details */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                }}
                                className="mt-2 text-gray-700 dark:text-gray-300 overflow-hidden"
                            >
                                {job.details.split("\n").map((line, idx) => (
                                    <p
                                        key={idx}
                                        className={`mb-2 ${
                                            idx === 0 ? "mb-2" : ""
                                        }`}
                                    >
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
