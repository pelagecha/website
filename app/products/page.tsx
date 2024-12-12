import React from "react";
import LinkCard from "../components/Extension";
import { ThemeProvider } from "../context/ThemeContext";
import ParticlesBackground from "../components/ParticlesBackground";

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
        </div>
    );
};

export default Products;
