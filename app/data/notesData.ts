export interface Note {
    slug: string;
    title: string;
    document: string; // New field for markdown content
    summary: string;
    image: string;
    date?: string;
    tags?: string[];
    wordCount?: number;
    readTime?: string;
}

export const notesData: Note[] = [
    {
        slug: "y2",
        title: "Year 2 (2024-2025)",
        summary: "",
        image: "/images/notes/whack.jpg", // Ensure this image exists
        document: "y2.html",
    },
    {
        slug: "y1",
        title: "Year 1 (2023-2024)",
        summary: "",
        image: "/images/notes/fab.jpg",
        document: "y1.html",
    },
];

// Create a mapping of indices to project slugs
export const projectIndexMap: Record<number, string> = Object.fromEntries(
    notesData.map((blog, index) => [index, blog.slug])
);
