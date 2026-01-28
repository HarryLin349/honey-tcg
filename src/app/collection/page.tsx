"use client";
import React, { useState } from 'react';

import { useEffect } from 'react';
import TabBar from "../../components/TabBar";
import TradingCardView from "../../components/TradingCardView";
import { getUserCollection, sellCard, getUserData } from "../../firebase/db";
import { auth } from "../../firebase/config";
import { TradingCard, Rarity } from "../../types/trading-card";
import SortDropdown from "../../components/SortDropdown";
import SellCardModal from "../../components/SellCardModal";
import SpecialEffectModal from "../../components/SpecialEffectModal";

export default function Collection() {
    const [cards, setCards] = useState<TradingCard[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('id');
    const [selectedCard, setSelectedCard] = useState<TradingCard | null>(null);
    const [flowerPoints, setFlowerPoints] = useState<number>(0);
    const [specialEffect, setSpecialEffect] = useState<{
        type: 'honeypot' | 'wheelOfFortune' | 'gambling';
        success: boolean;
        holoCardName?: string;
        bonusPoints?: number;
    } | null>(null);

    useEffect(() => {
        const loadCollection = async () => {
            const user = auth.currentUser;
            if (user) {
                const userCards = await getUserCollection(user.uid);
                const userData = await getUserData(user.uid);
                setCards(userCards);
                setFlowerPoints(userData?.flowerPoints || 0);
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

    const handleSellCard = async () => {
        if (!selectedCard || !auth.currentUser) return;
        
        try {
            const result = await sellCard(auth.currentUser.uid, selectedCard);
            setFlowerPoints(result.updatedPoints);
            
            // Show special effect if any
            if (result.specialEffect) {
                setSpecialEffect(result.specialEffect);
            }
            
            const updatedCollection = await getUserCollection(auth.currentUser.uid);
            setCards(updatedCollection);
            setSelectedCard(null);
        } catch (error) {
            console.error('Error selling card:', error);
            alert('Failed to sell card');
        }
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
                <div className="mb-4 text-lg text-slate-700 text-center">
                    Flower Points: <span className="font-bold text-amber-600">{flowerPoints} 🌻</span>
                </div>
                <div className="flex justify-center mb-6">
                    <SortDropdown value={sortBy} onChange={setSortBy} />
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-32 justify-items-center">
                        {getSortedCards().map((card, idx) => (
                            <div 
                                key={idx} 
                                className="w-fit cursor-pointer" 
                                onClick={() => setSelectedCard(card)}
                            >
                                <TradingCardView tradingCard={card} holo={card.holo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {selectedCard && (
                <SellCardModal
                    card={selectedCard}
                    onConfirm={handleSellCard}
                    onCancel={() => setSelectedCard(null)}
                />
            )}
            
            {specialEffect && (
                <SpecialEffectModal
                    effect={specialEffect}
                    onClose={() => setSpecialEffect(null)}
                />
            )}
        </div>
    );
}
