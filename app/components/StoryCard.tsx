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
        className="w-full bg-gray-100 dark:bg-transparent dark:backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
    >
        <Link href={`${storyType}/${storyData.slug}`} passHref>
            <div className="cursor-pointer">
                <div className="relative h-48 w-full">
                    <Image
                        src={storyData.image}
                        alt={storyData.title}
                        fill
                        style={{
                            objectFit: "cover",
                            pointerEvents: "none",
                            userSelect: "none",
                        }}
                        priority
                    />
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {storyData.title}
                        </h3>
                        {/*
                        {storyType === "blogs" && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {storyData.date && `${storyData.date}`}
                                {storyData.date && storyData.readTime && ` • `}
                                {storyData.readTime && `${storyData.readTime}`}
                                {storyData.readTime &&
                                    storyData.wordCount &&
                                    ` • `}
                                {storyData.wordCount && storyData.wordCount}
                            </p>
                        )}
                        */}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                        {storyData.summary}
                    </p>
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
