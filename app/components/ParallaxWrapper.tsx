// components/ParallaxWrapper.tsx

"use client";

import React from "react";
import { Parallax } from "react-scroll-parallax";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

interface ParallaxWrapperProps {
    children: React.ReactNode;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children }) => {
    const particlesInit = async (engine: Engine) => {
        await loadFull(engine);
    };

    const particlesOptions = {
        // Define your particle options here
        particles: {
            number: { value: 30, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "triangle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1 },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "remove" },
            },
            modes: {
                grab: { distance: 200, line_linked: { opacity: 1 } },
                remove: { quantity: 2 },
            },
        },
        background: { color: { value: "#000000" } },
        detectRetina: true,
    };

    return (
        <Parallax speed={10}>
            <Particles
                id="parallax-particles"
                init={particlesInit}
                options={particlesOptions}
                className="absolute top-0 left-0 w-full h-full"
            />
            {children}
        </Parallax>
    );
};

export default ParallaxWrapper;
