export interface Job {
    title: string;
    company: string;
    date: string;
    description: string;
    details: string;
    companyUrl?: string;
}

export const jobs: Job[] = [
    {
        title: "Research Intern",
        company: "University of Warwick - DCS",
        date: "Jul 2024 - Sep 2024",
        description:
            "Engaged in research activities contributing to computer science projects. Applied analytical skills and technical knowledge to develop insights for the research team.",
        details:
            "• Contributed to ongoing research projects in the Department of Computer Science\n• Applied machine learning techniques to solve complex problems\n• Collaborated with faculty and other researchers on cutting-edge topics\n• Presented findings in departmental seminars",
        companyUrl: "https://warwick.ac.uk/fac/sci/dcs/",
    },
    {
        title: "Archery Specialist",
        company: "Camp Kinder Ring",
        date: "Jun 2023 - Aug 2023",
        description:
            "Managed the archery program, driving a 50% increase in participant engagement and overseeing activities for 500+ individuals.",
        details:
            "• Managed the archery program, driving a 50% increase in participant engagement and overseeing activities for 500+ individuals\n• Collaborated with a 200-member team to execute large-scale events, honing leadership and cross-functional communication skills\n• Ensured safety protocols were strictly followed, resulting in zero incidents during the program",
        companyUrl: "https://campkinderring.com/",
    },
    {
        title: "Food and Beverage Assistant",
        company: "The Rupert Brooke",
        date: "Mar 2022 - Sep 2022",
        description:
            "Delivered consistent service to 50-100 guests daily, leveraging problem-solving and multitasking skills in a fast-paced environment.",
        details:
            "• Delivered consistent service to 50-100 guests daily, leveraging problem-solving and multitasking skills in a fast-paced environment\n• Contributed to the training of new staff, enhancing team productivity and fostering a collaborative culture\n• Maintained high standards of cleanliness and adhered to food safety regulations",
        companyUrl: "https://www.therupertbrooke.com/",
    },
    {
        title: "Volunteer, Radio Electronics",
        company: "Palace of Children's and Youth Creativity",
        date: "Sep 2019 - Nov 2019",
        description:
            "Assembled and soldered circuit boards while gaining practical experience in embedded systems and programming with Arduino and C++.",
        details:
            "• Assembled and soldered circuit boards, ensuring high-quality and functional outcomes, demonstrating strong attention to detail\n• Applied Arduino and C++ in hands-on projects, gaining practical experience in programming and embedded systems development\n• Mentored younger participants, fostering their interest in electronics and programming",
        companyUrl: "http://www.palace.dp.ua/",
    },
];
