import { projectsData } from "@/app/data/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import fs from "fs/promises";
import path from "path";
import { FaTimes } from "react-icons/fa";

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
            <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    className="object-cover"
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-black bg-opacity-80 rounded-md p-4">
                        <h1 className="text-4xl font-bold text-white">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div
                className="prose dark:prose-invert max-w-none mb-8"
                dangerouslySetInnerHTML={{
                    __html: document || project.description,
                }}
            />

            {/* Technologies */}
            <div className="bg-gray-200 justify-items-center  dark:bg-gray-700 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                    {project.tags?.map((lib, i) => (
                        <span
                            key={i}
                            className="inline-block px-2 py-1 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                            {lib}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-between items-center py-0 relative">
                {/* Previous Project */}
                {prevProjectSlug ? (
                    <PageNavigationButton
                        title={`${projectsData[projectIndex - 1].slug} ←`}
                        href={`/projects/${prevProjectSlug}`}
                        pos="left"
                    />
                ) : (
                    <PageNavigationButton
                        title=<FaTimes />
                        href=""
                        pos="left"
                    />
                )}

                {/* Centered Projects Button */}
                <div>
                    <PageNavigationButton
                        title="Projects"
                        href={`/#projects`}
                        pos="center"
                    />
                </div>

                {/* Next Project */}
                {nextProjectSlug ? (
                    <PageNavigationButton
                        title={`${projectsData[projectIndex + 1].slug} →`}
                        href={`/projects/${nextProjectSlug}`}
                        pos="right"
                    />
                ) : (
                    <PageNavigationButton
                        title=<FaTimes />
                        href=""
                        pos="right"
                    />
                )}
            </div>
        </div>
    );
};

interface PageNavigationButtonProps {
    title: string | React.ReactNode;
    href: string;
    pos: string;
}

const PageNavigationButton: React.FC<PageNavigationButtonProps> = ({
    title,
    href,
    pos,
}) => {
    let colour;
    let hoverColour;
    let rounded = ""; // Default to no rounding
    if (pos === "center") {
        colour = "bg-gray-800 dark:bg-black";
        hoverColour = "dark:bg-black";
    } else {
        if (href === "") {
            colour = "bg-gray-500 dark:bg-gray-800";
            hoverColour = "bg-gray-700";
        } else {
            colour = "bg-green-700 dark:bg-green-800";
            hoverColour = "bg-green-900";
        }
        if (pos === "left") {
            rounded = "rounded-l-lg"; // Left rounded
        } else if (pos === "right") {
            rounded = "rounded-r-lg"; // Right rounded
        }
    }

    return (
        <Link
            href={href}
            className={`${colour} hover:${hoverColour} text-white font-bold py-2 px-4 ${rounded} w-full h-10 flex items-center justify-center overflow-hidden`}
        >
            {title}
        </Link>
    );
};

export default ProjectPage;
