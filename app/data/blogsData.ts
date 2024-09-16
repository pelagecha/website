// app/data/blogsData.ts

export interface Blog {
    slug: string;
    title: string;
    summary: string;
    content: string;
    image: string; // Mandatory
    date: string; // Use ISO 8601 format
    category: string;
    wordCount?: number;
    readTime?: string;
}

export const blogsData: Blog[] = [
    {
        slug: "the-philosophy-of-middle-earth",
        title: "The Philosophy of Middle-earth: Exploring Tolkien’s World",
        summary:
            "A deep dive into the philosophical and moral underpinnings of J.R.R. Tolkien's 'The Lord of the Rings' and its impact on modern literature.",
        content: `
### Introduction

J.R.R. Tolkien’s *The Lord of the Rings* isn’t just a story about hobbits, elves, and wizards. At its core, it presents profound questions about morality, power, and the nature of good and evil.

### The Nature of Power

One of the central themes in *The Lord of the Rings* is the corrupting nature of power. The One Ring symbolizes the seductive pull of absolute power and its ability to corrupt even the most well-intentioned individuals...

### Good vs. Evil

Tolkien's depiction of good and evil is often seen as clear-cut, yet there are shades of moral complexity, especially in characters like Gollum and Saruman...

### Conclusion

Tolkien’s work transcends fantasy, offering lessons on leadership, friendship, and the consequences of unchecked ambition.
    `,
        image: "/images/blogs/test.jpg", // Ensure this image exists
        date: "2023-11-01",
        category: "Literature",
    },
    {
        slug: "tolkien-vs-modern-fantasy",
        title: "Tolkien vs. Modern Fantasy: How Has the Genre Evolved?",
        summary:
            "Comparing the works of J.R.R. Tolkien with modern fantasy writers and exploring how the genre has evolved over time.",
        content: `
### Introduction

J.R.R. Tolkien is often referred to as the father of modern fantasy, but the genre has undergone significant changes since *The Lord of the Rings* was first published in 1954...

### Tolkien’s Influence

Without a doubt, Tolkien laid the groundwork for what fantasy could be, establishing tropes such as the quest, the unlikely hero, and the epic battle of good vs. evil...

### The Rise of Grimdark

In contrast to Tolkien's optimistic worldview, modern fantasy has embraced darker, more morally ambiguous tones, epitomized by authors like George R.R. Martin...

### Conclusion

While Tolkien's influence remains strong, modern fantasy writers are expanding the genre, experimenting with themes of ambiguity, diversity, and realism.
    `,
        image: "/images/blogs/test.jpg", // Ensure this image exists
        date: "2023-10-25",
        category: "Fantasy",
    },
    {
        slug: "dystopia-of-1984",
        title: "The Dystopia of 1984: Orwell’s Vision and Our Reality",
        summary:
            "Exploring the themes of George Orwell’s *1984* and their relevance in today’s world.",
        content: `
### Introduction

George Orwell’s *1984* paints a terrifying picture of a totalitarian regime that manipulates truth and suppresses freedom. As surveillance technology advances, many wonder: how far are we from Orwell’s dystopia?

### The Concept of Big Brother

In *1984*, Big Brother represents the omnipresent government surveillance. Today, with the rise of surveillance capitalism and data collection, Orwell's vision seems more relevant than ever...

### Language as Control: Newspeak

Orwell's exploration of language manipulation through Newspeak is eerily prescient in an age where political rhetoric and media framing shape public perception...

### Conclusion

*1984* remains a cautionary tale, reminding us to stay vigilant in defending our personal freedoms in an increasingly connected and monitored world.
    `,
        image: "/images/blogs/test.jpg", // Ensure this image exists
        date: "2023-09-20",
        category: "Dystopia",
    },
    {
        slug: "themes-in-1984-and-lotr",
        title: "Themes of Power in '1984' and 'The Lord of the Rings'",
        summary:
            "A comparative analysis of how George Orwell and J.R.R. Tolkien explore the theme of power in *1984* and *The Lord of the Rings*.",
        content: `
### Introduction

Though vastly different in style and genre, both *1984* and *The Lord of the Rings* grapple with the corrupting nature of power. Orwell and Tolkien offer different yet complementary insights into how power shapes individuals and societies.

### The One Ring and Totalitarian Control

In *The Lord of the Rings*, the One Ring symbolizes absolute power, tempting even the most virtuous. Similarly, in *1984*, the Party wields unchecked power, controlling both reality and the minds of its citizens...

### Resistance and Hope

Despite the darkness in both worlds, Tolkien and Orwell offer glimpses of hope. Frodo and Winston Smith, while flawed, represent the struggle for freedom against insurmountable odds...

### Conclusion

Both *1984* and *The Lord of the Rings* warn of the dangers of unchecked power, but they also offer pathways to redemption, reminding us that even in the darkest times, hope and resistance persist.
    `,
        image: "/images/blogs/test.jpg", // Ensure this image exists
        date: "2023-08-15",
        category: "Literature",
    },
];

// Calculate word count and read time for each blog
blogsData.forEach((blog) => {
    const words = blog.content.trim().split(/\s+/).length;
    blog.wordCount = words;

    // Assuming an average reading speed of 200 words per minute
    const minutes = Math.ceil(words / 200);
    blog.readTime = `${minutes} min read`;
});
