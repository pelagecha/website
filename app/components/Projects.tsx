// components/Projects.tsx

import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

const Projects: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage, setProjectsPerPage] = useState(3); // Default to desktop view

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
        // Update projectsPerPage on mount
        updateProjectsPerPage();

        // Update projectsPerPage on window resize
        window.addEventListener("resize", updateProjectsPerPage);

        // Cleanup listener on unmount
        return () =>
            window.removeEventListener("resize", updateProjectsPerPage);
    }, []);

    // Calculate total pages based on projectsPerPage
    const totalPages = Math.ceil(projectsData.length / projectsPerPage);

    // Ensure currentPage is within bounds when projectsPerPage changes
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [projectsPerPage, totalPages, currentPage]);

    // Get current projects based on currentPage and projectsPerPage
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projectsData.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <section id="projects" className="my-16 p-4 container mx-auto">
            <div className="relative">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(event, info) => {
                            const swipe = info.offset.x;
                            if (swipe < -100 && currentPage < totalPages) {
                                setCurrentPage(currentPage + 1);
                            } else if (swipe > 100 && currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                            }
                        }}
                    >
                        {currentProjects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-indigo-500 text-white rounded 
                                disabled:opacity-50 disabled:cursor-not-allowed 
                                hover:bg-indigo-600 transition-colors duration-300`}
                >
                    Previous
                </button>
                <span className="text-gray-700 dark:text-gray-300">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 bg-indigo-500 text-white rounded 
                                disabled:opacity-50 disabled:cursor-not-allowed 
                                hover:bg-indigo-600 transition-colors duration-300`}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default Projects;
