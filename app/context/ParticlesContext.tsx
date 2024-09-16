"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ParticlesContextType {
    particlesEnabled: boolean;
    toggleParticles: () => void;
}

const ParticlesContext = createContext<ParticlesContextType | undefined>(
    undefined
);

export const ParticlesProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [particlesEnabled, setParticlesEnabled] = useState(false); // Set to false by default
    const toggleParticles = () => {
        setParticlesEnabled((prev) => {
            console.log("Toggling particles:", !prev); // Add this line
            return !prev;
        });
    };

    return (
        <ParticlesContext.Provider
            value={{ particlesEnabled, toggleParticles }}
        >
            {children}
        </ParticlesContext.Provider>
    );
};

export const useParticles = () => {
    const context = useContext(ParticlesContext);
    if (context === undefined) {
        throw new Error("useParticles must be used within a ParticlesProvider");
    }
    return context;
};
