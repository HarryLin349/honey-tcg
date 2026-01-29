"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TabBar from "../../components/TabBar";
import { getRandomCardsForUser, addCardsToCollection, checkLoginBonus, updateFlowerPoints } from "../../firebase/db";
import { auth } from "../../firebase/config";
import { TradingCard, Rarity } from "../../types/trading-card";
import RevealCard from "../../components/RevealCard";

const DRAW_COST = 10;

export default function Home() {
    const [isDrawing, setIsDrawing] = useState(false);
    const [drawnCards, setDrawnCards] = useState<Array<{ card: TradingCard; holo: boolean }>>([]);
    const [flowerPoints, setFlowerPoints] = useState<number>(0);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            checkLoginBonus(user.uid).then(points => setFlowerPoints(points));
        }
    }, []);

    if (!auth.currentUser) {
        console.log("no auth, auth.currentUser", auth.currentUser)
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <Link href="/login" className="text-blue-500 hover:underline">
                    Please log in to continue
                </Link>
            </div>
        );
    }

    const handleDrawCards = async () => {
        const user = auth.currentUser;
        if (!user) return;
        if (flowerPoints < DRAW_COST) {
            alert('Not enough flower points! You need 10 flower points to draw cards.');
            return;
        }

        setIsDrawing(true);
        setDrawnCards([]);
        
        try {
            const updatedPoints = await updateFlowerPoints(user.uid, -DRAW_COST);
            setFlowerPoints(updatedPoints);

            const newCards = await getRandomCardsForUser(user.uid, 3);
            const userCards = newCards.map(card => ({
                cardId: card.id,
                holo: card.rarity === Rarity.Legendary ? true : Math.random() < 0.085
            }));

            await addCardsToCollection(user.uid, userCards);
            
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
                <div className="mb-4 text-lg text-slate-700">
                    Flower Points: <span className="font-bold text-amber-600">{flowerPoints} 🌻</span>
                </div>
                <div className="text-sm text-gray-600 mb-6 text-center">
                    Card Rates:<br />
                    <span className="text-gray-500">68% Common</span> • 
                    <span className="text-emerald-500"> 20% Uncommon</span> • 
                    <span className="text-blue-500"> 10% Rare</span> • 
                    <span className="text-amber-500"> 2% Legendary</span>
                    <div className="mt-2 text-xs text-gray-500">
                        Undiscovered boost (per rarity): 
                        <span className="text-gray-500"> 1% Common</span> • 
                        <span className="text-emerald-500"> 5% Uncommon</span> • 
                        <span className="text-blue-500"> 10% Rare</span> • 
                        <span className="text-amber-500"> 25% Legendary</span>
                    </div>
                </div>

                <button
                    onClick={handleDrawCards}
                    disabled={isDrawing || flowerPoints < DRAW_COST}
                    className="mb-8 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    {isDrawing ? 'Drawing...' : `Draw 3 Cards (${DRAW_COST} 🌻)`}
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
