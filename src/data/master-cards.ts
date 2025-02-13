import { TradingCard, CardType, CardTypeEmoji, Rarity, Move } from '../types/trading-card';

export const masterCards: TradingCard[] = [
    {
        id: "card1",
        hp: 40,
        title: "Gay Lea Shortbread Village",
        types: [CardType.Normal, CardType.Ice],
        img: "https://i.imgur.com/rARoa1U.jpeg",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Hold Hands",
                description: "Double this damage if you have an ice or normal card in your bench",
                damage: "10",
                energy: [CardType.Normal]
            },
            {
                name: "Redraw",
                description: "Change the type of this card",
                damage: "",
                energy: [CardType.Star]
            }
        ],
        holo: false
    },
    {
        id: "card2",
        hp: 20,
        title: "Chemical Bond",
        types: [CardType.Poison],
        img: "https://i.imgur.com/X6YRs8n.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Chemical Bond",
                description: "Choose one opposing card. You both can't switch out until either is defeated.",
                damage: "15",
                energy: [CardType.Poison, CardType.Poison]
            }
        ],
        holo: false
    },
];

export default masterCards; 