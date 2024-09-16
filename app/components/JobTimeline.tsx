"use client";

import React from "react";
import { jobs } from "../data/jobsData";

interface Job {
    title: string;
    company: string;
    date: string;
    description: string;
}

const JobTimeline: React.FC = () => {
    return (
        <section id="job-timeline" className="my-16 p-4 container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Career Timeline
            </h2>
            <div className="relative border-l-2 border-gray-200">
                {jobs.map((job, index) => (
                    <div key={index} className="mb-10 ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white">
                            {/* Icon or number */}
                        </span>
                        <h3 className="text-xl font-semibold">
                            {job.title} at {job.company}
                        </h3>
                        <time className="block mb-2 text-sm text-gray-500">
                            {job.date}
                        </time>
                        <p className="text-gray-700">{job.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JobTimeline;
