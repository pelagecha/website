// app/components/Projects.tsx

import React from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
    return (
        <section id="projects" className="my-16 p-4 container mx-auto">
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
