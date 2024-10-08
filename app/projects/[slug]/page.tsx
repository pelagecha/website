// app/projects/[slug]/page.tsx

import React from "react";
import { projectsData } from "../../data/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Project } from "../../data/projectsData";
import Image from "next/image";
import fs from "fs/promises";
import path from "path";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return projectsData.map((project: Project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The project you're looking for doesn't exist.",
            image: "/images/projects/test.png",
        };
    }

    return {
        title: project.name,
        description: project.summary,
    };
}

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
    const { slug } = params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    let markdownContent = "";
    if (project.markdownContent) {
        const filePath = path.join(
            process.cwd(),
            "app",
            "data",
            "projects",
            project.markdownContent
        );
        markdownContent = await fs.readFile(filePath, "utf8");
    }

    return (
        <div className="container mx-auto my-16 p-4 max-w-4xl">
            <Link
                href="/#projects"
                className="text-blue-400 hover:underline mb-6 inline-block"
            >
                &larr; Back to Projects
            </Link>
            <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
                {project.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
                {project.date}
            </p>

            <div className="flex justify-center mb-6">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={300}
                    className="rounded-lg"
                />
            </div>

            <div className="prose dark:prose-invert max-w-none mb-6">
                <ReactMarkdown>
                    {markdownContent || project.description}
                </ReactMarkdown>
            </div>

            <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Technologies Used
                </h2>
                <ul className="list-disc list-inside text-blue-600 dark:text-blue-200">
                    {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectPage;
