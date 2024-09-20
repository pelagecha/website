// app/data/projectsData.ts

import { ReactNode } from "react";

export interface Project {
    title: any;
    duration: ReactNode;
    slug: string;
    name: string;
    summary: string;
    description: string;
    image: string; // Mandatory
    date: string; // Use ISO 8601 format
    technologies: string[];
}

export const projectsData: Project[] = [
    // ----------------------------------------
    // ---------- Bigram Predictor --------------
    // ----------------------------------------
    {
        slug: "bigram-character-predictor",
        name: "Bigram Character Predictor",
        image: "/images/projects/test.jpg",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: undefined,
        duration: undefined,
        summary: "summary",
        description: `all the text`,
    },
    // Add more projects...
];
