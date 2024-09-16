import React from "react";
import { Project } from "../data/projectsData";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link href={`/projects/${project.slug}`} passHref>
            <div
                className="w-96 h-full bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer flex-shrink-0 flex flex-col"
                aria-label={`View details about ${project.name}`}
            >
                <div className="w-full h-40 mb-4">
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={320}
                        height={160}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <h3 className="text-xl font-semibold mb-2 whitespace-normal">
                    {project.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{project.date}</p>
                <div className="flex-1">
                    <p
                        className="text-gray-600 dark:text-gray-300 mb-4 overflow-hidden line-clamp-3"
                        style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                        }}
                    >
                        {project.summary}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
