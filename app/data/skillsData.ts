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
        name: "Python",
        logo: "/images/skills/python.png",
        description:
            "Advanced proficiency in competitive programming, ML development, and scripting.",
        proficiency: "Advanced",
        experience: "5 years",
    },
    {
        name: "Haskell",
        logo: "/images/skills/haskell.png",
        description:
            "Experienced in building parsers and visualizations of mathematical problems.",
        proficiency: "Intermediate",
        experience: "1 year",
    },
    {
        name: "JavaScript",
        logo: "/images/skills/js.png",
        description: "Built this website and various web applications.",
        proficiency: "Beginner",
        experience: "6 months",
    },
    // Placeholder Skills for Testing
    {
        name: "TypeScript",
        logo: "/images/skills/typescript.png",
        description:
            "Strong understanding of TypeScript for scalable web development.",
        proficiency: "Intermediate",
        experience: "2 years",
    },
    {
        name: "React",
        logo: "/images/skills/react.png",
        description:
            "Developed multiple SPAs using React and related technologies.",
        proficiency: "Advanced",
        experience: "3 years",
    },
    {
        name: "CSS",
        logo: "/images/skills/css.png",
        description: "Proficient in creating responsive and modern UI designs.",
        proficiency: "Advanced",
        experience: "4 years",
    },
];
