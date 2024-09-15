// app/components/SkillCard.tsx

"use client";

import React from "react";
import { Skill } from "../data/skillsData";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SkillCardProps {
    skill: Skill;
    isExpanded: boolean;
    onClick: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({
    skill,
    isExpanded,
    onClick,
}) => {
    return (
        <div
            className={`bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer w-60 flex-shrink-0`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onClick();
                }
            }}
            aria-expanded={isExpanded}
            aria-label={`${skill.name} skill card, ${
                isExpanded ? "expanded" : "collapsed"
            }`}
        >
            <div className="flex flex-col items-center">
                <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={60}
                    height={60}
                    className="mb-2 rounded-full"
                />
                <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
                <p className="text-gray-500 text-sm mb-2">
                    {skill.proficiency}
                </p>
                {isExpanded ? (
                    <FaChevronUp className="text-gray-500 transition-transform duration-300" />
                ) : (
                    <FaChevronDown className="text-gray-500 transition-transform duration-300" />
                )}
                <div
                    className={`mt-2 text-center overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-40" : "max-h-0"
                    }`}
                >
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                        {skill.description}
                    </p>
                    <p className="text-gray-500 text-xs">
                        Experience: {skill.experience}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
