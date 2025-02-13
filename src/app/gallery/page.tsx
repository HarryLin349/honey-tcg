"use client";
import { useState, useEffect } from 'react';
import TabBar from "../../components/TabBar";
import TradingCardView from "../../components/TradingCardView";
import SortDropdown from "../../components/SortDropdown";
import { Rarity, TradingCard } from "../../types/trading-card";
import { masterCards } from "../../data/master-cards";
import { getUserCollection } from "../../firebase/db";
import { auth } from "../../firebase/config";

export default function Gallery() {
    const [sortBy, setSortBy] = useState('id');
    const [ownedCards, setOwnedCards] = useState<Set<string>>(new Set());

    useEffect(() => {
        const loadOwnedCards = async () => {
            const user = auth.currentUser;
            if (user) {
                const collection = await getUserCollection(user.uid);
                // Create a Set of owned card IDs, including holo status
                const owned = new Set(collection.map(card => `${card.id}`));
                setOwnedCards(owned);
            }
        };

        loadOwnedCards();
    }, []);

    const isCardOwned = (card: TradingCard) => {
        return ownedCards.has(`${card.id}`);
    };

    const getSortedCards = () => {
        return [...masterCards].sort((a, b) => {
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

    return (
        <div className="min-h-screen bg-gray-100">
            <TabBar />
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Card Gallery</h1>
                <div className="flex justify-center mb-6">
                    <SortDropdown value={sortBy} onChange={setSortBy} />
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-32 justify-items-center">
                        {getSortedCards().map((card, idx) => (
                            <div key={idx} className="w-fit">
                                <TradingCardView 
                                    tradingCard={card} 
                                    holo={card.holo}
                                    disabled={!isCardOwned(card)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}