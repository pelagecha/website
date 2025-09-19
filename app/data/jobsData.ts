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
        date: "Jun 2025 - Aug 2025",
        description: "Built a portfolio analytics tool with agentic LangGraph MCP, using Markowitz optimisation and Dirichlet stochastic process modelling.",
        details: `• Cut CI/CD pipeline build times for an international website by 10-15%; automated non-prod deployment and CR closure in other repos.
            • Integrated a cross-repo test profiling system to track code coverage/defects; raised test coverage in a core repo from 40% to 89%.
            • Configured AWS Lambda functions, wrote Angular UI and Java backend for a full-stack B2B financial advisory platform.`,
        companyUrl: "https://www.vanguardinvestor.co.uk/",
    },
    {
        title: "Deep Learning Research Team",
        company: "University of Warwick - DCS",
        date: "Jan 2024 - Jun 2024",
        description: "Applied variational calculus and functional analysis via graphons to explore trainable network topology for DNN pruning.",
        details: "• Researched the lottery ticket hypothesis with Prof. Long Tran-Thanh’s PhD team; analysed optimally performant DNN subnetworks.",
        companyUrl: "https://warwick.ac.uk/fac/sci/dcs/",
    },
    {
        title: "ML Research Intern",
        company: "University of Warwick - DCS",
        date: "Jul 2024 - Sep 2024",
        description: "Developed a multi-agent RAG architecture for Unix Bash and SQL task execution with Prof. Long Tran-Thanh and researchers from UMD.",
        details: `• Trained on a Slurm cluster and deployed with Docker. Used HyDE, hybrid routing, self-query retrievers, RAPTOR, RRF, CRAG, and CoT.
                • Achieved a 12% performance improvement on programmatic and reasoning tasks compared to non-RAG architectures (AgentBench).`,
        companyUrl: "https://warwick.ac.uk/fac/sci/dcs/",
    },
    {
        title: "Software Engineer Intern",
        company: "Cosina",
        date: "Jul 2024 - Oct 2024",
        description: "Developed and deployed the alpha version of a commercial food delivery website in WordPress, PHP, MAMP, Elementor, and pgAdmin.",
        details: `• Integrated plugin-based payment gateways, security protocols, and configured SQL databases to optimise site performance.
                • Worked closely with the founders, designers and marketing teams; attracted 550 users on launch day.`,
        companyUrl: "https://cosina.es/",
    },
    {
        title: "CTO/Co-founder",
        company: "ParkApp",
        date: "Jan 2024 - Jul 2024",
        description: "Co-founded a parking app startup in an agile team of 4 (later 6), contributing to 500+ hours of market research and software development.",
        details: `• Built a native iOS prototype with SwiftUI, MapKit, and CoreLocation, with support for real-time parking availability and navigation.
            • Advised by Warwick Science Park; attracted a £15,000 external funding offer and interest from Entrepreneurs First.`,
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
