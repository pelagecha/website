// app/components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="text-xl font-bold">Nikita Pelagecha</div>
                <div className="space-x-4">
                    <Link href="#about">About Me</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#blogs">Blogs</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
