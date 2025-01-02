"use client";

import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useParticles } from "@/app/context/ParticlesContext";
import {
    FiAirplay,
    FiAnchor,
    FiActivity,
    FiAperture,
    FiBattery,
    FiCamera,
    FiCloud,
    FiCode,
    FiCpu,
    FiFeather,
    FiGift,
    FiHeart,
    FiHexagon,
    FiKey,
    FiLayers,
    FiMonitor,
    FiMoon,
    FiStar,
    FiSun,
    FiZap,
} from "react-icons/fi";

const ICONS = [
    FiAirplay,
    FiAnchor,
    FiActivity,
    FiAperture,
    FiBattery,
    FiCamera,
    FiCloud,
    FiCode,
    FiCpu,
    FiFeather,
    FiGift,
    FiHeart,
    FiHexagon,
    FiKey,
    FiLayers,
    FiMonitor,
    FiMoon,
    FiStar,
    FiSun,
    FiZap,
];

const ICON_COUNT = 30;

const COLORS = [
    "#60A5FA",
    "#A78BFA",
    "#F472B6",
    "#FBBF24",
    "#34D399",
    "#F43F5E",
    "#38BDF8",
    "#C084FC",
];

const random = (min: number, max: number) => Math.random() * (max - min) + min;

type IconData = {
    Icon: React.ComponentType;
    color: string;
    size: number;
    orbitRadius: number;
    orbitSpeed: number;
    offsetAngle: number;
};

const AboutPage: React.FC = () => {
    const [iconData, setIconData] = useState<IconData[]>([]);
    const { particlesEnabled } = useParticles();
    const { theme } = useContext(ThemeContext);
    const [invert, setInvert] = useState(false);

    useEffect(() => {
        const generateIconData = () => {
            return Array.from({ length: ICON_COUNT }).map(() => ({
                Icon: ICONS[Math.floor(Math.random() * ICONS.length)],
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                size: random(20, 50),
                orbitRadius: random(100, 250),
                orbitSpeed: random(4, 10),
                offsetAngle: random(0, 360),
            }));
        };
        setIconData(generateIconData());
    }, []);

    const shapeVariants = (offsetAngle: number, orbitSpeed: number) => ({
        animate: {
            rotate: [offsetAngle, offsetAngle + 360],
            transition: {
                repeat: Infinity,
                duration: orbitSpeed,
                ease: "linear",
            },
        },
    });

    const changeIconColor = (index: number) => {
        setIconData((prev) =>
            prev.map((s, i) =>
                i === index
                    ? {
                          ...s,
                          color: COLORS[
                              Math.floor(Math.random() * COLORS.length)
                          ],
                      }
                    : s
            )
        );
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "i") setInvert((prev) => !prev);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        setInvert(false);
    }, [theme]);

    const headingText = "About Me";
    const letters = headingText.split("");
    const subtitle =
        "Hi! I'm Nikita Pelagecha. I build software and train deep neural networks.";

    return (
        <div
            className={`relative min-h-screen overflow-hidden select-none ${
                theme === "dark" ? "text-white" : "text-black"
            } ${invert ? "invert" : ""}`}
            style={{
                cursor: "crosshair",
                fontFamily: "'Press Start 2P', monospace",
                background:
                    theme === "dark"
                        ? "radial-gradient(circle, #1E293B, #0F172A 80%)"
                        : "radial-gradient(circle, #EFF6FF, #DBEAFE 80%)",
            }}
        >
            {/* <div className="absolute inset-0 flex items-center justify-center">
                {particlesEnabled && (
                    <motion.div
                        className="relative rounded-full"
                        style={{
                            width: 150,
                            height: 150,
                            background:
                                theme === "dark"
                                    ? "radial-gradient(circle, #000000, #1e1e1e)"
                                    : "radial-gradient(circle, #ffffff, #e2e8f0)",
                            boxShadow: "0 0 60px #3B82F6, 0 0 120px #0ff",
                        }}
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {iconData.map((icon, index) => (
                            <motion.div
                                key={index}
                                variants={shapeVariants(
                                    icon.offsetAngle,
                                    icon.orbitSpeed
                                )}
                                animate="animate"
                                style={{
                                    position: "absolute",
                                    top: "20%",
                                    left: "50%",
                                    transform: `translate(-50%, -50%) rotate(${icon.offsetAngle}deg)`,
                                }}
                            >
                                <motion.div
                                    onClick={() => changeIconColor(index)}
                                    whileHover={{
                                        boxShadow: "0 0 10px #fff",
                                    }}
                                    style={{
                                        transform: `translate(${icon.orbitRadius}px, -50%)`,
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: icon.size,
                                        height: icon.size,
                                        color: icon.color,
                                        background: "transparent",
                                        borderRadius: "50%",
                                        fontSize: icon.size * 0.6,
                                    }}
                                >
                                    <icon.Icon />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div> */}

            <main className="container mx-auto px-4 py-24 relative z-10 flex flex-col items-center">
                <div className="inline-flex mb-6">
                    {letters.map((char, index) => (
                        <motion.span
                            key={index}
                            className="text-5xl font-extrabold px-1"
                            initial={{ y: -50, opacity: 0, rotate: -10 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.4,
                                ease: "easeOut",
                            }}
                            whileHover={{ scale: 1.2, color: "#A78BFA" }}
                            style={{ textShadow: "0 0 10px #A78BFA" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                <motion.p
                    className={`text-center text-lg p-4 rounded-md shadow-xl max-w-2xl leading-relaxed border ${
                        theme === "dark"
                            ? "bg-black/80 border-gray-700"
                            : "bg-white/80 border-gray-300"
                    }`}
                    initial={{ scale: 0.8, opacity: 0, rotate: 2 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, rotate: -2, color: "#3B82F6" }}
                >
                    {subtitle}
                </motion.p>

                <div className="flex space-x-4 mt-8">
                    <Link href="/" passHref>
                        <motion.button
                            className={`px-6 py-2 rounded-md shadow-md ${
                                theme === "dark"
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-blue-400 text-black hover:bg-blue-500"
                            }`}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Home
                        </motion.button>
                    </Link>
                    <motion.a
                        href="mailto:nikitapelagecha@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-2 rounded-md shadow-md ${
                            theme === "dark"
                                ? "bg-purple-600 text-white hover:bg-purple-700"
                                : "bg-purple-400 text-black hover:bg-purple-500"
                        }`}
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact
                    </motion.a>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
