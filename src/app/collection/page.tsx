"use client";
import React from 'react';

import { useEffect, useState } from 'react';
import TabBar from "../../components/TabBar";
import TradingCardView from "../../components/TradingCardView";
import { getUserCollection } from "../../firebase/db";
import { auth } from "../../firebase/config";
import { TradingCard } from "../../types/trading-card";

export default function Collection() {
    const [cards, setCards] = useState<TradingCard[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCollection = async () => {
            const user = auth.currentUser;
            if (user) {
                const userCards = await getUserCollection(user.uid);
                setCards(userCards);
            }
            setLoading(false);
        };

        loadCollection();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100">
                <TabBar />
                <div className="flex justify-center items-center h-64">
                    <p className="text-gray-500">Loading collection...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <TabBar />
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">My Collection</h1>
                {cards.length === 0 ? (
                    <p className="text-center text-gray-500">No cards in collection yet</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-32 justify-items-center">
                        {cards.map((card) => (
                            <div key={card.id} className="w-fit">
                                <TradingCardView tradingCard={card} holo={card.holo} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}