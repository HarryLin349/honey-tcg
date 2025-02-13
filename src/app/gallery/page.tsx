"use client";
import TabBar from "../../components/TabBar";
import TradingCardView from "../../components/TradingCardView";
import { Rarity } from "../../types/trading-card";
import { masterCards } from "../../data/master-cards";

export default function Gallery() {
    // sort masterCards by rarity (Legendary > Rare > Uncommon > Common)
    const sortedCards = [...masterCards].sort((a, b) => {
        const rarityOrder = {
            [Rarity.Legendary]: 4,
            [Rarity.Rare]: 3, 
            [Rarity.Uncommon]: 2,
            [Rarity.Common]: 1
        };
        return rarityOrder[a.rarity] - rarityOrder[b.rarity];
    });

    return (
        <div className="min-h-screen bg-gray-100">
            <TabBar />
            <div className="max-w-7xl mx-auto px-4 align-center bg-slate-100">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Card Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedCards.map((card) => (
                        <TradingCardView key={card.id} tradingCard={card} holo={card.holo} />
                    ))}
                </div>
            </div>
        </div>
    );
}