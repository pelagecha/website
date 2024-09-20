// app/data/projectsData.ts

import { ReactNode } from "react";

export interface Project {
    title: string;
    duration: string;
    slug: string;
    name: string;
    summary: string;
    description: string;
    image: string;
    date: string;
    technologies: string[];
    markdownContent?: string; // New field for markdown content
}

export const projectsData: Project[] = [
    {
        slug: "bigram-character-predictor",
        name: "Bigram Character Predictor",
        image: "/images/projects/test.jpg",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "Bigram Character Predictor",
        duration: "2 weeks",
        summary: "A simple character-level language model using bigrams.",
        description: "Short description for card view",
        markdownContent: "bigram-predictor.md", // Reference to the markdown file
    },
    // Add more projects...
];
