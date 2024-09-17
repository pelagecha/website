"use client";

import React, { useContext, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Projects from "./Projects";
import JobTimeline from "./JobTimeline";
import InfoSection from "./InfoSection";
import { ThemeContext } from "../context/ThemeContext";
import { FaChevronDown } from "react-icons/fa";
import { useParticles } from "../context/ParticlesContext";

const HomePage: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const { particlesEnabled } = useParticles();
    const nextSectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ParallaxProvider>
            <div
                className={`min-h-screen relative ${
                    theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                }`}
            >
                {particlesEnabled && <ParticlesBackground />}
                <div className="relative z-10">
                    <section
                        id="general"
                        className="relative h-screen flex items-center justify-center overflow-hidden"
                    >
                        <InfoSection />
                        {/* ... (scroll down button) ... */}
                    </section>
                    <section
                        id="projects"
                        ref={nextSectionRef}
                        className="scroll-mt-16"
                    >
                        <Link href="/projects">
                            <h2 className="text-3xl font-bold text-center cursor-pointer hover:underline">
                                Projects
                            </h2>
                        </Link>
                        <Projects />
                    </section>
                    <section id="blogs">
                        <Link href="/blogs">
                            <h2 className="text-3xl font-bold text-center cursor-pointer hover:underline">
                                Blogs
                            </h2>
                        </Link>
                        <Blogs />
                    </section>
                    <section id="experience">
                        <h2 className="text-3xl font-bold text-center">
                            Experience
                        </h2>
                        <JobTimeline />
                    </section>
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default HomePage;
