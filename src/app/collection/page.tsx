import TradingCard from "../../components/TradingCardView";
import { masterCards } from "../../data/master-cards";

export default function Home() {
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
            <div className="grid grid-cols-4 gap-4">
                {masterCards.map((card) => (
                    <TradingCard
                        key={card.id}
                        title={card.title}
                        image={card.img}
                        description={card.moves[0].description}
                        holo={card.holo}
                    />
                ))}
            </div>
        </div>
        
    );
}