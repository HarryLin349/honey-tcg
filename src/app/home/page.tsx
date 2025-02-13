"use client";
import React from 'react';
import TradingCardView from "../../components/TradingCardView";
import TabBar from "../../components/TabBar";
import { masterCards } from "../../data/master-cards";
import { getRandomCards, addCardsToCollection } from "../../firebase/db";
import { auth } from "../../firebase/config";
import { useState } from "react";

export default function Home() {
    const [isDrawing, setIsDrawing] = useState(false);

    const handleDrawCards = async () => {
        const user = auth.currentUser;
        if (!user) return;

        setIsDrawing(true);
        try {
            const drawnCards = getRandomCards(3);
            const userCards = drawnCards.map(card => ({
                cardId: card.id,
                holo: Math.random() < 0.1 // 10% chance of holo
            }));

            await addCardsToCollection(user.uid, userCards);
            alert('Added 3 new cards to your collection!');
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
                {/* <div>
                    <TradingCardView tradingCard={masterCards[0]} holo={false} />
                </div> */}
            </div>
        </div>
    );
} 