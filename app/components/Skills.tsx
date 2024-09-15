// app/components/Skills.tsx

import React from "react";
import { skillsData } from "../data/skillsData";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
    return (
        <section id="skills" className="my-16 p-4 container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillsData.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
