// app/components/Projects.tsx

import React from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
    return (
        <section id="projects" className="my-16 p-4 container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
            <div className="flex overflow-x-auto space-x-6">
                {projectsData.map((project) => (
                    <div key={project.slug} className="flex-shrink-0">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
