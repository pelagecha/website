// components/MainSection.tsx

"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const MainSection: React.FC = () => {
    const particlesInit = async (engine: Engine) => {
        console.log("Initializing particles...");
        await loadFull(engine);
    };

    const particlesOptions = {
        background: {
            color: {
                value: "#ffffff", // Set your desired background color
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { quantity: 4 },
            },
        },
        particles: {
            color: { value: "#000000" }, // Particle color
            links: {
                enable: true,
                distance: 150,
                color: "#000000",
                opacity: 0.4,
                width: 1,
            },
            collisions: { enable: false },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
            },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
            {/* Particle Background */}
            {/* <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                className="absolute top-0 left-0 w-full h-full"
            /> */}

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">
                    Welcome to My Portfolio
                </h1>
                <p className="text-xl mb-8">
                    I'm Nikita, a passionate developer specializing in building
                    exceptional digital experiences.
                </p>
            </div>
        </section>
    );
};

export default MainSection;
