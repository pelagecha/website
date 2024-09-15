// app/projects/[slug]/page.tsx

import React from "react";
import { projectsData } from "../../data/projectsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Project } from "../../data/projectsData";

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
        };
    }

    return {
        title: project.name,
        description: project.summary,
    };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
    const { slug } = params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto my-16 p-4">
            <Link
                href="/#projects"
                className="text-blue-500 hover:underline mb-4 inline-block"
            >
                &larr; Back to Projects
            </Link>
            <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
            <p className="text-gray-500 mb-4">{project.date}</p>
            <Image
                src={`https://picsum.photos/seed/${project.slug}/800/400`}
                alt={project.name}
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-md mb-4"
            />
            <div className="prose prose-lg dark:prose-dark">
                <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-2">
                    Technologies Used
                </h2>
                <ul className="list-disc list-inside">
                    {project.technologies.map((tech, index) => (
                        <li
                            key={index}
                            className="text-gray-700 dark:text-gray-300"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectPage;
