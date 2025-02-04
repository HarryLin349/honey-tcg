"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const TradingCard = ({ title, image, description, holo = true }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } =
            currentTarget.getBoundingClientRect();

        // Calculate center point
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const maxRotation = 20;
        // Calculate rotation based on mouse position relative to center
        const rotateY = Math.max(
            Math.min(
                ((clientX - centerX) / (width / 2)) * maxRotation,
                maxRotation
            ),
            -maxRotation
        );
        const rotateX = Math.max(
            Math.min(
                -((clientY - centerY) / (height / 2)) * maxRotation,
                maxRotation
            ),
            -maxRotation
        );

        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    // Calculate dynamic shadow based on rotation
    const shadowX = rotateY / 4;
    const shadowY = -rotateX / 4;
    const shadowBlur = Math.abs(rotateX) + Math.abs(rotateY);

    return (
        <div
            className="perspective-container"
            style={{ perspective: "1500px" }}
        >
            <motion.div
                className="relative w-64 h-96 bg-slate-500 shadow-lg rounded-2xl p-4 flex flex-col items-center text-center border border-gray-300 overflow-hidden"
                animate={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 1,
                }}
                style={{
                    transformStyle: "preserve-3d",
                    position: "relative",
                    boxShadow: `
                        ${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.3),
                        0 4px 6px -1px rgba(0, 0, 0, 0.1),
                        0 2px 4px -1px rgba(0, 0, 0, 0.06)
                    `,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Holographic Effect Layer */}
                {holo && (
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `linear-gradient(
                            ${rotateX * 2}deg, 
                            rgba(255, 0, 150, 0.4) 10%, 
                            rgba(0, 255, 255, 0.6) 30%, 
                            rgba(255, 255, 0, 0.5) 50%, 
                            rgba(0, 150, 255, 0.6) 70%, 
                            rgba(255, 0, 150, 0.4) 90%
                        )`,
                            mixBlendMode: "multiply",
                            opacity: 1,
                            transition: "background 0.1s ease",
                            filter: "blur(5px)",
                        }}
                    ></div>
                )}

                <div>
                    <p>{title}</p>
                    <p>rx: {rotateX.toFixed(2)}</p>
                    <p>ry: {rotateY.toFixed(2)}</p>
                </div>

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
