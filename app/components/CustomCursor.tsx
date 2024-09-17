"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useSpring(0, { stiffness: 1000, damping: 50 });
    const cursorY = useSpring(0, { stiffness: 1000, damping: 50 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const mouseDown = () => setIsClicking(true);
        const mouseUp = () => setIsClicking(false);
        const mouseEnter = () => setIsHovering(true);
        const mouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mousedown", mouseDown);
        window.addEventListener("mouseup", mouseUp);
        document.body.addEventListener("mouseenter", mouseEnter);
        document.body.addEventListener("mouseleave", mouseLeave);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mousedown", mouseDown);
            window.removeEventListener("mouseup", mouseUp);
            document.body.removeEventListener("mouseenter", mouseEnter);
            document.body.removeEventListener("mouseleave", mouseLeave);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full bg-emerald-500 pointer-events-none z-50 mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
            }}
            transition={{
                scale: {
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                },
            }}
        />
    );
};

export default CustomCursor;
