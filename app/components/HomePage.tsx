"use client";

import React, { useContext, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParticlesBackground from "./ParticlesBackground"; // Import the new Particles component
import Skills from "./Skills"; // Assuming you have a Skills component
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
                id="general"
                className={`min-h-screen relative ${
                    theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                }`}
            >
                {particlesEnabled && <ParticlesBackground />}
                <div className="relative z-10">
                    {" "}
                    {/* Wrapper for content */}
                    {/* Hero Section */}
                    <section className="relative h-screen flex items-center justify-center overflow-hidden">
                        <InfoSection />
                        <div
                            className="absolute bottom-20 md:bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
                            onClick={handleScroll}
                            aria-label="Scroll down to explore"
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") handleScroll();
                            }}
                        >
                            <FaChevronDown
                                className="text-3xl md:text-4xl lg:text-3xl text-gray-700 dark:text-gray-300 animate-bounce"
                                aria-hidden="true"
                            />
                            <span className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                                Explore
                            </span>
                        </div>
                    </section>
                    {/* Next Section with Ref */}
                    <div ref={nextSectionRef} className="scroll-mt-16">
                        <Projects />
                    </div>
                    <Blogs />
                    <JobTimeline />
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default HomePage;
