// app/components/Blogs.tsx
import React from "react";
import { blogsData } from "../data/blogsData";
import BlogCard from "./BlogCard";

const Blogs: React.FC = () => {
    return (
        <section id="blogs" className="my-16 p-4 container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogsData.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
