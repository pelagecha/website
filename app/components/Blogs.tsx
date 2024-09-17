import React from "react";
import { blogsData } from "../data/blogsData";
import BlogCard from "./BlogCard";

const Blogs: React.FC = () => {
    return (
        <section id="blogs" className="my-16 p-4 container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Blogs</h2>
            <div className="flex overflow-x-auto space-x-6">
                {blogsData.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
