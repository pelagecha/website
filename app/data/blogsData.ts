// app/data/blogsData.ts

export interface Blog {
    slug: string;
    title: string;
    summary: string;
    content: string;
    image: string;
    date: string; // Use ISO 8601 format
    category: string;
    wordCount?: number;
    readTime?: string;
}

export const blogsData: Blog[] = [
    {
        slug: "ai-in-modern-world",
        title: "The Impact of AI in the Modern World",
        summary:
            "Exploring how AI is reshaping industries and our daily lives.",
        content: `
  ### Introduction
  
  Artificial Intelligence (AI) has become an integral part of our society...
  
  *Discuss various aspects, benefits, and challenges of AI.*
  
  ### Conclusion
  
  AI continues to evolve and influence numerous sectors...
      `,
        image: "/images/ai-world.png",
        date: "2023-10-15",
        category: "Artificial Intelligence",
        // We'll calculate wordCount and readTime below
    },
    // Add more blogs...
];

// Calculate word count and read time for each blog
blogsData.forEach((blog) => {
    const words = blog.content.trim().split(/\s+/).length;
    blog.wordCount = words;

    // Assuming an average reading speed of 200 words per minute
    const minutes = Math.ceil(words / 200);
    blog.readTime = `${minutes} min read`;
});
