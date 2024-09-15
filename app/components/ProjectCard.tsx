// app/components/ProjectCard.tsx

import React from "react";
import { Project } from "../data/projectsData";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Image
                src={`https://picsum.photos/seed/${project.slug}/400/160`}
                alt={project.name}
                width={400}
                height={160}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{project.date}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.summary}
            </p>
            <Link
                href={`/${project.slug}`}
                className="text-blue-500 hover:underline"
            >
                Learn More
            </Link>
        </div>
    );
};

export default ProjectCard;
