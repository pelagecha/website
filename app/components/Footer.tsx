// app/components/Footer.tsx

import React from "react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-6">
            <div className="container mx-auto text-center">
                <SocialLinks />
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                    &copy; {new Date().getFullYear()} Nikita Pelagecha. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
