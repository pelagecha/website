// app/components/ProjectCard.tsx
"use client";

import React from "react";
import { Project } from "../data/projectsData";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <div
            className="w-80 bg-white rounded-lg shadow-md p-4 cursor-pointer"
            onClick={onClick}
        >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-2">{project.summary}</p>
        </div>
    );
};

export default ProjectCard;
