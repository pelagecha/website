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
        image: "/images/projects/bigram/image.png",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "Bigram Language Model",
        duration: "2 weeks",
        summary: "A simple character-level language model using bigrams.",
        description: "",
        markdownContent: "bigram.md",
    },

    {
        slug: "ants",
        name: "Langton's Ant",
        image: "/images/projects/ants/cover.png",
        date: "2023-10-15",
        technologies: [
            "Haskell",
            "Gloss",
            "Stack",
            "Tasty",
            "HUnit",
            "QuickCheck",
        ],
        title: "Langton's Ant",
        duration: "2 weeks",
        summary: "A simulation of Langton's Ant using Haskell.",
        description: "",
        markdownContent: "ants.md",
    },

    {
        slug: "cnn",
        name: "CNN",
        image: "/images/projects/cnn/image.png",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "CNN",
        duration: "2 weeks",
        summary: "A simple character-level language model using bigrams.",
        description: "",
        markdownContent: "cnn.md",
    },

    {
        slug: "cpong",
        name: "CPong",
        image: "/images/projects/cpong/image.png",
        date: "2023-10-15",
        technologies: ["C", "libopencm3", "GPIO", "ADC"],
        title: "CPong",
        duration: "2 weeks",
        summary: "A Pong game developed on an STM32 microcontroller.",
        description: "",
        markdownContent: "cpong.md",
    },

    {
        slug: "parkapp",
        name: "ParkApp",
        image: "/images/projects/parkapp/cover.jpg",
        date: "2023-10-15",
        technologies: ["Swift", "SwiftUI", "MapKit", "Combine"],
        title: "ParkApp",
        duration: "2 weeks",
        summary: "An app that allows you to find parking spaces.",
        description: "",
        markdownContent: "parkapp.md",
    },

    {
        slug: "hurtle",
        name: "Hurtle Viewer",
        image: "/images/projects/hurtle/image.png",
        date: "2023-10-15",
        technologies: [
            "Haskell",
            "Gloss",
            "Stack",
            "Tasty",
            "HUnit",
            "QuickCheck",
        ],
        title: "Hurtle Viewer",
        duration: "2 weeks",
        summary: "A viewer for Hurtle, a Haskell-based programming language.",
        description: "",
        markdownContent: "hurtle.md",
    },
];
