// app/components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    My Portfolio
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                    <Link href="/projects" className="hover:text-blue-500">
                        Projects
                    </Link>
                    <Link href="/about" className="hover:text-blue-500">
                        About Me
                    </Link>
                    {/* Remove Blogs link if not needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
