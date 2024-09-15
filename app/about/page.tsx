// app/about/page.tsx

import React from "react";

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto my-16 p-4">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-gray-700 dark:text-gray-300">
                {/* Your About Me content */}
                Welcome to my portfolio! I'm Nikita Pelagecha, a passionate
                developer...
            </p>
        </div>
    );
};

export default AboutPage;
