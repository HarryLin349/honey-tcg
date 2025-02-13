import React from "react";
import TradingCardView from "../components/TradingCard";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Honey TCG</h1>
            <p className="text-gray-600">placeholder</p>
            <div>
                <TradingCardView
                    tradingCard={masterCards[0]}
                    holo={masterCards[0].holo}
                />
            </div>
        </div>
    );
}

export default Home;
