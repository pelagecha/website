"use client";

import React, { useState, useCallback } from "react";
import { jobs } from "../data/jobsData";
import JobItem from "../components/JobItem";

const JobTimeline: React.FC = () => {
    const [expandedJob, setExpandedJob] = useState<number | null>(null);

    const handleToggle = useCallback((index: number) => {
        setExpandedJob((prev) => (prev === index ? null : index));
    }, []);

    return (
        <section id="job-timeline" className="my-12 p-4 container mx-auto">
            <div className="relative">
                {/* Vertical Pill-Shaped Timeline Line */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>

                {jobs.map((job, index) => (
                    <JobItem
                        key={index} // Using index as key since 'id' doesn't exist on Job type
                        job={job}
                        index={index}
                        isExpanded={expandedJob === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default JobTimeline;
