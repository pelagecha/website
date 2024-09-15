// app/data/blogsData.ts
export interface Blog {
    slug: string;
    title: string;
    summary: string;
    content: string;
    image: string;
    date: string; // Use ISO 8601 format: 'YYYY-MM-DD'
    category: string;
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
    },
    {
        slug: "machine-learning-basics",
        title: "Understanding the Basics of Machine Learning",
        summary:
            "A beginner's guide to machine learning concepts and applications.",
        content: `
        ### What is Machine Learning?
        Machine learning is a subset of AI focused on building systems that learn from data...
        *Include explanations of supervised, unsupervised learning, etc.*
  
        ### Practical Applications
        Machine learning is used in various fields such as healthcare, finance...
      `,
        image: "/images/machine-learning.png",
        date: "2023-09-10",
        category: "Machine Learning",
    },
    // Add more blogs with appropriate categories and dates
];
