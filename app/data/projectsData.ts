// app/data/projectsData.ts
export interface Project {
    name: string;
    summary: string;
    details: string;
    image: string;
    points: string[];
}

const projectsData: Project[] = [
    {
        name: "AI-Powered Chatbot",
        summary: "A chatbot that uses AI to simulate human conversation.",
        details: `In this project, I developed an AI-powered chatbot using Natural Language Processing (NLP) techniques. The chatbot can understand user intent and provide relevant responses, making interactions more natural and engaging.`,
        image: "/images/chatbot.png", // Placeholder image path
        points: [
            "Implemented NLP algorithms for intent recognition.",
            "Integrated with popular messaging platforms.",
            "Achieved 90% accuracy in understanding user queries.",
        ],
    },
    {
        name: "Machine Learning Stock Predictor",
        summary: "Predicting stock prices using machine learning algorithms.",
        details: `This project involved creating a machine learning model to predict stock market trends. I used historical stock data to train the model and implemented various algorithms to improve prediction accuracy.`,
        image: "/images/stock-predictor.png",
        points: [
            "Collected and preprocessed large datasets of stock prices.",
            "Explored different ML models like LSTM and ARIMA.",
            "Increased prediction accuracy by 15% over baseline models.",
        ],
    },
    {
        name: "Personal Portfolio Website",
        summary: "A responsive website to showcase my projects and skills.",
        details: `I designed and developed a personal portfolio website using Next.js and Tailwind CSS. The site is fully responsive and highlights my projects, skills, and contact information.`,
        image: "/images/portfolio.png",
        points: [
            "Implemented responsive design with Tailwind CSS.",
            "Optimized for SEO and performance.",
            "Integrated a contact form with email notifications.",
        ],
    },
];

export default projectsData;
