// app/data/projectsData.ts

export interface Project {
    slug: string;
    name: string;
    summary: string;
    description: string;
    image: string; // Mandatory
    date: string; // Use ISO 8601 format
    technologies: string[];
}

export const projectsData: Project[] = [
    {
        slug: "ai-powered-chatbot",
        name: "AI-Powered Chatbot",
        summary: "An AI chatbot simulating human conversation.",
        description: `
### Overview
Developed an AI-powered chatbot using Natural Language Processing (NLP) techniques.

### Features
- Implemented NLP algorithms for intent recognition.
- Integrated with popular messaging platforms.
- Achieved 90% accuracy in understanding user queries.

### Technologies Used
- Python
- TensorFlow
- Node.js
    `,
        image: "/images/projects/test.jpg", // Ensure this image exists
        date: "2023-10-15",
        technologies: ["Python", "TensorFlow", "Node.js"],
    },
    {
        slug: "ml-stock-predictor",
        name: "Machine Learning Stock Predictor",
        summary: "Predicting stock prices using ML.",
        description: `
### Overview
Created a machine learning model to predict stock market trends.

### Features
- Collected and preprocessed large datasets of stock prices.
- Explored different ML models like LSTM and ARIMA.
- Increased prediction accuracy by 15% over baseline models.

### Technologies Used
- Python
- scikit-learn
- Pandas
    `,
        image: "/images/projects/test.jpg", // Ensure this image exists
        date: "2023-09-20",
        technologies: ["Python", "scikit-learn", "Pandas"],
    },
    // Add more projects...
];

// Ensure data integrity by validating image paths and other fields
