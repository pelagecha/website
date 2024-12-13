"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * This page showcases a professional yet creative "About Me" section with an elaborate,
 * ever-moving "vortex" of shapes at the center—like a radiant black hole of creativity.
 *
 * Features:
 * - Dynamic vortex of rotating, orbiting shapes (circles, squares, polygons) around a "black hole".
 * - Dark, pixel-art-inspired theme with neon highlights.
 * - Interactive elements that react to hover, mouse movements, and clicks.
 * - Responsive layout that adjusts to window size.
 * - Professional text that hints at technical prowess and innovative mindset.
 * - Additional playful/creative UI flourishes (e.g. clickable shapes that change color, draggable elements).
 */

// Number of orbiting shapes
const SHAPE_COUNT = 12;
const SHAPE_TYPES = ["circle", "square", "diamond", "triangle"];
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

const AboutPage: React.FC = () => {
    const [hovered, setHovered] = useState(false);
    const [mouseX, setMouseX] = useState<number | null>(null);
    const [mouseY, setMouseY] = useState<number | null>(null);
    const [shapeData, setShapeData] = useState(
        Array.from({ length: SHAPE_COUNT }).map(() => ({
            type: SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)],
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            size: random(20, 50),
            orbitRadius: random(100, 250),
            orbitSpeed: random(4, 10), // seconds per rotation
            offsetAngle: random(0, 360),
        }))
    );

    // Handle mouse move for interactive elements
    const handleMouseMove = (e: React.MouseEvent) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };

    // Handle color change on click of shapes
    const changeShapeColor = (index: number) => {
        setShapeData((prev) =>
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

    // Animated heading: split text into letters and animate them
    const headingText = "About Me";
    const letters = headingText.split("");

    // Text content
    const subtitle =
        "Hi! I'm Nikita Pelagecha. I build software and train deep neural networks.";

    // Create a variant for shape orbits
    // We'll rotate each shape around the center. Using CSS transforms:
    // shape is absolutely positioned at the center, but translate outwards to orbitRadius,
    // and rotate around a central point.
    const shapeVariants = (
        orbitRadius: number,
        offsetAngle: number,
        orbitSpeed: number
    ) => ({
        animate: {
            rotate: [offsetAngle, offsetAngle + 360],
            transition: {
                repeat: Infinity,
                duration: orbitSpeed,
                ease: "linear",
            },
        },
    });

    const shapeStyle = (type: string, size: number, color: string) => {
        let borderRadius = "0%";
        if (type === "circle") borderRadius = "50%";
        if (type === "square") borderRadius = "0%";
        if (type === "diamond") borderRadius = "0%"; // We'll rotate the square to form a diamond
        if (type === "triangle") borderRadius = "0%"; // We'll create a triangle using a pseudo-element

        const baseStyle: React.CSSProperties = {
            width: type === "triangle" ? 0 : size,
            height: type === "triangle" ? 0 : size,
            background: type === "triangle" ? "transparent" : color,
            borderRadius,
            position: "absolute",
            top: "50%",
            left: "50%",
            transformOrigin: `0 ${-1 * (size / 2)}px`,
        };

        if (type === "diamond") {
            baseStyle.transform = "rotate(45deg)";
            baseStyle.transformOrigin = "center";
        }

        if (type === "triangle") {
            // For a triangle, we'll use borders
            baseStyle.width = 0;
            baseStyle.height = 0;
            baseStyle.borderLeft = `${size}px solid transparent`;
            baseStyle.borderRight = `${size}px solid transparent`;
            baseStyle.borderBottom = `${size * 1.5}px solid ${color}`;
        }

        return baseStyle;
    };

    return (
        <div
            className="relative min-h-screen overflow-hidden text-white select-none bg-gray-900"
            style={{
                cursor: "crosshair",
                fontFamily: "'Press Start 2P', monospace",
            }}
            onMouseMove={handleMouseMove}
        >
            {/* Vortex Background - A central "black hole" */}
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    background:
                        "radial-gradient(circle at center, #1e293b, #0f172a 80%)",
                }}
            >
                {/* Central Vortex: a pulsating black hole */}
                <motion.div
                    className="relative rounded-full"
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
                    {/* Orbiting shapes */}
                    {shapeData.map((shape, index) => (
                        <motion.div
                            key={index}
                            variants={shapeVariants(
                                shape.orbitRadius,
                                shape.offsetAngle,
                                shape.orbitSpeed
                            )}
                            animate="animate"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: `translate(-50%, -50%) rotate(${shape.offsetAngle}deg)`,
                            }}
                        >
                            <motion.div
                                onClick={() => changeShapeColor(index)}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 10,
                                    boxShadow: "0 0 10px #fff",
                                }}
                                style={{
                                    ...shapeStyle(
                                        shape.type,
                                        shape.size,
                                        shape.color
                                    ),
                                    transform: `translate(${shape.orbitRadius}px, -50%)`,
                                    cursor: "pointer",
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <main className="container mx-auto px-4 py-24 relative z-10 flex flex-col items-center">
                {/* Animated heading with per-letter animations */}
                <div className="inline-flex mb-6">
                    {letters.map((char, index) => (
                        <motion.span
                            key={index}
                            className="text-5xl font-extrabold px-1"
                            initial={{ y: -50, opacity: 0, rotate: -10 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            whileHover={{ scale: 1.2, color: "#F472B6" }}
                            style={{ textShadow: "0 0 10px #F472B6" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Short professional, yet creative description */}
                <motion.p
                    className="text-center text-md bg-black/80 p-4 rounded-md shadow-xl max-w-md leading-relaxed border border-gray-700"
                    initial={{ scale: 0.8, opacity: 0, rotate: 2 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, rotate: -2, color: "#3B82F6" }}
                >
                    {subtitle}
                </motion.p>

                {/* Links */}
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
                        href="https://github.com/nikitapelagecha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition duration-300 inline-block"
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        GitHub
                    </motion.a>
                </div>
            </main>

            {/* Additional interactive element: draggable neon orb */}
            <motion.div
                className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-pink-500 rounded-full shadow-xl"
                style={{ width: 50, height: 50, cursor: "grab" }}
                drag
                dragConstraints={{
                    left: -200,
                    right: 200,
                    top: -200,
                    bottom: 200,
                }}
                whileHover={{ scale: 1.2, boxShadow: "0 0 20px #fff" }}
                whileTap={{ scale: 0.9, cursor: "grabbing" }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 2 }}
            />

            {/* Responsive note: The vortex and layout adapt to window size by using relative and absolute positioning and tailwind utilities. */}
        </div>
    );
};

export default AboutPage;
