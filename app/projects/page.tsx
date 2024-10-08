import React from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage: React.FC = () => {
    const sortedProjects = [...projectsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className="container mx-auto my-16 p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
                Projects Gallery
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
