// app/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white shadow mt-8">
            <div className="container mx-auto p-4 text-center">
                © {new Date().getFullYear()} Nikita Pelagecha. All rights
                reserved.
            </div>
        </footer>
    );
};

export default Footer;
