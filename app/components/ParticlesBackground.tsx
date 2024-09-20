"use client";

import React, { useCallback, useContext, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "tsparticles-engine";
import { ThemeContext } from "../context/ThemeContext";
import { useParticles } from "../context/ParticlesContext";

const ParticlesBackground: React.FC = () => {
    const particlesInit = useCallback(async (main: any) => {
        await loadFull(main);
    }, []);

    const { theme } = useContext(ThemeContext);
    const { particlesEnabled } = useParticles();

    const lightModeParticles: ISourceOptions = useMemo(
        () => ({
            background: {
                color: "#e0e0e0",
            },
            particles: {
                number: {
                    value: 150,
                    density: { enable: true, value_area: 1000 },
                },
                color: { value: ["#a8dadc", "#457b9d", "#1d3557"] },
                shape: {
                    type: ["circle", "triangle", "polygon"],
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.3,
                        opacity_min: 0.2,
                        sync: false,
                    },
                },
                size: {
                    value: 10,
                    random: { enable: true, minimumValue: 5 },
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 5,
                        sync: false,
                    },
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { enable: false },
                },
                links: {
                    enable: true,
                    distance: 120,
                    color: "#a8dadc",
                    opacity: 0.4,
                    width: 1,
                },
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { quantity: 4 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    const darkModeParticles: ISourceOptions = useMemo(
        () => ({
            background: {
                color: "#1a1a2e",
            },
            particles: {
                number: {
                    value: 150,
                    density: { enable: true, value_area: 1000 },
                },
                color: { value: ["#ff6b6b", "#f7d794", "#f9ca24"] },
                shape: {
                    type: ["star", "polygon"],
                    polygon: { nb_sides: 5 },
                },
                opacity: {
                    value: 0.8,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0.3,
                        sync: false,
                    },
                },
                size: {
                    value: 8,
                    random: { enable: true, minimumValue: 3 },
                    anim: {
                        enable: true,
                        speed: 3,
                        size_min: 4,
                        sync: false,
                    },
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: "bottom",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { enable: false },
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#f7d794",
                    opacity: 0.3,
                    width: 1,
                },
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                },
                modes: {
                    grab: { distance: 200, line_linked: { opacity: 0.5 } },
                    push: { quantity: 2 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    const currentParticles = useMemo(
        () => (theme === "dark" ? darkModeParticles : lightModeParticles),
        [theme, darkModeParticles, lightModeParticles]
    );

    return particlesEnabled ? (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={currentParticles}
            className="absolute top-0 left-0 w-full h-full z-0"
        />
    ) : null;
};

export default ParticlesBackground;
