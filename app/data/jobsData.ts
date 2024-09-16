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
        title: "Research Intern",
        company: "University of Warwick - DCS",
        duration: "Jul 2024 - Sep 2024",
        description:
            "Engaged in research activities contributing to computer science projects. Applied analytical skills and technical knowledge to develop insights for the research team.",
    },
    {
        id: 2,
        title: "Archery Specialist",
        company: "Camp Kinder Ring",
        duration: "Jun 2023 - Aug 2023",
        description:
            "Managed the archery program, increasing participant engagement by 50%. Worked with a team of 200 to organize large-scale events for over 500 individuals.",
    },
    {
        id: 3,
        title: "Food and Beverage Assistant",
        company: "The Rupert Brooke",
        duration: "Mar 2022 - Sep 2022",
        description:
            "Provided exceptional service to guests daily, leveraging problem-solving and multitasking skills. Contributed to training new staff and improving team productivity.",
    },
    {
        id: 4,
        title: "Volunteer, Radio Electronics",
        company: "Palace of Children’s and Youth Creativity",
        duration: "Sep 2019 - Nov 2019",
        description:
            "Assembled and soldered circuit boards while gaining practical experience in embedded systems and programming with Arduino and C++.",
    },
];
