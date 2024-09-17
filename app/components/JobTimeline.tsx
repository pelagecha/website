"use client";

import React, { useState } from "react";
import { jobs } from "../data/jobsData";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";

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
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
                Career Timeline
            </h2>
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700">
                {jobs.map((job, index) => (
                    <div key={index} className="mb-10 ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white dark:ring-gray-900" />
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold flex items-center justify-between dark:text-white">
                                {job.title} at {job.company}
                                {job.companyUrl && (
                                    <a
                                        href={job.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        <FaExternalLinkAlt className="inline ml-2" />
                                    </a>
                                )}
                            </h3>
                            <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
                                {job.date}
                            </time>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                {job.description}
                            </p>
                            <button
                                onClick={() =>
                                    setExpandedJob(
                                        expandedJob === index ? null : index
                                    )
                                }
                                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
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
                            {expandedJob === index && (
                                <div className="mt-4 text-gray-600 dark:text-gray-400">
                                    {job.details}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JobTimeline;
