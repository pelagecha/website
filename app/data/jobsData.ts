export interface Job {
    title: string;
    company: string;
    date: string;
    description: string;
}

export const jobs: Job[] = [
    {
        title: "Software Engineer",
        company: "Tech Innovators Inc.",
        date: "Jan 2023 - Present",
        description:
            "Developing scalable web applications and leading a team of junior developers.",
    },
    {
        title: "Frontend Developer",
        company: "Creative Solutions",
        date: "Jun 2021 - Dec 2022",
        description:
            "Built responsive user interfaces and optimized performance for client projects.",
    },
    // Add more jobs
];
