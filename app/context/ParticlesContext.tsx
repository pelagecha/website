"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

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
    const [particlesEnabled, setParticlesEnabled] = useState(false);

    useEffect(() => {
        const storedPreference = localStorage.getItem("particlesEnabled");
        setParticlesEnabled(storedPreference === "true");
    }, []);

    const toggleParticles = () => {
        setParticlesEnabled((prev) => {
            const newState = !prev;
            localStorage.setItem("particlesEnabled", newState.toString());
            return newState;
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
