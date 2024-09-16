// app/data/jobsData.ts

export interface Job {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string;
}

export const jobs: Job[] = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Tech Innovators Inc.",
        duration: "Jan 2023 - Present",
        description:
            "Developing scalable web applications and leading a team of junior developers.",
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Creative Solutions",
        duration: "Jun 2021 - Dec 2022",
        description:
            "Built responsive user interfaces and optimized performance for client projects.",
    },
    // Add more jobs as needed
];
