import { TradingCard, CardType, CardTypeEmoji, Rarity, Move } from '../types/trading-card';

export const masterCards: TradingCard[] = [
    {
        id: "card1",
        hp: 40,
        title: "Gay Lea Shortbreads",
        types: [CardType.Ice],
        img: "https://i.imgur.com/rARoa1U.jpeg",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Hold Hands",
                description: "Double this damage if an ally matches this type",
                damage: "10",
                energy: [CardType.Normal]
            },
            {
                name: "Repaint",
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
                description: "Choose an opposing card. You both can't switch out until either is defeated.",
                damage: "10",
                energy: [CardType.Poison, CardType.Poison]
            }
        ],
        holo: false
    },
    {
        id: "card3",
        hp: 50,
        title: "Farcille",
        types: [CardType.Love, CardType.Star],
        img: "https://i.imgur.com/wp9Ep7c.png",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Psych Up",
                description: "Choose an ally. Their next move does 1.5x damage",
                damage: "",
                energy: [CardType.Star]
            },
            {
                name: "Nontoxic Yuri",
                description: "Flip a coin. If heads, heal an ally 10 HP. If tails, heal yourself 10 HP.",
                damage: "",
                energy: [CardType.Love]
            }
        ],
        holo: false
    },
    {
        id: "card4",
        hp: 50,
        title: "Motivational Kabru",
        types: [CardType.Steel, CardType.Star],
        img: "https://i.imgur.com/iOGvZSH.png",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Psych Up",
                description: "Choose an ally. Their next move does 15 more damage",
                damage: "",
                energy: [CardType.Star]
            },
            {
                name: "Kill Laois",
                description: "",
                damage: "20",
                energy: [CardType.Steel, CardType.Star]
            }
        ],
        holo: false
    },
    {
        id: "card5",
        hp: 30,
        title: "Festive Honeys",
        types: [CardType.Star],
        img: "https://i.imgur.com/OLI5sDi.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Present",
                description: "Flip a coin. If heads, heal 10 HP. If tails, deal 10 damage to an opposing card.",
                damage: "",
                energy: [CardType.Star]
            },
        ],
        holo: false
    },
    {
        id: "card6",
        hp: 70,
        title: "Olu & Grimmy",
        types: [CardType.Dark, CardType.Love],
        img: "https://i.imgur.com/8iPbl2V.png",
        rarity: Rarity.Legendary,
        moves: [
            {
                name: "Date",
                description: "Flip a coin. If heads, attach an energy to an ally.",
                damage: "10",
                energy: [CardType.Love]
            },
            {
                name: "Death",
                description: "Flip a coin. If tails, the opposing card is defeated.",
                damage: "60",
                energy: [CardType.Dark, CardType.Dark, CardType.Ghost]
            }
        ],
        holo: true
    },
    {
        id: "card7",
        hp: 50,
        title: "🫣",
        types: [CardType.Love],
        img: "https://i.imgur.com/l4xJDzf.jpeg",
        rarity: Rarity.Legendary,
        moves: [
            {
                name: "Hide",
                description: "Flip a coin. If heads, take no damage from the next move.",
                damage: "15",
                energy: [CardType.Love]
            },
        ],
        holo: true
    },
    {
        id: "card8",
        hp: 40,
        title: "Strawberry Harry",
        types: [CardType.Grass],
        img: "https://i.imgur.com/xbc91Lq.jpeg",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Sugar Rush",
                description: "",
                damage: "10",
                energy: [CardType.Grass]
            },
            {
                name: "Jam out",
                description: "",
                damage: "20",
                energy: [CardType.Grass, CardType.Grass]
            },
        ],
        holo: false
    },
    {
        id: "card9",
        hp: 30,
        title: "Hamburger Harry",
        types: [CardType.Ground],
        img: "https://i.imgur.com/dJouKI6.jpeg",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Ground Beef",
                description: "",
                damage: "10",
                energy: [CardType.Ground]
            },
            {
                name: "Combo Meal",
                description: "Flip three coins. Deal 5 damage for each heads.",
                damage: "",
                energy: [CardType.Ground]
            },
        ],
        holo: false
    },
    {
        id: "card10",
        hp: 20,
        title: "Chiikawa",
        types: [CardType.Normal],
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Chiikawa_volume_1_cover.jpg/220px-Chiikawa_volume_1_cover.jpg",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Dance",
                description: "Ooh, Ooh, Na Na Ooh Na!",
                damage: "10",
                energy: [CardType.Normal]
            },
        ],
        holo: false
    },
    {
        id: "card11",
        hp: 33,
        title: "Chikawaaa",
        types: [CardType.Fairy],
        img: "https://cdn.8thwall.com/apps/cover/2in57k2ehb3plmc962l4b99geq1q81rj13zvgs20fwncejclexf6ef5e-preview-600x315",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Dance",
                description: "Ooh, Ooh, Na Na Ooh Na!",
                damage: "33",
                energy: [CardType.Normal,CardType.Normal,CardType.Normal]
            },
        ],
        holo: false
    },
    {
        id: "card12",
        hp: 50,
        title: "Chikawaaas",
        types: [CardType.Fairy, CardType.Star],
        img: "https://imgcdn.sigstick.com/LajYuZGPFwzd1NOxsvkr/cover-1.png",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Dance",
                description: "Ooh, Ooh, Na Na Ooh Na!",
                damage: ":3c",
                energy: [CardType.Love]
            },
            {
                name: "✋ Bum Bum Bum",
                description: "If the preceding move was a dance, double this move's damage",
                damage: "20",
                energy: [CardType.Star]
            },
        ],
        holo: false
    },
    {
        id: "card13",
        hp: 15,
        title: "Kinger",
        types: [CardType.Fighting, CardType.Psychic],
        img: "https://i.ytimg.com/vi/ELTWZeqJgzY/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAdQZew4kGWUktZ3BYpDYc5dD7hHQ",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Wait",
                description: "Flip a coin. If tails, you enemy can't use a damaging move until your next turn.",
                damage: "5",
                energy: [CardType.Normal]
            },
            {
                name: "Dance",
                description: "They don't love you like I love you",
                damage: "10",
                energy: [CardType.Normal]
            },
        ],
        holo: false
    },
    {
        id: "card14",
        hp: 20,
        title: "Swag Cat",
        types: [CardType.Star],
        img: "https://i.imgur.com/IiEfg1p.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "He's so cool!!!",
                description: "Swag",
                damage: "10",
                energy: [CardType.Star]
            },
            {
                name: "Epicness",
                description: "Hypnotize your enemy. Flip a coin. If heads, they can't use a damaging move until your next turn.",
                damage: "5",
                energy: [CardType.Psychic]
            },
        ],
        holo: false
    },

    {
        id: "card15",
        hp: 50,
        title: "Dancing Cat",
        types: [CardType.Psychic, CardType.Star],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT534qAjw3xVULfczKrRAJHjNUCkDGSRgszVKTrGYXZt_CkOqoDIyz9myOs_XBCmj74f8s&usqp=CAU",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Super Shimmy",
                description: "Super Cool Dance",
                damage: "15",
                energy: [CardType.Star]
            },
            {
                name: "Epic Dance",
                description: "Hypnotize your enemy. They can't use a damaging move until your next turn.",
                damage: "",
                energy: [CardType.Psychic]
            },
        ],
        holo: false
    },

    {
        id: "card16",
        hp: 25,
        title: "Yokai",
        types: [CardType.Ghost],
        img: "https://i.imgur.com/wvDOc4n.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Bite",
                description: "CHOMP",
                damage: "10",
                energy: [CardType.Ghost]
            },
            {
                name: "Haunt",
                description: "???",
                damage: "20",
                energy: [CardType.Ghost, CardType.Ghost]
            },
        ],
        holo: false
    },

    {
        id: "card17",
        hp: 25,
        title: "Goobers",
        types: [CardType.Normal],
        img: "https://i.imgur.com/b9IVQYR.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Double Trouble",
                description: "This is getting out of hand, now there are two of them!",
                damage: "20",
                energy: [CardType.Normal,CardType.Normal]
            },
            {
                name: "Yap Sesh",
                description: "This move deals 5 more damage for each consecutive use.",
                damage: "5",
                energy: [CardType.Normal]
            },
        ],
        holo: false
    },
    {
        id: "card18",
        hp: 20,
        title: "Cup Honey",
        types: [CardType.Water, CardType.Fire],
        img: "https://i.imgur.com/wdN2AFc.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Boil",
                description: "3 Minutes till ready...",
                damage: "20",
                energy: [CardType.Water,CardType.Fire]
            },
            {
                name: "Splash",
                description: "Undercooked (just the way I like em).",
                damage: "10",
                energy: [CardType.Water]
            },
        ],
        holo: false
    },

    {
        id: "card19",
        hp: 30,
        title: "Hand Holding",
        types: [CardType.Moon, CardType.Love],
        img: "https://i.imgur.com/5xOcwBS.png",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Hand Holding",
                description: "Heal an ally 5 HP.",
                damage: "10",
                energy: [CardType.Love, CardType.Moon]
            },
            {
                name: "Daydream",
                description: "Head empty, no thoughts",
                damage: "15",
                energy: [CardType.Moon]
            },
        ],
        holo: false
    },
    {
        id: "card20",
        hp: 20,
        title: "Comfy Honeys",
        types: [CardType.Normal, CardType.Fire],
        img: "https://i.imgur.com/hu4KAhZ.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Warm",
                description: "",
                damage: "10",
                energy: [CardType.Fire]
            },
            {
                name: "Cuddle",
                description: "Heal yourself or an ally 5 HP. You can't use this move again until after using Warm.",
                damage: "",
                energy: [CardType.Normal]
            },
        ],
        holo: false
    },

    {
        id: "card21",
        hp: 40,
        title: "Strawberry Witch",
        types: [CardType.Grass, CardType.Psychic],
        img: "https://i.imgur.com/8mTMVrR.png",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Strawberry Jam",
                description: "Flip a coin. If heads, heal for 5 HP.",
                damage: "15",
                energy: [CardType.Grass, CardType.Grass]
            },
            {
                name: "Charm",
                description: "Attach an energy to any ally.",
                damage: "",
                energy: [CardType.Psychic]
            },
        ],
        holo: false
    },


    {
        id: "card22",
        hp: 20,
        title: "Dapper Harry",
        types: [CardType.Dark],
        img: "https://i.imgur.com/JHjPq10.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Tie Pull",
                description: "",
                damage: "10",
                energy: [CardType.Dark]
            },
        ],
        holo: false
    },
    {
        id: "card23",
        hp: 20,
        title: "Kiss",
        types: [CardType.Fighting, CardType.Love],
        img: "https://i.imgur.com/mBYYVXh.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Grab",
                description: "Flip a coin. If heads, the target can't use a damaging move until your next turn.",
                damage: "",
                energy: [CardType.Fighting]
            },
            {
                name: "Kiss",
                description: "If the preceding move was a grab, double this move's damage.",
                damage: "10",
                energy: [CardType.Love]
            },
        ],
        holo: false
    },
    {
        id: "card24",
        hp: 40,
        title: "Poki",
        types: [CardType.Flying, CardType.Fighting],
        img: "https://i.imgur.com/q3jibgZ.png",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Bite",
                description: "",
                damage: "15",
                energy: [CardType.Flying]
            },
            {
                name: "Banana",
                description: "Change your type to Grass",
                damage: "10",
                energy: [CardType.Love]
            },
        ],
        holo: false
    },
    {
        id: "card25",
        hp: 40,
        title: "Rito",
        types: [CardType.Flying, CardType.Ice],
        img: "https://i.imgur.com/FfIa12a.png",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Nut Cracker",
                description: "This move deals double damage if the target is undamaged",
                damage: "10",
                energy: [CardType.Flying]
            },
            {
                name: "Cold Shoulder",
                description: "",
                damage: "15",
                energy: [CardType.Ice]
            },
        ],
        holo: false
    },
    {
        id: "card26",
        hp: 60,
        title: "Poki & Rito",
        types: [CardType.Flying, CardType.Star],
        img: "https://i.imgur.com/aOFCDBQ.png",
        rarity: Rarity.Legendary,
        moves: [
            {
                name: "Wing Beat",
                description: "This move deals 5 more damage for each consecutive use.",
                damage: "10",
                energy: [CardType.Flying]
            },
            {
                name: "Kiss",
                description: "Heal 10 HP",
                damage: "",
                energy: [CardType.Love]
            },
        ],
        holo: true
    },
    {
        id: "card27",
        hp: 20,
        title: "Warm Honey",
        types: [CardType.Fire],
        img: "https://i.imgur.com/T8f0xyk.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Heat Up",
                description: "Attach an additional fire energy to this card.",
                damage: "5",
                energy: [CardType.Fire]
            },
            {
                name: "Warmth",
                description: "",
                damage: "15",
                energy: [CardType.Fire, CardType.Fire]
            },
        ],
        holo: false
    },
    {
        id: "card28",
        hp: 20,
        title: "Exploded Honey",
        types: [CardType.Ghost],
        img: "https://i.imgur.com/couHtam.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Hex",
                description: "",
                damage: "10",
                energy: [CardType.Ghost]
            },
            {
                name: "Puppeteer",
                description: "Discard this card. Heal an ally 20 HP.",
                damage: "",
                energy: [CardType.Ghost, CardType.Ghost]
            },
        ],
        holo: false
    },
    {
        id: "card29",
        hp: 25,
        title: "Flowers",
        types: [CardType.Grass, CardType.Love],
        img: "https://i.imgur.com/OqcdzY9.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Flower Power",
                description: "",
                damage: "10",
                energy: [CardType.Grass]
            },
            {
                name: "Flowers for you",
                description: "Does double damage to Love type enemies",
                damage: "30",
                energy: [CardType.Grass, CardType.Love]
            },
        ],
        holo: false
    },
    {
        id: "card31",
        hp: 15,
        title: "Worm",
        types: [CardType.Bug],
        img: "https://i.etsystatic.com/9410228/c/777/618/79/146/il/b56e27/4045934351/il_340x270.4045934351_ktzn.jpg",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Would you still love me?",
                description: "",
                damage: "10",
                energy: [CardType.Bug]
            },
            {
                name: "Slither",
                description: "Swap this card with a card from your hand.",
                damage: "5",
                energy: [CardType.Bug]
            },
        ],
        holo: false
    },
    {
        id: "card32",
        hp: 20,
        title: "Jimbo",
        types: [CardType.Normal],
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/balatro/e/ef/Joker.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "High Card",
                description: "mmm... balatro",
                damage: "10",
                energy: [CardType.Normal]
            },
            {
                name: "Pair",
                description: "",
                damage: "20",
                energy: [CardType.Normal, CardType.Normal]
            },
        ],
        holo: false
    },
    {
        id: "card33",
        hp: 35,
        title: "Blueprint/Brainstorm",
        types: [CardType.Moon],
        img: "https://i.ytimg.com/vi/crqfJFDffNc/sddefault.jpg",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Blueprint",
                description: "Copy a move from an ally",
                damage: "",
                energy: []
            },
            {
                name: "Brainstorm",
                description: "Copy a move from an enemy",
                damage: "",
                energy: []
            },
        ],
        holo: false
    },
    {
        id: "card36",
        hp: 20,
        title: "Lazeez",
        types: [CardType.Normal],
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/re2HH7Dx9oUuTqYdiQERfw/348s.jpg",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Half n Half",
                description: "Flip 2 coins. Deal 10 damage for each heads.",
                damage: "",
                energy: [CardType.Normal]
            },
            {
                name: "5 Lines",
                description: "mm... Lazeez...",
                damage: "30",
                energy: [CardType.Fire, CardType.Fire, CardType.Fire]
            },
        ],
        holo: false
    },
    {
        id: "card37",
        hp: 30,
        title: "Fuwa Fuwa",
        types: [CardType.Star],
        img: "https://www.fuwafuwapancakes.com/wp-content/uploads/2023/09/fuwa-fuwa-homepage.jpg",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Squishy",
                description: "Take 1/2 damage on the first attack on this card.",
                damage: "",
                energy: []
            },
            {
                name: "Sugar Rush",
                description: "Deal 5 more damage for each consecutive use. After 3 uses, this card is defeated.",
                damage: "10",
                energy: [CardType.Normal]
            },
        ],
        holo: false
    },


];

export default masterCards;