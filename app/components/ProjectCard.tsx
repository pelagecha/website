// app/components/ProjectCard.tsx
"use client";

import React, { useState } from "react";
import { Project } from "../data/projectsData";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-80 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-2">{project.summary}</p>
            <button
                className="text-blue-500 hover:underline"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? "Show Less" : "Read More"}
            </button>
            {isExpanded && (
                <div className="mt-4">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <p className="text-gray-700 mb-2">{project.details}</p>
                    <ul className="list-disc list-inside text-gray-700">
                        {project.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
