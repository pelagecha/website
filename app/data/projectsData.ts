export interface Project {
    title: string;
    document: string;
    slug: string;
    name: string;
    summary: string;
    description: string;
    image: string;
    date: string;
    tags: string[];
}

export const projectsData: Project[] = [
    {
        slug: "gpt-2",
        name: "GPT-2 124M from scratch",
        image: "/images/projects/gpt2/image.png",
        date: "2023-10-15",
        tags: ["Python", "PyTorch", "DDP", "Matplotlib"],
        title: "GPT-2 124M from scratch",
        summary:
            "Transformer architecture, backpropagation, tokenization and training of OpenAI's GPT-2",
        description: "",
        document: "bigram.html",
    },
    {
        slug: "cnn",
        name: "CT-scan Lung Cancer Detection",
        image: "/images/projects/cnn/image.png",
        date: "2023-10-15",
        tags: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "CT-scan Lung Cancer Detection",
        summary:
            "Custom Convolution Neural Networks that identify cancerous images",
        description: "",
        document: "cnn.html",
    },

    {
        slug: "optiver",
        name: "ICHack Optiver Trading Simulation Challenge",
        image: "/images/projects/optiver/image.png",
        date: "2023-10-15",
        tags: ["Python", "Optibook"],
        title: "ICHack Optiver Trading Simulation",
        summary:
            "Arbitrage trading algorithm focused on liquidity strategies for dual-listed stocks",
        description: "",
        document: "ants.html",
    },
    {
        slug: "ants",
        name: "Langton's Ant",
        image: "/images/projects/ants/cover.png",
        date: "2023-10-15",
        tags: ["Haskell", "Gloss", "Stack"],
        title: "Langton's Ant",
        summary: "A simulation of Langton's Ant using Haskell",
        description: "",
        document: "ants.html",
    },

    {
        slug: "turtle",
        name: "Turtle Parser and Interpreter",
        image: "/images/projects/hurtle/image.png",
        date: "2023-10-15",
        tags: ["Haskell", "Gloss", "Stack"],
        title: "Turtle Parser and Interpreter",
        summary:
            "An interpreter and visualiser for Turtle, a Haskell-based programming language",
        description: "",
        document: "hurtle.html",
    },
    {
        slug: "cpong",
        name: "Pong in C",
        image: "/images/projects/cpong/image.png",
        date: "2023-10-15",
        tags: ["C", "libopencm3", "GPIO", "ADC"],
        title: "Pong in C",
        summary: "A Pong game developed on an STM32 microcontroller",
        description: "",
        document: "cpong.html",
    },
    {
        slug: "bigram",
        name: "Bigram Language Model",
        image: "/images/projects/bigram/image.png",
        date: "2023-10-15",
        tags: ["Python", "PyTorch", "NumPy", "Matplotlib"],
        title: "Bigram Language Model",
        summary: "A simple character-level language model using bigrams",
        description: "",
        document: "bigram.html",
    },
    // {
    //     slug: "parkapp",
    //     name: "ParkApp",
    //     image: "/images/projects/parkapp/cover.jpg",
    //     date: "2023-10-15",
    //     tags: ["Swift", "SwiftUI", "MapKit", "Combine"],
    //     title: "ParkApp",
    //     summary: "An app that allows you to find parking spaces.",
    //     description: "",
    //     document: "parkapp.html",
    // },
];

// Create a mapping of indices to project slugs
export const projectIndexMap: Record<number, string> = Object.fromEntries(
    projectsData.map((project, index) => [index, project.slug])
);
