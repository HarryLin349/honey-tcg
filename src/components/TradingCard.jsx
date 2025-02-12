"use client";

import React from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useMotionTemplate,
} from "framer-motion";

const TradingCard = ({ title, image, description, holo = true }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Add spring physics
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
        stiffness: 500,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
        stiffness: 500,
        damping: 30,
    });

    // Create a motion value for the gradient rotation
    const gradientRotation = useTransform(rotateX, [-15, 15], [-30, 30]);

    // Create the gradient template
    const gradient = useMotionTemplate`linear-gradient(
        ${gradientRotation}deg,
        rgba(255, 0, 150, 0.5) 10%,
        rgba(0, 255, 255, 0.7) 30%,
        rgba(255, 255, 0, 0.6) 50%,
        rgba(0, 150, 255, 0.7) 70%,
        rgba(255, 0, 150, 0.5) 90%
    )`;

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <div
            className="perspective-container"
            style={{ perspective: "1500px" }}
        >
            <motion.div
                className="relative w-64 h-96 bg-slate-500 shadow-lg rounded-2xl p-4 flex flex-col items-center text-center border border-gray-300 overflow-hidden"
                style={{
                    transformStyle: "preserve-3d",
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave}
            >
                {holo && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: gradient,
                            mixBlendMode: "multiply",
                            opacity: 0.6,
                            filter: "blur(4px)",
                        }}
                    />
                )}

                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-xl"
                />
                <h2 className="text-xl font-bold mt-4">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
            </motion.div>
        </div>
    );
};

export default TradingCard;
