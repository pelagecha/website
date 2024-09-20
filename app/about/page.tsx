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
                        Hello! I'm Nikita Pelagecha, a computer science student
                        at the University of Warwick. I'm a passionate about
                        machine learning and artificial intelligence.
                    </p>
                </main>
            </div>
        </ThemeProvider>
    );
};

export default AboutPage;
