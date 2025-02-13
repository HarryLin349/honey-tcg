import React, { useState } from 'react';
import { TradingCard } from '../types/trading-card';
import TradingCardView from './TradingCardView';
import { motion } from 'framer-motion';

interface RevealCardProps {
    card: TradingCard;
    holo: boolean;
}

const RevealCard: React.FC<RevealCardProps> = ({ card, holo }) => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <motion.div
            className="cursor-pointer"
            onClick={() => !isRevealed && setIsRevealed(true)}
            animate={{ rotateY: isRevealed ? 0 : 180 }}
            transition={{ duration: 0.6 }}
            style={{ perspective: 1000 }}
        >
            {isRevealed ? (
                <TradingCardView tradingCard={card} holo={holo} />
            ) : (
                <div className="w-64 h-96 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center text-6xl text-white shadow-lg">
                    🍯
                </div>
            )}
        </motion.div>
    );
};

export default RevealCard;