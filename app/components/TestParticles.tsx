// components/TestParticles.tsx

"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const TestParticles: React.FC = () => {
    const particlesInit = async (engine: Engine) => {
        await loadFull(engine);
    };

    const particlesOptions = {
        background: { color: { value: "#000000" } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { quantity: 4 },
            },
        },
        particles: {
            number: { value: 20, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 5 } },
            move: { enable: true, speed: 2 },
        },
        detectRetina: true,
    };

    return (
        <div className="relative h-screen">
            <Particles
                id="test-particles"
                init={particlesInit}
                options={particlesOptions}
                className="absolute top-0 left-0 w-full h-full"
            />
            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-4xl font-bold text-white">
                    Testing Particles
                </h1>
            </div>
        </div>
    );
};

export default TestParticles;
