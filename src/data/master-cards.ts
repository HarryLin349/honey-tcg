import { TradingCard, CardType, CardTypeEmoji, Rarity, Move } from '../types/trading-card';

export const masterCards: TradingCard[] = [
    {
        id: "card1",
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
    {
        id: "card3",
        title: "Thunder Warrior",
        types: [CardType.Electric, CardType.Fighting],
        img: "/images/cards/thunder-warrior.jpg",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Lightning Punch",
                description: "A lightning-fast electric punch",
                damage: "40",
                energy: []
            },
            {
                name: "Static Field",
                description: "Creates a field of electricity",
                damage: "30",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card4",
        title: "Moonlight Guardian",
        types: [CardType.Moon, CardType.Psychic],
        img: "https://placehold.co/400x300?text=Moonlight+Guardian",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Lunar Shield",
                description: "Protects against the next attack",
                damage: "0",
                energy: []
            },
            {
                name: "Moonbeam",
                description: "Damage doubles during night phase",
                damage: "40",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card5",
        title: "Star Weaver",
        types: [CardType.Star, CardType.Fairy],
        img: "https://placehold.co/400x300?text=Star+Weaver",
        rarity: Rarity.Legendary,
        moves: [
            {
                name: "Constellation Pattern",
                description: "Create a pattern of stars that deals damage",
                damage: "60",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card6",
        title: "Sun Priestess",
        types: [CardType.Sun, CardType.Psychic],
        img: "https://placehold.co/400x300?text=Sun+Priestess",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Solar Flare",
                description: "Burns the opponent",
                damage: "50",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card7",
        title: "Love Enchantress",
        types: [CardType.Love, CardType.Fairy],
        img: "https://placehold.co/400x300?text=Love+Enchantress",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Heart Beam",
                description: "Charms the opponent",
                damage: "30",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card8",
        title: "Steel Golem",
        types: [CardType.Steel, CardType.Ground],
        img: "https://placehold.co/400x300?text=Steel+Golem",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Metal Crush",
                description: "Crushes with heavy metal weight",
                damage: "70",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card9",
        title: "Dark Phoenix",
        types: [CardType.Dark, CardType.Fire],
        img: "https://placehold.co/400x300?text=Dark+Phoenix",
        rarity: Rarity.Legendary,
        moves: [
            {
                name: "Shadow Flame",
                description: "Engulfs in dark fire",
                damage: "80",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card10",
        title: "Ice Queen",
        types: [CardType.Ice, CardType.Fairy],
        img: "https://placehold.co/400x300?text=Ice+Queen",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Frost Nova",
                description: "Freezes the battlefield",
                damage: "45",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card11",
        title: "Thunder Beast",
        types: [CardType.Electric, CardType.Normal],
        img: "https://placehold.co/400x300?text=Thunder+Beast",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Static Shock",
                description: "Basic electric attack",
                damage: "20",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card12",
        title: "Forest Spirit",
        types: [CardType.Grass, CardType.Fairy],
        img: "https://placehold.co/400x300?text=Forest+Spirit",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Nature's Blessing",
                description: "Heals and attacks",
                damage: "30",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card13",
        title: "Rock Giant",
        types: [CardType.Rock, CardType.Ground],
        img: "https://placehold.co/400x300?text=Rock+Giant",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Boulder Throw",
                description: "Throws a massive boulder",
                damage: "50",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card14",
        title: "Poison Dart Frog",
        types: [CardType.Poison, CardType.Water],
        img: "https://placehold.co/400x300?text=Poison+Dart+Frog",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Toxic Splash",
                description: "Poisons the opponent",
                damage: "25",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card15",
        title: "Ghost King",
        types: [CardType.Ghost, CardType.Dark],
        img: "https://placehold.co/400x300?text=Ghost+King",
        rarity: Rarity.Legendary,
        moves: [
            {
                name: "Spirit Realm",
                description: "Transports to ghost dimension",
                damage: "65",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card16",
        title: "Bug Commander",
        types: [CardType.Bug, CardType.Psychic],
        img: "https://placehold.co/400x300?text=Bug+Commander",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Swarm Strike",
                description: "Attacks with bug army",
                damage: "40",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card17",
        title: "Flying Ace",
        types: [CardType.Flying, CardType.Steel],
        img: "https://placehold.co/400x300?text=Flying+Ace",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Air Strike",
                description: "Aerial attack",
                damage: "35",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card18",
        title: "Water Serpent",
        types: [CardType.Water, CardType.Dragon],
        img: "https://placehold.co/400x300?text=Water+Serpent",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Tidal Wave",
                description: "Creates massive wave",
                damage: "55",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card19",
        title: "Fighting Spirit",
        types: [CardType.Fighting, CardType.Ghost],
        img: "https://placehold.co/400x300?text=Fighting+Spirit",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Spirit Combat",
                description: "Ethereal martial arts",
                damage: "45",
                energy: []
            }
        ],
        holo: false
    },
    {
        id: "card20",
        title: "Normal Guardian",
        types: [CardType.Normal, CardType.Steel],
        img: "https://placehold.co/400x300?text=Normal+Guardian",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Standard Protocol",
                description: "Basic defensive move",
                damage: "25",
                energy: []
            }
        ],
        holo: false
    }
];

export default masterCards; 