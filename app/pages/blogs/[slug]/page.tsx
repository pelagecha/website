import React from "react";
import { blogsData } from "@/app/data/blogsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

interface BlogPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return blogsData.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
    const { slug } = params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
            description: "The blog post you are looking for does not exist.",
        };
    }

    return {
        title: blog.title,
        description: blog.summary,
    };
}

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
    const { slug } = params;
    const blogIndex = blogsData.findIndex((b) => b.slug === slug);

    if (blogIndex === -1) {
        notFound();
    }

    const blog = blogsData[blogIndex];

    // Navigation logic
    const prevBlogSlug = blogIndex > 0 ? blogsData[blogIndex - 1].slug : null;
    const nextBlogSlug =
        blogIndex < blogsData.length - 1 ? blogsData[blogIndex + 1].slug : null;

    // Fetch blog content
    const filePath = path.join(
        process.cwd(),
        "app",
        "data",
        "blogs",
        blog.document
    );
    const content = await fs.readFile(filePath, "utf8");

    return (
        <article className="container mx-auto my-16 p-4 max-w-4xl">
            {/* Blog Content */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {blog.title}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {blog.date && `${blog.date}`}
                    {blog.date && blog.readTime && ` • `}
                    {blog.readTime && `${blog.readTime}`}
                    {blog.readTime && blog.wordCount && ` • `}
                    {blog.wordCount && blog.wordCount}
                </p>
            </header>
            <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-md mb-8"
            />
            <div className="prose prose-lg max-w-none dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-between items-center py-8 text-blue-500">
                {prevBlogSlug ? (
                    <Link
                        href={`/blogs/${prevBlogSlug}`}
                        className="hover:underline"
                    >
                        &larr; {blogsData[blogIndex - 1].title}
                    </Link>
                ) : (
                    <span className="opacity-50">&larr; Previous</span>
                )}
                <Link href="/#blogs" className="text-blue-500 hover:underline">
                    Blogs
                </Link>
                {nextBlogSlug ? (
                    <Link
                        href={`/blogs/${nextBlogSlug}`}
                        className="hover:underline"
                    >
                        {blogsData[blogIndex + 1].title} &rarr;
                    </Link>
                ) : (
                    <span className="opacity-50">Next &rarr;</span>
                )}
            </div>
        </article>
    );
};

export default BlogPage;
