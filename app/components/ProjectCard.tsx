"use client";
import React from "react";
import { Project } from "../data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

const ISEXPANDABLE = false;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
            {ISEXPANDABLE ? (
                <Link href={`/projects/${project.slug}`} passHref>
                    <div className="cursor-pointer">
                        <div className="relative h-48 w-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                        <div className="p-6">
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
                                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className="cursor-not-allowed">
                    <div className="relative h-48 w-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {project.title}
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                            {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectCard;
