// app/components/Blogs.tsx
"use client";

import React from "react";
import blogsData from "../data/blogsData";

const Blogs: React.FC = () => {
    return (
        <section id="blogs" className="my-16 p-4">
            <h2 className="text-3xl font-bold mb-4">Blogs</h2>
            <div className="overflow-x-auto flex space-x-4">
                {blogsData.map((blog) => (
                    <div
                        key={blog.title}
                        className="min-w-[300px] bg-gray-100 p-4 rounded-lg hover:scale-105 transform transition-transform"
                    >
                        <h3 className="text-xl font-semibold">{blog.title}</h3>
                        <p className="mt-2">{blog.excerpt}</p>
                        <a
                            href={blog.link}
                            className="text-blue-500 mt-4 inline-block"
                        >
                            Read more →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
