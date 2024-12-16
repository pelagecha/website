import React from "react";
import { blogsData } from "@/app/data/blogsData";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import StoryCard from "@/app/components/StoryCard";

const BlogsPage: React.FC = () => {
    const sortedBlogs = [...blogsData].sort((a, b) => {
        const dateA = a.date ? new Date(a.date) : new Date();
        const dateB = b.date ? new Date(b.date) : new Date();
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <div className="relative container mx-auto my-16 p-4">
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
            </div>
            <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Blogs Gallery
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedBlogs.map((blog) => (
                        <StoryCard
                            key={blog.slug}
                            storyType="blogs"
                            storyData={blog}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
