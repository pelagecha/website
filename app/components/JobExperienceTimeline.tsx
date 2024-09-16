import React from "react";
import styles from "../styles/JobExperienceTimeline.module.css";

interface Job {
    title: string;
    company: string;
    period: string;
    description: string;
}

const jobs: Job[] = [
    {
        title: "Senior Developer",
        company: "Tech Innovators Inc.",
        period: "2020 - Present",
        description:
            "Leading development teams and architecting scalable solutions.",
    },
    {
        title: "Full Stack Developer",
        company: "WebSolutions Co.",
        period: "2017 - 2020",
        description:
            "Developed and maintained various web applications using modern technologies.",
    },
    // Add more job experiences as needed
];

const JobExperienceTimeline: React.FC = () => {
    return (
        <div className={styles.timeline}>
            {jobs.map((job, index) => (
                <div key={index} className={styles.timelineItem}>
                    <h3>{job.title}</h3>
                    <h4>{job.company}</h4>
                    <p className={styles.period}>{job.period}</p>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>
    );
};

export default JobExperienceTimeline;
