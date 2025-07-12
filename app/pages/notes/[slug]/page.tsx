import React from "react";
import { notesData } from "@/app/data/notesData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { FaTimes } from "react-icons/fa";

interface NotePageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return notesData.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps) {
    const { slug } = params;
    const note = notesData.find((b) => b.slug === slug);

    if (!note) {
        return {
            title: "Note Not Found",
            description: "The note post you are looking for does not exist.",
        };
    }

    return {
        title: note.title,
        description: note.summary,
    };
}

const NotePage: React.FC<NotePageProps> = async ({ params }) => {
    const { slug } = params;
    const noteIndex = notesData.findIndex((b) => b.slug === slug);

    if (noteIndex === -1) {
        notFound();
    }

    const note = notesData[noteIndex];

    // Navigation logic
    const prevNoteSlug = noteIndex > 0 ? notesData[noteIndex - 1].slug : null;
    const nextNoteSlug =
        noteIndex < notesData.length - 1 ? notesData[noteIndex + 1].slug : null;

    // Fetch note content
    const filePath = path.join(
        process.cwd(),
        "app",
        "data",
        "notes",
        note.document
    );
    const content = await fs.readFile(filePath, "utf8");

    return (
        <article className="container mx-auto my-16 p-4 max-w-4xl">
            {/* Note Content */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {note.title}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {note.date && `${note.date}`}
                    {note.date && note.readTime && ` • `}
                    {note.readTime && `${note.readTime}`}
                    {note.readTime && note.wordCount && ` • `}
                    {note.wordCount && note.wordCount}
                </p>
            </header>
            <Image
                src={note.image}
                alt={note.title}
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-md mb-8"
            />
            {/* Bottom Navigation */}
            <div className="flex justify-between items-center py-0 relative">
                {/* Previous Note */}
                {prevNoteSlug ? (
                    <PageNavigationButton
                        title={`${notesData[noteIndex - 1].slug} ←`}
                        href={`/notes/${prevNoteSlug}`}
                        pos="left"
                    />
                ) : (
                    <PageNavigationButton
                        title={<FaTimes />}
                        href=""
                        pos="left"
                    />
                )}

                {/* Centered Notes Button */}
                <div>
                    <PageNavigationButton
                        title="Notes"
                        href="/#notes"
                        pos="center"
                    />
                </div>

                {/* Next Note */}
                {nextNoteSlug ? (
                    <PageNavigationButton
                        title={`${notesData[noteIndex + 1].slug} →`}
                        href={`/notes/${nextNoteSlug}`}
                        pos="right"
                    />
                ) : (
                    <PageNavigationButton
                        title={<FaTimes />}
                        href=""
                        pos="right"
                    />
                )}
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </article>
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
            colour = "bg-blue-500 dark:bg-blue-700";
            hoverColour = "bg-blue-900";
        }
        if (pos === "left") {
            rounded = "rounded-l-md"; // Left rounded
        } else if (pos === "right") {
            rounded = "rounded-r-md"; // Right rounded
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

export default NotePage;
