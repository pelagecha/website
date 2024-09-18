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
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 transform cursor-pointer flex flex-col"
                aria-label={`View details about ${project.name}`}
            >
                <div className="w-full h-32 mb-4 relative">
                    <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                        priority
                    />
                </div>
                <h3 className="text-white dark:text-gray-100 text-lg overflow-hidden line-clamp-1 font-semibold mb-1">
                    {project.name}
                </h3>
                <p className="text-gray-200 text-xs mb-1">{project.date}</p>
                <p className="text-gray-100 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.summary}
                </p>
                <div className="mt-auto">
                    <p className="text-sm text-gray-200 overflow-hidden line-clamp-1 dark:text-gray-400">
                        {project.technologies.join(", ")}
                    </p>
                </div>
            </motion.a>
        </Link>
    );
};

export default ProjectCard;
