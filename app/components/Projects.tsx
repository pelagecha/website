// app/components/Projects.tsx
"use client";

import React, { useState } from "react";
import projectsData, { Project } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    const openModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="my-16 p-4 relative container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.name}
                        project={project}
                        onClick={() => openModal(project)}
                    />
                ))}
            </div>

            <Modal isOpen={!!selectedProject} onClose={closeModal}>
                {selectedProject && (
                    <div className="p-6">
                        <button
                            className="text-gray-500 hover:text-gray-700 float-right text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-4">
                            {selectedProject.name}
                        </h3>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-700 mb-4">
                            {selectedProject.details}
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            {selectedProject.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Projects;
