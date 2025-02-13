"use client";
import React from 'react';
import { TradingCard, Move, CardType, Rarity, getCardTypeEmoji } from "../types/trading-card";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useMotionTemplate,
} from "framer-motion";

function renderMove(move: Move) {
    let moveEnergies = ""
    move.energy.forEach((energy) => {
        moveEnergies += getCardTypeEmoji(energy);
    });
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
                <p className="text-md font-bold">{move.name} {moveEnergies}</p>
                <p className="text-md font-bold">{move.damage}</p>
            </div>
            <p className="text-xs text-left">{move.description}</p>
        </div>
    );
}

function renderMoves(moves: Move[], textColor: string = "text-slate-700") {
    return (
        <div className={`flex flex-col w-full gap-1 mt-4 ${textColor}`}>
            {moves.map(renderMove)}
        </div>
    );
}

function getRarityStyle(rarity: Rarity): string {
    switch (rarity) {
        case Rarity.Common:
            return "bg-gray-200 text-gray-700 border-gray-300";
        case Rarity.Uncommon:
            return "bg-green-200 text-green-700 border-green-300";
        case Rarity.Rare:
            return "bg-red-200 text-red-700 border-red-300";
        case Rarity.Legendary:
            return "bg-purple-200 text-purple-700 border-purple-300";
        default:
            return "bg-gray-200 text-gray-700 border-gray-300";
    }
}

interface TradingCardViewProps {
    tradingCard: TradingCard;
    holo: boolean;
    disabled?: boolean;  // New prop
}

const TradingCardView: React.FC<TradingCardViewProps> = ({ tradingCard, holo, disabled = false }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Add spring physics
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
        stiffness: 700,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
        stiffness: 700,
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

    function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
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

    function getCardTextColor( pType: CardType): string {
        switch (pType) {
            case CardType.Ghost:
                return "text-white";
            case CardType.Dragon:
                return "text-white";
            case CardType.Dark:
                return "text-white";
            case CardType.Psychic:
                return "text-slate-900";
            case CardType.Moon:
                return "text-slate-900";
            case CardType.Fighting:
                return "text-slate-900";
            default:
                return "text-slate-700";
        }
                
    }

    function getCardBackgroundColor({ primaryType }: { primaryType: CardType }): string {
        switch (primaryType) {
            case CardType.Fire:
                return "bg-gradient-to-br from-red-500 to-orange-700";
            case CardType.Water:
                return "bg-gradient-to-br from-blue-500 to-cyan-700";
            case CardType.Grass:
                return "bg-gradient-to-br from-green-500 to-emerald-700";
            case CardType.Electric:
                return "bg-gradient-to-br from-yellow-300 to-amber-700";
            case CardType.Ice:
                return "bg-gradient-to-br from-cyan-300 to-blue-500";
            case CardType.Fighting:
                return "bg-gradient-to-br from-red-700 to-rose-600";
            case CardType.Poison:
                return "bg-gradient-to-br from-purple-500 to-fuchsia-600";
            case CardType.Ground:
                return "bg-gradient-to-br from-yellow-600 to-amber-700";
            case CardType.Flying:
                return "bg-gradient-to-br from-sky-300 to-indigo-500";
            case CardType.Psychic:
                return "bg-gradient-to-br from-pink-500 to-purple-700";
            case CardType.Bug:
                return "bg-gradient-to-br from-lime-500 to-green-700";
            case CardType.Rock:
                return "bg-gradient-to-br from-stone-500 to-stone-600";
            case CardType.Ghost:
                return "bg-gradient-to-br from-purple-700 to-indigo-600";
            case CardType.Dragon:
                return "bg-gradient-to-br from-indigo-700 to-purple-600";
            case CardType.Dark:
                return "bg-gradient-to-br from-gray-700 to-slate-900";
            case CardType.Steel:
                return "bg-gradient-to-br from-gray-300 to-slate-500";
            case CardType.Fairy:
                return "bg-gradient-to-br from-pink-300 to-rose-500";
            case CardType.Love:
                return "bg-gradient-to-br from-pink-500 to-red-500";
            case CardType.Sun:
                return "bg-gradient-to-br from-yellow-500 to-orange-500";
            case CardType.Moon:
                return "bg-gradient-to-br from-indigo-500 to-purple-700";
            case CardType.Star:
                return "bg-gradient-to-br from-yellow-200 to-amber-300";
            case CardType.Normal:
                return "bg-gradient-to-br from-slate-300 to-gray-500";
            default:
                return "bg-gradient-to-br from-slate-300 to-gray-500";
        }
    }

    let primaryType = tradingCard.types[0];
    let cardTextColor = getCardTextColor(primaryType);
    let backgroundColor = getCardBackgroundColor({ primaryType });

    return (
        <div
            className="perspective-container"
            style={{ perspective: "1700px" }}
        >
            <motion.div
                className={`relative w-64 h-96 ${backgroundColor} shadow-lg rounded-2xl px-4 pb-4 pt-3 flex flex-col items-center text-center border border-gray-300 overflow-hidden
                    ${disabled ? 'opacity-50 grayscale' : ''}`}
                style={{
                    transformStyle: "preserve-3d",
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave}
            >
                {/* Background holo effect */}
                {tradingCard.holo && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: gradient,
                            mixBlendMode: "color-dodge",
                            opacity: 0.6,
                            filter: "blur(4px)",
                            zIndex: 0  // Place behind content
                        }}
                    />
                )}
                
                {/* Content container with higher z-index */}
                <div className="relative flex flex-col items-center w-full h-full z-10">
                    {/* Header */}
                    <div className="flex flex-row items-center justify-between w-full gap-2">
                        <h2 className={`font-bold whitespace-nowrap overflow-hidden text-ellipsis ${cardTextColor} max-w-full ${
                            tradingCard.title.length > 15 ? 'text-xs' : 'text-lg'
                        }`}>
                            {tradingCard.title}
                        </h2>
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex gap-1">
                                {tradingCard.types.map((type: CardType) => (
                                    <p key={type}>{getCardTypeEmoji(type)}</p>
                                ))}
                            </div>
                            <p className={`text-lg ${cardTextColor} font-bold text-left`}>{tradingCard.hp}</p>
                        </div>
                    </div>

                    {/* Image with its own holo effect container */}
                    <div className="relative w-full mt-1">
                        {tradingCard.holo && (
                            <motion.div
                                className="absolute inset-0 pointer-events-none rounded-xl"
                                style={{
                                    background: gradient,
                                    mixBlendMode: "color-dodge",
                                    opacity: 0.6,
                                    filter: "blur(4px)",
                                    zIndex: 1
                                }}
                            />
                        )}
                        <img
                            src={tradingCard.img}
                            alt={tradingCard.title}
                            className="relative w-full h-40 object-cover rounded-xl z-0"
                        />
                    </div>

                    {/* Moves and rarity */}
                    {renderMoves(tradingCard.moves, cardTextColor)}
                    <p className={`text-xs px-2 py-1 rounded-md border ${getRarityStyle(tradingCard.rarity)} mt-auto`}>
                        {tradingCard.rarity}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default TradingCardView;
