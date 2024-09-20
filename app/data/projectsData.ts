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
        slug: "bigram",
        name: "Bigram Language Model",
        image: "/images/projects/bigram/cover.png",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "Bigram Language Model",
        duration: "2 weeks",
        summary: "A simple character-level language model using bigrams.",
        description: "",
        markdownContent: "bigram.md",
    },

    {
        slug: "bigram",
        name: "Bigram Language Model",
        image: "/images/projects/bigram/cover.png",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "Bigram Language Model",
        duration: "2 weeks",
        summary: "A simple character-level language model using bigrams.",
        description: "",
        markdownContent: "bigram.md",
    },

    {
        slug: "bigram",
        name: "Bigram Language Model",
        image: "/images/projects/bigram/cover.png",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "Bigram Language Model",
        duration: "2 weeks",
        summary: "A simple character-level language model using bigrams.",
        description: "",
        markdownContent: "bigram.md",
    },

    {
        slug: "bigram",
        name: "Bigram Language Model",
        image: "/images/projects/bigram/cover.png",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "Bigram Language Model",
        duration: "2 weeks",
        summary: "A simple character-level language model using bigrams.",
        description: "",
        markdownContent: "bigram.md",
    },
];
