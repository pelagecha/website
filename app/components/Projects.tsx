// components/Projects.tsx

import React, { useState, useEffect, useRef } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ISEXPANDABLE = false;

const Projects: React.FC = () => {
    const [projectsPerPage, setProjectsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Function to update projectsPerPage based on window width
    const updateProjectsPerPage = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setProjectsPerPage(1); // Mobile
        } else if (width >= 640 && width < 1024) {
            setProjectsPerPage(2); // Tablet
        } else {
            setProjectsPerPage(3); // Desktop
        }
    };

    useEffect(() => {
        updateProjectsPerPage();
        window.addEventListener("resize", updateProjectsPerPage);
        return () =>
            window.removeEventListener("resize", updateProjectsPerPage);
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(projectsData.length / projectsPerPage);

    // Function to handle scroll
    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollPosition = scrollRef.current.scrollLeft;
            const pageWidth = scrollRef.current.clientWidth;
            const newPage = Math.round(scrollPosition / pageWidth) + 1;
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
            return () =>
                scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <section id="projects" className="container mx-auto section-flush">
            <div
                className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
                ref={scrollRef}
            >
                <div className="flex" style={{ width: `${100 * totalPages}%` }}>
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <div
                            key={pageIndex}
                            className="flex-shrink-0 snap-start px-3"
                            style={{ width: `${100 / totalPages}%` }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
                                {projectsData
                                    .slice(
                                        pageIndex * projectsPerPage,
                                        (pageIndex + 1) * projectsPerPage
                                    )
                                    .map((project) => (
                                        <ProjectCard
                                            key={project.slug}
                                            project={project}
                                        />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-6 space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (scrollRef.current) {
                                    scrollRef.current.scrollTo({
                                        left:
                                            index *
                                            scrollRef.current.clientWidth,
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className={`w-3 h-3 rounded-full ${
                                currentPage === index + 1
                                    ? "bg-indigo-500"
                                    : "bg-gray-300"
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;
