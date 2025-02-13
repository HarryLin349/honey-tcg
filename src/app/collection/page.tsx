"use client";
import React, { useState } from 'react';

import { useEffect } from 'react';
import TabBar from "../../components/TabBar";
import TradingCardView from "../../components/TradingCardView";
import { getUserCollection } from "../../firebase/db";
import { auth } from "../../firebase/config";
import { TradingCard, Rarity } from "../../types/trading-card";
import SortDropdown from "../../components/SortDropdown";

export default function Collection() {
    const [cards, setCards] = useState<TradingCard[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('id');

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

    const getSortedCards = () => {
        return [...cards].sort((a, b) => {
            switch (sortBy) {
                case 'id':
                    return a.id.localeCompare(b.id);
                case 'type':
                    const typeCompare = a.types[0].localeCompare(b.types[0]);
                    return typeCompare !== 0 ? typeCompare : a.id.localeCompare(b.id);
                case 'rarity':
                    const rarityOrder = {
                        [Rarity.Legendary]: 4,
                        [Rarity.Rare]: 3,
                        [Rarity.Uncommon]: 2,
                        [Rarity.Common]: 1
                    };
                    const rarityCompare = rarityOrder[a.rarity] - rarityOrder[b.rarity];
                    return rarityCompare !== 0 ? rarityCompare : a.id.localeCompare(b.id);
                default:
                    return 0;
            }
        });
    };

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
                    <>
                        <div className="flex justify-center mb-6">
                            <SortDropdown value={sortBy} onChange={setSortBy} />
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-32 justify-items-center">
                                {getSortedCards().map((card,idx) => (
                                    <div key={idx} className="w-fit">
                                        <TradingCardView tradingCard={card} holo={card.holo} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}