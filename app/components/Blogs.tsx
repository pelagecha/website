import React from "react";
import { blogsData } from "../data/blogsData";
import BlogCard from "./BlogCard";

const Blogs: React.FC = () => {
    return (
        <section id="blogs" className="my-16 p-4 container mx-auto">
            <div className="flex overflow-x-auto space-x-6">
                {blogsData.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
