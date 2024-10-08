import React from "react";
import { blogsData } from "../data/blogsData";
import BlogCard from "../components/BlogCard";

const BlogsPage: React.FC = () => {
    const sortedBlogs = [...blogsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className="container mx-auto my-16 p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
                Blogs Gallery
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedBlogs.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;
