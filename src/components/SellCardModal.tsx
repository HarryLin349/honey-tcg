import React from 'react';
import { TradingCard } from '../types/trading-card';
import { getCardSellPrice } from '../firebase/db';

interface SellCardModalProps {
    card: TradingCard;
    onConfirm: () => void;
    onCancel: () => void;
}

const SellCardModal: React.FC<SellCardModalProps> = ({ card, onConfirm, onCancel }) => {
    const sellPrice = getCardSellPrice(card);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Sell Card</h2>
                <p className="mb-4">
                    Are you sure you want to sell {card.title}?
                    {card.holo && <span className="text-amber-500 ml-2">(Holo)</span>}
                </p>
                <p className="mb-6">
                    You will receive <span className="font-bold text-amber-600">{sellPrice} 🌻</span>
                </p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
                    >
                        Sell
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellCardModal; 