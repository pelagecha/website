// app/components/Skills.tsx

"use client";

import React, { useState } from "react";
import { skillsData, Skill } from "../data/skillsData";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
    const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

    const handleExpand = (skillName: string) => {
        setExpandedSkill((prev) => (prev === skillName ? null : skillName));
    };

    return (
        <section id="skills" className="my-16 p-4 container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
            <div className="flex space-x-4 overflow-x-auto p-2 scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                {skillsData.map((skill: Skill) => (
                    <SkillCard
                        key={skill.name}
                        skill={skill}
                        isExpanded={expandedSkill === skill.name}
                        onClick={() => handleExpand(skill.name)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
