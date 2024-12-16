import { projectsData } from "@/app/data/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import fs from "fs/promises";
import path from "path";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return projectsData.map((project) => ({ slug: project.slug }));
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
        title: project.title,
        description: project.summary,
    };
}

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
    const { slug } = params;
    const projectIndex = projectsData.findIndex((p) => p.slug === slug);

    if (projectIndex === -1) {
        notFound();
    }

    const project = projectsData[projectIndex];

    // Navigation logic
    const prevProjectSlug =
        projectIndex > 0 ? projectsData[projectIndex - 1].slug : null;
    const nextProjectSlug =
        projectIndex < projectsData.length - 1
            ? projectsData[projectIndex + 1].slug
            : null;

    // Fetch project document
    const filePath = path.join(
        process.cwd(),
        "app",
        "data",
        "projects",
        project.document
    );
    const document = await fs.readFile(filePath, "utf8");

    return (
        <div className="container mx-auto my-16 p-4 max-w-4xl">
            {/* Project Content */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {project.title}
                </h1>
                {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.date}
                </p> */}
            </header>

            <div className="relative w-full h-64 mb-8">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="rounded-lg object-cover"
                />
            </div>
            {/* 
            <div
                className="prose dark:prose-invert max-w-none mb-8"
                dangerouslySetInnerHTML={{
                    __html: document || project.description,
                }}
            /> 
            */}

            {/* Technologies */}
            <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                </h2>
                <ul className="list-disc list-inside text-blue-600 dark:text-blue-300">
                    {project.tags.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-between items-center py-8 text-blue-500 relative">
                {/* Previous Project */}
                {prevProjectSlug ? (
                    <Link
                        href={`/projects/${prevProjectSlug}`}
                        className="hover:underline"
                    >
                        &larr; {projectsData[projectIndex - 1].slug}
                    </Link>
                ) : (
                    <span className="opacity-50">&larr; Previous</span>
                )}

                {/* Centered Projects Button */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link
                        href="/#projects"
                        className="text-blue-500 hover:underline"
                    >
                        Projects
                    </Link>
                </div>

                {/* Next Project */}
                {nextProjectSlug ? (
                    <Link
                        href={`/projects/${nextProjectSlug}`}
                        className="hover:underline"
                    >
                        {projectsData[projectIndex + 1].slug} &rarr;
                    </Link>
                ) : (
                    <span className="opacity-50">Next &rarr;</span>
                )}
            </div>
        </div>
    );
};

export default ProjectPage;
