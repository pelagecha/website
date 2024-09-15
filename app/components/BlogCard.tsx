// app/components/BlogCard.tsx

import React from "react";
import { Blog } from "../data/blogsData";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
    blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Image
                src={`https://picsum.photos/seed/${blog.slug}/400/160`}
                alt={blog.title}
                width={400}
                height={160}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blog.summary}
            </p>
            <Link
                href={`/${blog.slug}`}
                className="text-blue-500 hover:underline"
            >
                Read More
            </Link>
        </div>
    );
};

export default BlogCard;
