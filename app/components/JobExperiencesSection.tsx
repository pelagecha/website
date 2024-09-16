"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { jobs } from "../data/jobsData";

const JobExperiencesSection: React.FC = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <section
            id="job-experiences"
            className="relative my-16 p-4 container mx-auto"
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: "#ffffff" } },
                    particles: {
                        number: { value: 50 },
                        size: { value: 3 },
                        move: { enable: true, speed: 1 },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#000000",
                            opacity: 0.2,
                        },
                    },
                }}
                className="absolute inset-0 z-0"
            />
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Job Experiences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate-float"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {job.title}
                            </h3>
                            <p className="text-gray-600">{job.company}</p>
                            <p className="mt-4">{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobExperiencesSection;
