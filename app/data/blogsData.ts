// app/data/blogsData.ts

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
        image: "/images/blogs/intro/me.png", // Ensure this image exists
        date: "2023-08-15",
        category: "personal",
        markdownContent: "intro.md", // Add this line
    },

    {
        slug: "mirage",
        title: "Mirage",
        summary: "(upcoming) stories from the greatest music band at Warwick",
        image: "/images/blogs/mirage/image.png", // Ensure this image exists
        date: "2023-08-15",
        category: "hobbies",
        markdownContent: "mirage.md", // Add this line
    },
];

// Calculate word count and read time for each blog
blogsData.forEach((blog) => {
    if (blog.markdownContent) {
        const words = blog.markdownContent.trim().split(/\s+/).length;
        blog.wordCount = words;

        // Assuming an average reading speed of 200 words per minute
        const minutes = Math.ceil(words / 200);
        blog.readTime = `${minutes} min read`;
    }
});
