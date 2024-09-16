"use client";

import React, { useContext, useMemo, useCallback } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import JobExperiencesSection from "./JobExperiencesSection";
import Blogs from "./Blogs";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import JobTimeline from "./JobTimeline";
import InfoSection from "./InfoSection";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ThemeContext } from "../context/ThemeContext";
import type { ISourceOptions } from "tsparticles-engine";

const HomePage: React.FC = () => {
    const { theme } = useContext(ThemeContext);

    const particlesInit = useCallback(async (main: any) => {
        await loadFull(main);
    }, []);

    // Light mode particle configuration
    const lightModeParticles: ISourceOptions = useMemo(
        () => ({
            background: {
                color: "#f0f8ff", // Light, soft background
            },
            particles: {
                number: {
                    value: 150, // Increased number for richness
                    density: { enable: true, value_area: 1000 },
                },
                color: { value: ["#a8dadc", "#457b9d", "#1d3557"] }, // Soft blues and teals
                shape: {
                    type: ["circle", "triangle"], // Variety in shapes
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
                    speed: 1, // Moderate speed
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

    // Dark mode particle configuration
    const darkModeParticles: ISourceOptions = useMemo(
        () => ({
            background: {
                color: "#1a1a2e", // Deep dark background
            },
            particles: {
                number: {
                    value: 200, // More particles for a dense effect
                    density: { enable: true, value_area: 800 },
                },
                color: { value: ["#ff6b6b", "#f7d794", "#f9ca24"] }, // Vibrant colors
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
                    speed: 1.5, // Slightly faster
                    direction: "bottom",
                    random: false,
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
                    push: { quantity: 6 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    // Select current particle configuration based on theme
    const currentParticles = useMemo(
        () => (theme === "dark" ? darkModeParticles : lightModeParticles),
        [theme, darkModeParticles, lightModeParticles]
    );

    return (
        <ParallaxProvider>
            <div className={theme === "dark" ? "bg-gray-900" : "bg-gray-100"}>
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <Particles
                        key={theme} // Ensures re-render on theme change
                        id="tsparticles"
                        init={particlesInit}
                        options={currentParticles}
                        className="absolute top-0 left-0 w-full h-full"
                    />
                    <Parallax translateY={[-20, 20]} className="z-10">
                        <InfoSection />
                    </Parallax>
                </section>

                <JobExperiencesSection />
                <AboutMe />
                <Projects />
                <Blogs />
                <JobTimeline />
            </div>
        </ParallaxProvider>
    );
};

export default HomePage;
