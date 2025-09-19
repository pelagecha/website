import React from "react";
import { notesData } from "@/app/data/notesData";
import Link from "next/link";
import Image from "next/image";

const NotesPage: React.FC = () => {
    return (
        <div className="container mx-auto my-16 p-4 max-w-6xl">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
                Course Notes
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notesData.map((note) => (
                    <Link
                        key={note.slug}
                        href={`/notes/${note.slug}`}
                        className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        <div className="relative h-48">
                            <Image
                                src={note.image}
                                alt={note.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {note.slug.toUpperCase()}
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {note.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                {note.summary}
                            </p>
                            {note.tags && (
                                <div className="flex flex-wrap gap-1">
                                    {note.tags.slice(0, 3).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NotesPage;
