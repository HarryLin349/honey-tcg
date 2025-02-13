"use client";
import React, { useState } from 'react';
import TradingCardView from "../../components/TradingCardView";
import TabBar from "../../components/TabBar";
import { getRandomCards, addCardsToCollection } from "../../firebase/db";
import { auth } from "../../firebase/config";
import { TradingCard } from "../../types/trading-card";
import RevealCard from "../../components/RevealCard";

export default function Home() {
    const [isDrawing, setIsDrawing] = useState(false);
    const [drawnCards, setDrawnCards] = useState<Array<{ card: TradingCard, holo: boolean }>>([]);

    const handleDrawCards = async () => {
        const user = auth.currentUser;
        if (!user) return;

        setIsDrawing(true);
        setDrawnCards([]); // Clear previous cards
        
        try {
            const newCards = getRandomCards(3);
            const userCards = newCards.map(card => ({
                cardId: card.id,
                holo: Math.random() < 0.1
            }));

            await addCardsToCollection(user.uid, userCards);
            
            // Set new cards after adding to collection
            setDrawnCards(newCards.map((card, idx) => ({
                card,
                holo: userCards[idx].holo
            })));
        } catch (error) {
            console.error('Error drawing cards:', error);
            alert('Failed to draw cards');
        } finally {
            setIsDrawing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <TabBar />
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Honey TCG</h1>
                <button
                    onClick={handleDrawCards}
                    disabled={isDrawing}
                    className="mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    {isDrawing ? 'Drawing...' : 'Draw 3 Cards'}
                </button>
                
                {drawnCards.length > 0 && (
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Click cards to reveal!</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            {drawnCards.map(({ card, holo }, idx) => (
                                <div key={idx} className="animate-fade-in">
                                    <RevealCard card={card} holo={holo} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 