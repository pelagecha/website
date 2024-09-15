"use client";

import React, { useState } from "react";
import { Skill } from "../data/skillsData";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={handleToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleToggle();
                }
            }}
            aria-expanded={isExpanded}
            aria-label={`${skill.name} skill card, ${
                isExpanded ? "expanded" : "collapsed"
            }`}
        >
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
                <FaChevronDown
                    className={`mt-2 text-gray-500 transition-transform duration-300 ${
                        isExpanded ? "transform rotate-180" : ""
                    }`}
                />
                <div
                    className={`mt-4 text-center overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-96" : "max-h-0"
                    }`}
                >
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                        {skill.description}
                    </p>
                    <p className="text-gray-500 text-sm">
                        Experience: {skill.experience}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
