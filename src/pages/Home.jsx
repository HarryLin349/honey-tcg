import React from "react";
import TradingCard from "../components/TradingCard";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Honey TCG</h1>
            <p className="text-gray-600">placeholder</p>
            <div>
            <TradingCard
                title="Honey"
                image="https://oyster.ignimgs.com/mediawiki/apis.ign.com/balatro/e/ef/Joker.png"
                description="Honey is a sweet and sticky substance produced by bees. It's known for its unique flavor and nutritional benefits."
            />
            </div>
        </div>
    );
}

export default Home;
