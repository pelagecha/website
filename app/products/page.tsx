import React from "react";
import LinkCard from "../components/Extension";
import { ThemeProvider } from "../context/ThemeContext";
import ParticlesBackground from "../components/ParticlesBackground";
import Link from "next/link";

const Products = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
            </div>
            <div className="container mx-auto my-16 p-4 z-10">
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">
                        Explore some of the extensions I wrote
                    </h1>
                    <LinkCard
                        href="https://marketplace.visualstudio.com/items?itemName=pelagecha.4u2c"
                        title="4u2c VSCode light theme"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center mt-8 space-y-4 relative z-10">
                <Link
                    href="/"
                    className="inline-block bg-transparent border border-gray-500 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:bg-opacity-25 transition ease-in-out duration-200"
                >
                    Back to Main Page
                </Link>
            </div>
        </div>
    );
};

export default Products;
