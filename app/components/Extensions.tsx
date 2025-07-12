import React from "react";

interface LinkCardProps {
    href: string;
    title: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ href, title }) => {
    return (
        <a
            href={href}
            className="group block overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {href}
                </p>
            </div>
        </a>
    );
};

export default LinkCard;
