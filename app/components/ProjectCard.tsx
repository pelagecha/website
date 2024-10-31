"use client";
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
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full bg-gray-100 dark:bg-transparent dark:backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
        >
            <Link href={`/projects/${project.slug}`} passHref>
                <div className="cursor-pointer">
                    <div className="relative h-48 w-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                    {/* Apply opacity to this div only */}
                    {/* <div className="p-6 bg-white opacity-100 dark:bg-gray-800"> */}
                    <div className="p-6 ">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                            {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-2 py-1 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
