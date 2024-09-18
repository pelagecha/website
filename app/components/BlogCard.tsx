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
        <Link href={`/blogs/${blog.slug}`} passHref>
            <motion.a
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                }}
                className="
                    w-full 
                    bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 
                    dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 
                    rounded-lg 
                    shadow-md 
                    p-4 
                    hover:shadow-2xl 
                    transition-shadow 
                    duration-300 
                    transform 
                    cursor-pointer 
                    flex 
                    flex-col
                "
                aria-label={`Read blog post: ${blog.title}`}
            >
                <div className="w-full h-32 mb-4 relative">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                        priority
                    />
                </div>
                <h3 className="text-gray-900 dark:text-gray-100 text-lg overflow-hidden line-clamp-1 font-semibold mb-1">
                    {blog.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-xs mb-2">
                    {blog.date} • {blog.readTime} • {blog.wordCount} words
                </p>
                <div className="flex-1">
                    <p className="text-gray-800 dark:text-gray-300 mb-4 line-clamp-3">
                        {blog.summary}
                    </p>
                </div>
                <div className="mt-auto">
                    <span className="inline-block bg-gray-500 dark:bg-gray-400 text-xs overflow-hidden line-clamp-1 text-white px-2 py-1 rounded-full">
                        {blog.category}
                    </span>
                </div>
            </motion.a>
        </Link>
    );
};

export default BlogCard;
