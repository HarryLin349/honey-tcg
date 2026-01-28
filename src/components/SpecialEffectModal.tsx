import React from 'react';

interface SpecialEffectModalProps {
    effect: {
        type: 'honeypot' | 'wheelOfFortune' | 'gambling';
        success: boolean;
        holoCardName?: string;
        bonusPoints?: number;
    };
    onClose: () => void;
}

const SpecialEffectModal: React.FC<SpecialEffectModalProps> = ({ effect, onClose }) => {
    const getMessage = () => {
        if (effect.type === 'honeypot') {
            return "🍯 Honey Pot gave you 10 extra flower points! 🌻";
        }
        if (effect.type === 'wheelOfFortune') {
            return effect.success
                ? `✨ The Wheel of Fortune made your ${effect.holoCardName} holo! ✨`
                : "❌ Nope!";
        }
        if (effect.type === 'gambling') {
            return `🎰 Let's go gambling! You won ${effect.bonusPoints ?? 0} extra flower points! 🌻`;
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
                <h2 className="text-xl font-bold mb-4">Special Effect!</h2>
                <p className="mb-6">{getMessage()}</p>
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default SpecialEffectModal; 
