import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

const Projects: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projectsData.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    const totalPages = Math.ceil(projectsData.length / projectsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Smooth scroll to top when page changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [currentPage]);

    return (
        <section id="projects" className="my-16 p-4 container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {currentProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </motion.div>
            </AnimatePresence>
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
