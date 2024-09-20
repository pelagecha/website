// app/data/blogsData.ts

import fs from "fs";
import path from "path";

export interface Blog {
    slug: string;
    title: string;
    summary: string;
    image: string;
    date: string;
    category: string;
    wordCount?: number;
    readTime?: string;
    markdownContent?: string; // New field for markdown content
}

export const blogsData: Blog[] = [
    {
        slug: "welcome",
        title: "Introduction",
        summary: "Welcome to my blog",
        image: "/images/blogs/intro/intro.png", // Ensure this image exists
        date: "2023-08-15",
        category: "miscellaneous",
        markdownContent: "intro.md", // Add this line
    },
];

// Calculate word count and read time for each blog
blogsData.forEach((blog) => {
    if (blog.markdownContent) {
        const filePath = path.join(
            process.cwd(),
            "public",
            "blogs",
            blog.markdownContent
        );
        const content = fs.readFileSync(filePath, "utf8");
        const words = content.trim().split(/\s+/).length;
        blog.wordCount = words;

        // Assuming an average reading speed of 200 words per minute
        const minutes = Math.ceil(words / 200);
        blog.readTime = `${minutes} min read`;
    }
});
