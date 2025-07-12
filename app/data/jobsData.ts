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
        title: "Software Engineer Intern",
        company: "Vanguard",
        date: "Jun 2025 - Ongoing",
        description: "Developing Software",
        details: "",
        companyUrl: "https://www.vanguardinvestor.co.uk/",
    },
    {
        title: "ML Research Intern",
        company: "University of Warwick - DCS",
        date: "Jul 2024 - Sep 2024",
        description:
            "Developed custom multi-LLM-agent Retrieval-Augmented Generation architectures for Docker-hosted Unix Bash and SQL task execution.",
        details:
            "• Collaborated with Prof. Long Tran-Thanh and his research network at the UMD as part of the Undergraduate Research Support Scheme.\n• Employed HyDE, hybrid routing, self-query retrievers, RAPTOR, RRF, CRAG, and CoT prompting to optimise retrieval and reasoning.\n• Achieved a 12% performance improvement on programmatic and reasoning tasks compared to standard LLMs, validated through AgentBench.",
        companyUrl: "https://warwick.ac.uk/fac/sci/dcs/",
    },
    {
        title: "Software Engineer",
        company: "",
        date: "Jul 2024 - Oct 2024",
        description:
            "Designed, developed, and deployed a commercial WordPress website for a startup in MAMP, Elementor and PHP.",
        details:
            "• Integrated plugin-based payment gateways, security protocols, and configured SQL databases ensuring seamless backend communication.\n• Created an accessible, user-friendly UI/UX that attracted over 250 users on launch day.",
        companyUrl: "",
    },
    {
        title: "CTO/Co-founder",
        company: "ParkApp",
        date: "Jan 2024 - Jul 2024",
        description:
            "Co-founded a parking app startup in a team of 4 students contributing to over 600 combined hours of market research and software development.",
        details:
            "• Designed and implemented a semi-functional prototype using Swift, incorporating user reporting features for real-time parking availability. \n • Secured mentorship from a Warwick Science Park representative, leveraging their expertise to refine business models and technical decisions.",
        companyUrl: "",
    },
    {
        title: "Archery Specialist",
        company: "Camp Kinder Ring",
        date: "Jun 2023 - Aug 2023",
        description:
            "Managed the archery program, driving a 50% increase in participant engagement and overseeing activities for 500+ individuals.",
        details:
            "• Collaborated with a 200-member team to execute large-scale events, honing leadership and cross-functional communication skills\n• Ensured safety protocols were strictly followed, resulting in zero incidents during the program",
        companyUrl: "https://www.campkr.com/",
    },
    {
        title: "Food and Beverage Assistant",
        company: "Chestnut",
        date: "Mar 2022 - Sep 2022",
        description:
            "Delivered consistent service to 50-100 guests daily, leveraging problem-solving and multitasking skills in a fast-paced environment.",
        details:
            "• Contributed to the training of new staff, enhancing team productivity and fostering a collaborative culture\n• Maintained high standards of cleanliness and adhered to food safety regulations",
        companyUrl: "https://www.chestnutgroup.co.uk/",
    },
    {
        title: "Volunteer, Radio Electronics",
        company: "Palace of Children's and Youth Creativity",
        date: "Sep 2019 - Nov 2019",
        description:
            "Assembled and soldered circuit boards while gaining practical experience in embedded systems and programming with Arduino and C++.",
        details:
            "• Programmed embedded system microcontrollers, enhancing their performance by up to 30% through optimisation.",
        companyUrl: "https://palace.kyiv.ua/",
    },
];
