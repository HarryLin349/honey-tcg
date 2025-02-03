"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const TradingCard = ({ title, image, description }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();
        
        // Calculate center point
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        // Calculate rotation based on mouse position relative to center
        const rotateY = -((clientX - centerX) / (width / 2)) * 30;
        const rotateX = ((clientY - centerY) / (height / 2)) * 30;
        
        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            className="relative w-64 h-96 bg-slate-500 shadow-lg rounded-2xl p-4 flex flex-col items-center text-center border border-gray-300 overflow-hidden"
            style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px",
                position: "relative",
            }}
            animate={{ 
                rotateX, 
                rotateY,
            }}
            transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Holographic Effect Layer */}
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
                    mixBlendMode: "color-dodge",
                    opacity: 0.5,
                    transition: "background 0.1s ease",
                    filter: "blur(5px)",
                }}
            ></div>

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
    );
};

export default TradingCard;
