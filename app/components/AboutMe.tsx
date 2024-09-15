// app/components/AboutMe.tsx
import React from "react";

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="container mx-auto my-16 p-4">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>
                Hi, I'm Nikita Pelagecha, a dedicated Computer Science student
                at the University of Warwick with a strong passion for
                Artificial Intelligence and Machine Learning. I've consistently
                achieved top grades in my coursework and have been involved in
                several AI research projects, where I applied machine learning
                algorithms to real-world problems. My enthusiasm for technology
                drives me to continually expand my skill set, and I'm proficient
                in languages like Python, Java, and C++. I'm eager to bring my
                problem-solving skills and innovative mindset to a dynamic team,
                where I can contribute and grow professionally.
            </p>
        </section>
    );
};

export default AboutMe;
