import React from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";

const AboutPage: React.FC = () => {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <Navbar />
                <main className="container mx-auto px-4 py-24">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                        About Me
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        Hello! I'm Nikita Pelagecha, a passionate software
                        engineer with a strong background in computer science
                        and a love for problem-solving. I graduated from the
                        University of Warwick with a degree in Computer Science,
                        which laid the foundation for my career in technology.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        With over 5 years of experience in Python development,
                        I've had the opportunity to work on a wide range of
                        projects, from web applications to data analysis tools.
                        I'm particularly interested in machine learning and
                        artificial intelligence, and I'm always eager to learn
                        and apply new technologies.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        Outside of work, I enjoy participating in coding
                        competitions, with notable experience as a NWERC
                        (Northwestern Europe Regional Contest) contestant. These
                        competitions have sharpened my problem-solving skills
                        and ability to work under pressure.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        I'm constantly seeking new challenges and opportunities
                        to grow as a developer. If you're interested in
                        collaborating or just want to chat about technology,
                        feel free to reach out!
                    </p>
                </main>
            </div>
        </ThemeProvider>
    );
};

export default AboutPage;
