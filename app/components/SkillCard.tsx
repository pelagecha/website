// app/components/SkillCard.tsx

"use client";

import React, { useState } from "react";
import { Skill } from "../data/skillsData";
import Image from "next/image";

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center">
                <Image
                    src={`https://picsum.photos/seed/${skill.name}/80/80`}
                    alt={skill.name}
                    width={80}
                    height={80}
                    className="mb-4 rounded-full"
                />
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-500 text-sm mb-2">
                    {skill.proficiency}
                </p>
                <button
                    className="text-blue-500 hover:underline"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? "Show Less" : "Learn More"}
                </button>
                {isExpanded && (
                    <div className="mt-4 text-center">
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                            {skill.description}
                        </p>
                        <p className="text-gray-500 text-sm">
                            Experience: {skill.experience}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillCard;
