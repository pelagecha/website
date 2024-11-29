// app/blogs/[slug]/page.tsx

import React from "react";
import { blogsData } from "../../data/blogsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Blog } from "../../data/blogsData";
import fs from "fs/promises";
import path from "path";

interface BlogPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return blogsData.map((blog: Blog) => ({ slug: blog.slug }));
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
    const blog = blogsData.find((b: Blog) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    let content = "";
    if (blog.markdownContent) {
        const filePath = path.join(
            process.cwd(),
            "app",
            "data",
            "blogs",
            blog.markdownContent
        );
        content = await fs.readFile(filePath, "utf8");
    }

    const isHtml = blog.isHtml; // Assuming you have a flag in your blog data to indicate HTML content

    return (
        <article className="container mx-auto my-16 p-4 max-w-4xl">
            <Link
                href="/#blogs"
                className="text-blue-500 dark:text-blue-400 hover:underline mb-6 inline-block"
            >
                &larr; Back to Blogs
            </Link>
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {blog.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {blog.date} • {blog.readTime} • {blog.wordCount} words
                </p>
            </header>
            <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-lg mb-8"
            />
            <div className="prose prose-lg max-w-none dark:prose-invert">
                {isHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                    <ReactMarkdown>{content}</ReactMarkdown>
                )}
            </div>
            <div className="flex justify-center py-4">
                <Link
                    href="/#projects"
                    className="text-blue-400 hover:underline mb-6 inline-block"
                >
                    &larr; Back to Blogs
                </Link>
            </div>
        </article>
    );
};

export default BlogPage;
