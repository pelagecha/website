"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
import { useParticles } from "../context/ParticlesContext";

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
    "#3B82F6",
    "#A855F7",
    "#F472B6",
    "#FBBF24",
    "#10B981",
    "#F43F5E",
    "#22D3EE",
    "#E879F9",
];
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Define a type for the icon data
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
    const [invert, setInvert] = useState(false);

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

    const headingText = "About Me";
    const letters = headingText.split("");
    const subtitle =
        "Hi! I'm Nikita Pelagecha. I build software and train deep neural networks.";

    return (
        <div
            className={`relative min-h-screen overflow-hidden text-white select-none bg-gray-900 ${
                invert ? "invert" : ""
            }`}
            style={{
                cursor: "crosshair",
                fontFamily: "'Press Start 2P', monospace",
            }}
        >
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    background:
                        "radial-gradient(circle at center, #1e293b, #0f172a 80%)",
                }}
            >
                {particlesEnabled && (
                    <motion.div
                        className="relative rounded-full mt-48"
                        style={{
                            width: 150,
                            height: 150,
                            background:
                                "radial-gradient(circle at center, #000000, #1e1e1e)",
                            boxShadow: "0 0 60px #0ff, 0 0 120px #3B82F6",
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
                                        cursor: "grab",
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
            </div>

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
                            whileHover={{ scale: 1.2, color: "#F472B6" }}
                            style={{ textShadow: "0 0 10px #F472B6" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                <motion.p
                    className="text-center text-md bg-black/80 p-4 rounded-md shadow-xl max-w-md leading-relaxed border border-gray-700"
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
                            className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
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
                        className="px-6 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition duration-300 inline-block"
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
