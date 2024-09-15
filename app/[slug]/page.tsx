// app/[slug]/page.tsx
import React from "react";
import { blogsData } from "../data/blogsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Blog } from "../data/blogsData";

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
    const blog = blogsData.find((b: Blog) => b.slug === slug);

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

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
    const { slug } = params;
    const blog = blogsData.find((b: Blog) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="container mx-auto my-16 p-4">
            <Link
                href="/"
                className="text-blue-500 hover:underline mb-4 inline-block"
            >
                &larr; Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-500 mb-4">{blog.date}</p>
            <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-md mb-4"
            />
            <div className="prose prose-lg">
                <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
        </div>
    );
};

export default BlogPage;
