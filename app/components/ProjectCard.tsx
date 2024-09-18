// components/ProjectCard.tsx

import React from "react";
import { Project } from "../data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link href={`/projects/${project.slug}`} passHref>
            <motion.a
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                }}
                className="
                    w-full 
                    bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 
                    dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 
                    rounded-lg 
                    shadow-md 
                    p-4 
                    hover:shadow-2xl 
                    transition-shadow 
                    duration-300 
                    transform 
                    cursor-pointer 
                    flex 
                    flex-col
                "
                aria-label={`View project: ${project.title}`}
            >
                <div className="w-full h-32 mb-4 relative">
                    <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                        priority
                    />
                </div>
                <h3 className="text-gray-900 dark:text-gray-100 text-lg overflow-hidden line-clamp-1 font-semibold mb-1">
                    {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-xs mb-2">
                    {project.date} • {project.duration}
                </p>
                <div className="flex-1">
                    <p className="text-gray-800 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.summary}
                    </p>
                </div>
                <div className="mt-auto">
                    <span className="text-gray-700 dark:text-gray-300 text-xs">
                        {project.technologies.join(", ")}
                    </span>
                </div>
            </motion.a>
        </Link>
    );
};

export default ProjectCard;
