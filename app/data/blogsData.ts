export interface Blog {
    slug: string;
    title: string;
    document: string; // New field for markdown content
    summary: string;
    image: string;
    date?: string;
    tags: string[];
    wordCount?: number;
    readTime?: string;
}

export const blogsData: Blog[] = [
    {
        slug: "welcome",
        title: "Introduction",
        summary: "Welcome to my blog",
        image: "/images/blogs/intro/me.png",
        date: "2023-08-15",
        tags: ["personal"],
        document: "intro.html",
    },

    {
        slug: "mirage",
        title: "Mirage",
        summary:
            "Stories from the greatest music band at Warwick. Battle of The Cover Bands 2024 winners!",
        image: "/images/blogs/mirage/image.png", // Ensure this image exists
        date: "2023-08-15",
        tags: ["hobbies", "music"],
        document: "mirage.html",
    },
];

// Create a mapping of indices to project slugs
export const projectIndexMap: Record<number, string> = Object.fromEntries(
    blogsData.map((blog, index) => [index, blog.slug])
);
