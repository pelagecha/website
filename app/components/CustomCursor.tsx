"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor: React.FC = () => {
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    // Use motion values for better performance
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Adjusted spring configuration for less bounciness
    const springConfig = { damping: 40, stiffness: 700 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - 12);
            cursorY.set(e.clientY - 12);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Add CSS class to body when hovering over links
        const handleLinkMouseEnter = () => {
            setIsHoveringLink(true);
            document.body.classList.add("link-hovered");
        };
        const handleLinkMouseLeave = () => {
            setIsHoveringLink(false);
            document.body.classList.remove("link-hovered");
        };

        // Add event listeners
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            // Clean up event listeners
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    // Animate scale on click
    const scale = useSpring(isClicking ? 0.8 : 1, {
        stiffness: 150,
        damping: 10,
    });

    return (
        <>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50"
                    style={{
                        x,
                        y,
                        scale,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, #ff7e5f, #feb47b)",
                        boxShadow: "0 0 10px rgba(255, 126, 95, 0.5)",
                    }}
                />
            )}
        </>
    );
};

export default CustomCursor;
