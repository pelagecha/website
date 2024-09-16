"use client";

import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import JobExperiencesSection from "./JobExperiencesSection";
import Blogs from "./Blogs";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import JobTimeline from "./JobTimeline";
import InfoSection from "./InfoSection";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HomePage: React.FC = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    const particlesOptions = {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
            },
            line_linked: {
                enable: false,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "bubble" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3,
                },
                push: { particles_nb: 4 },
            },
        },
        retina_detect: true,
    };

    return (
        <ParallaxProvider>
            <div>
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        options={particlesOptions}
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
