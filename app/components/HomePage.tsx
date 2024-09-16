"use client";

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import JobExperiencesSection from "./JobExperiencesSection";
import Blogs from "./Blogs";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import JobTimeline from "./JobTimeline";

const HomePage: React.FC = () => {
    return (
        <ParallaxProvider>
            <div>
                {/* General Information Block */}
                <section className="relative h-screen flex items-center justify-center bg-gray-100">
                    <div className="text-center z-10">
                        <h1 className="text-5xl font-bold mb-4">
                            Welcome to My Portfolio
                        </h1>
                        <p className="text-xl text-gray-700">
                            Discover my projects, skills, and experiences.
                        </p>
                    </div>
                    {/* Parallax Element */}
                </section>

                {/* Prompt to Scroll Down */}
                {/* You can add a scroll indicator here if desired */}

                {/* Job Experiences with Animated Tiles */}
                <JobExperiencesSection />

                {/* Existing Sections */}
                <AboutMe />
                <Projects />
                <Blogs />

                {/* Job Timeline */}
                <JobTimeline />
            </div>
        </ParallaxProvider>
    );
};

export default HomePage;
