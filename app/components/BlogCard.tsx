// components/BlogCard.tsx
"use client";

import React from "react";
import { Blog } from "../data/blogsData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
    blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full bg-gray-100 dark:bg-transparent dark:backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
        >
            <Link href={`/blogs/${blog.slug}`} passHref>
                <div className="cursor-pointer">
                    <div className="relative h-48 w-full">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                            {blog.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {blog.date} • {blog.readTime} • {blog.wordCount}{" "}
                            words
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                            {blog.summary}
                        </p>
                        <span className="inline-block px-2 py-1 bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                            {blog.category}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default BlogCard;
