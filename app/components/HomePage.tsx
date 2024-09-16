"use client";

import React, { useContext } from "react";
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

const HomePage: React.FC = () => {
    const { theme } = useContext(ThemeContext);

    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    const lightModeParticles = {
        background: {
            color: "#e6f2ff", // Light blue sky color
        },
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: ["#ffffff", "#f0f8ff", "#e6e6fa"] },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.2,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 30,
                random: true,
                anim: { enable: true, speed: 0.3, size_min: 10, sync: false },
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "top",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 100, duration: 0.5 },
                push: { particles_nb: 3 },
            },
        },
        detectRetina: true,
    };

    const darkModeParticles = {
        background: {
            color: "#000033", // Dark blue background
        },
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#ff00ff", "#00ffff", "#ffff00", "#ffffff"] },
            shape: {
                type: ["circle", "star"], // Adding variety
            },
            opacity: {
                value: 0.8,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 10,
                random: true,
                anim: { enable: true, speed: 1, size_min: 2, sync: false },
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
            links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
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
                repulse: { distance: 150, duration: 0.6 },
                push: { particles_nb: 5 },
            },
        },
        detectRetina: true,
    };

    return (
        <ParallaxProvider>
            <div className={theme === "dark" ? "bg-gray-900" : "bg-gray-100"}>
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        options={
                            theme === "dark"
                                ? darkModeParticles
                                : lightModeParticles
                        }
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
