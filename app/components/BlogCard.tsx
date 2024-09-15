// app/components/BlogCard.tsx
import React from "react";
import { Blog } from "../data/blogsData";
import Link from "next/link";

interface BlogCardProps {
    blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.summary}</p>
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
