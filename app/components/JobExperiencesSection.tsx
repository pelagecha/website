"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { jobs } from "../data/jobsData";

const JobExperiencesSection: React.FC = () => {
    const particlesInit = async (main: any) => {
        try {
            await loadFull(main);
        } catch (error) {
            console.error("Error loading tsParticles:", error);
        }
    };

    const particlesOptions = {
        background: { color: { value: "#ffffff" } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#000000" },
            links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            collisions: { enable: false },
            move: {
                directions: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1,
                straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 20 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    };

    return (
        <section
            id="job-experiences"
            className="relative my-16 p-4 container mx-auto"
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
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
                                {job.title} at {job.company}
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
