import React from "react";
import { projectsData } from "@/app/data/projectsData";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import StoryCard from "@/app/components/StoryCard";

const ProjectsPage: React.FC = () => {
    const sortedProjects = [...projectsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className="relative container mx-auto my-16 p-4">
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
            </div>
            <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Projects Gallery
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedProjects.map((project) => (
                        <StoryCard
                            key={project.slug}
                            storyType="projects"
                            storyData={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
