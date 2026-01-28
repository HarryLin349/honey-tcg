export type Move = {
    name: string;
    description: string;
    damage: string;
    energy: CardType[];
};

export enum CardType {
    Normal = 'Normal',
    Fire = 'Fire',
    Water = 'Water',
    Electric = 'Electric',
    Grass = 'Grass',
    Ice = 'Ice',
    Fighting = 'Fighting',
    Poison = 'Poison',
    Ground = 'Ground',
    Flying = 'Flying',
    Psychic = 'Psychic',
    Bug = 'Bug',
    Rock = 'Rock',
    Ghost = 'Ghost',
    Dragon = 'Dragon',
    Dark = 'Dark',
    Steel = 'Steel',
    Fairy = 'Fairy',
    Love = 'Love',
    Sun = 'Sun',
    Moon = 'Moon',
    Star = 'Star',
}

export const CardTypeEmoji: Record<CardType, string> = {
    [CardType.Normal]: '⚪',
    [CardType.Fire]: '🔥',
    [CardType.Water]: '💧',
    [CardType.Electric]: '⚡',
    [CardType.Grass]: '🌿',
    [CardType.Ice]: '❄️',
    [CardType.Fighting]: '🥊',
    [CardType.Poison]: '☠️',
    [CardType.Ground]: '⛰️',
    [CardType.Flying]: '🌪️',
    [CardType.Psychic]: '🔮',
    [CardType.Bug]: '🐛',
    [CardType.Rock]: '🪨',
    [CardType.Ghost]: '👻',
    [CardType.Dragon]: '🐉',
    [CardType.Dark]: '🌑',
    [CardType.Steel]: '🔩',
    [CardType.Fairy]: '🌸',
    [CardType.Love]: '💖',
    [CardType.Sun]: '☀️',
    [CardType.Moon]: '🌙',
    [CardType.Star]: '✨'
};

// Helper function to get emoji for a card type
export const getCardTypeEmoji = (type: CardType): string => {
    return CardTypeEmoji[type] || '';
};

export enum Rarity {
    Common = 'Common',
    Uncommon = 'Uncommon',
    Rare = '💫 Rare 💫',
    Legendary = '🌈 Legendary 🌈'
}

export interface TradingCard {
    id: string;
    hp: number;
    title: string;
    types: CardType[];
    img: string;
    rarity: Rarity;
    moves: Move[];
    holo: boolean;
}

export interface UserCard {
    cardId: string;
    holo: boolean;
}

export interface UserCollection {
    userId: string;
    cards: UserCard[];
}

export interface SellResult {
    updatedPoints: number;
    specialEffect?: {
        type: 'honeypot' | 'wheelOfFortune' | 'gambling';
        success: boolean;
        holoCardName?: string;
        bonusPoints?: number;
    };
}
