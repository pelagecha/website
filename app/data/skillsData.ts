// app/data/skillsData.ts

export interface Skill {
    name: string;
    logo: string;
    description: string;
    proficiency: string; // e.g., 'Beginner', 'Intermediate', 'Advanced'
    experience: string; // e.g., '2 years', '3 months'
}

export const skillsData: Skill[] = [
    {
        name: "JavaScript",
        logo: "/images/skills/javascript.png",
        description:
            "Advanced proficiency in JavaScript, including ES6+ features.",
        proficiency: "Advanced",
        experience: "3 years",
    },
    {
        name: "React",
        logo: "/images/skills/react.png",
        description: "Experienced in building complex SPAs with React.",
        proficiency: "Advanced",
        experience: "2.5 years",
    },
    {
        name: "Node.js",
        logo: "/images/skills/nodejs.png",
        description: "Proficient in building backend services with Node.js.",
        proficiency: "Intermediate",
        experience: "2 years",
    },
    // Add more skills as needed
];
