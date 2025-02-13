"use client";
import TradingCardView from "../../components/TradingCardView";
import TabBar from "../../components/TabBar";
import { masterCards } from "../../data/master-cards";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <TabBar />
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Honey TCG</h1>
                <div>
                    <TradingCardView tradingCard={masterCards[0]} holo={false} />
                </div>
            </div>
        </div>
    );
} 