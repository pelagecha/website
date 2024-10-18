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
        slug: "gpt-2",
        name: "GPT-2 124M from scratch",
        image: "/images/projects/gpt2/image.png",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "DDP", "Matplotlib"],
        title: "GPT-2 124M from scratch",
        duration: "2 weeks",
        summary:
            "Transformer architecture, backpropagation, tokenization and training of OpenAI's GPT-2",
        description: "",
        markdownContent: "bigram.md",
    },
    {
        slug: "cnn",
        name: "CT-scan Lung Cancer Detection",
        image: "/images/projects/cnn/image.png",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "CT-scan Lung Cancer Detection",
        duration: "2 weeks",
        summary:
            "Custom Convolution Neural Networks that identify cancerous images",
        description: "",
        markdownContent: "cnn.md",
    },

    {
        slug: "optiver",
        name: "ICHack Optiver Trading Simulation Challenge",
        image: "/images/projects/optiver/image.png",
        date: "2023-10-15",
        technologies: ["Python", "Optibook"],
        title: "ICHack Optiver Trading Simulation",
        duration: "2 weeks",
        summary:
            "Arbitrage trading algorithm focused on liquidity strategies for dual-listed stocks",
        description: "",
        markdownContent: "ants.md",
    },
    {
        slug: "ants",
        name: "Langton's Ant",
        image: "/images/projects/ants/cover.png",
        date: "2023-10-15",
        technologies: ["Haskell", "Gloss", "Stack"],
        title: "Langton's Ant",
        duration: "2 weeks",
        summary: "A simulation of Langton's Ant using Haskell",
        description: "",
        markdownContent: "ants.md",
    },

    {
        slug: "turtle",
        name: "Turtle Parser and Interpreter",
        image: "/images/projects/hurtle/image.png",
        date: "2023-10-15",
        technologies: ["Haskell", "Gloss", "Stack"],
        title: "Turtle Parser and Interpreter",
        duration: "2 weeks",
        summary:
            "An interpreter and visualiser for Turtle, a Haskell-based programming language",
        description: "",
        markdownContent: "hurtle.md",
    },
    {
        slug: "cpong",
        name: "Pong in C",
        image: "/images/projects/cpong/image.png",
        date: "2023-10-15",
        technologies: ["C", "libopencm3", "GPIO", "ADC"],
        title: "Pong in C",
        duration: "2 weeks",
        summary: "A Pong game developed on an STM32 microcontroller",
        description: "",
        markdownContent: "cpong.md",
    },
    {
        slug: "bigram",
        name: "Bigram Language Model",
        image: "/images/projects/bigram/image.png",
        date: "2023-10-15",
        technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "Bigram Language Model",
        duration: "2 weeks",
        summary: "A simple character-level language model using bigrams",
        description: "",
        markdownContent: "bigram.md",
    },
    // {
    //     slug: "parkapp",
    //     name: "ParkApp",
    //     image: "/images/projects/parkapp/cover.jpg",
    //     date: "2023-10-15",
    //     technologies: ["Swift", "SwiftUI", "MapKit", "Combine"],
    //     title: "ParkApp",
    //     duration: "2 weeks",
    //     summary: "An app that allows you to find parking spaces.",
    //     description: "",
    //     markdownContent: "parkapp.md",
    // },
];
