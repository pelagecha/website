// app/components/Projects.tsx
import React from "react";
import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
    return (
        <section id="projects" className="my-16 p-4 relative container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
