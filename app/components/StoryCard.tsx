"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface StoryCard {
    title: string;
    image: string;
    summary: string;
    slug: string;
    tags?: string[];
    date?: string;
    readTime?: string;
    wordCount?: number;
}

const StoryCard = ({
    storyType,
    storyData,
}: {
    storyType: string;
    storyData: StoryCard;
}) => (
    <motion.div
        whileHover={{ scale: 1.03 }}
        className="w-full bg-gray-100 dark:bg-transparent dark:backdrop-blur-md rounded-md"
    >
        <Link href={`${storyType}/${storyData.slug}`} passHref>
            <div className="cursor-pointer">
                <div className="relative h-48 w-full rounded-t-md overflow-hidden">
                    <Image
                        src={storyData.image}
                        alt={storyData.title}
                        fill
                        style={{
                            objectFit: "cover",
                            pointerEvents: "none",
                            userSelect: "none",
                        }}
                        draggable="false"
                        priority
                    />
                </div>
                <div className="p-6 rounded-b-md border-l border-r border-b border-black dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
                            {storyData.title}
                        </h3>
                    </div>
                    <p
                        className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-1"
                        style={{
                            lineHeight: "1.5em",
                            maxHeight: "3em",
                            overflow: "hidden",
                        }}
                    >
                        {storyData.summary}
                    </p>

                    {/* TAGS */}
                    <div className="flex"></div>
                    <div className="flex flex-wrap gap-2">
                        {storyData.tags?.map((lib, i) => (
                            <span
                                key={i}
                                className="inline-block px-2 py-1 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                            >
                                {lib}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    </motion.div>
);

export default StoryCard;
