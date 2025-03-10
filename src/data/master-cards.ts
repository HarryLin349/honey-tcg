import { TradingCard, CardType, Rarity } from '../types/trading-card';

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
                name: "✋ Kin cha na",
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
        img: "https://i.imgur.com/rv9O9lX.png",
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
                name: "Eternal love?",
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
    {
        id: "card38",
        hp: 70,
        title: "Honeybears",
        types: [CardType.Love],
        img: "https://i.pinimg.com/564x/f0/b7/38/f0b738c906c3cfe386a3cd2aa23ebc1f.jpg",
        rarity: Rarity.Rare,
        moves: [
            {
                name: "Chew",
                description: "Flip a coin. If heads, deal 10 more damage.",
                damage: "15",
                energy: [CardType.Normal, CardType.Normal]
            },
            {
                name: "Bear Hug",
                description: "The opposing card can't switch out until this card is defeated.",
                damage: "10",
                energy: [CardType.Normal]
            },
        ],
        holo: false
    },
    {
        id: "card39",
        hp: 70,
        title: "Wheel of Fortune",
        types: [CardType.Moon],
        img: "https://i.ytimg.com/vi/OfxEPLWjFKE/maxresdefault.jpg",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Wheel of Fortune",
                description: "Selling this card has a 1/4 chance to add holo to a random card in your collection.",
                damage: "",
                energy: []
            },
            {
                name: "Nope!",
                description: "When this card is defeated, the opposing card takes 40 damage.",
                damage: "",
                energy: []
            },
        ],
        holo: false
    },
    {
        id: "card40",
        hp: 70,
        title: "Honey Pot",
        types: [CardType.Sun, CardType.Grass],
        img: "https://i.pinimg.com/1200x/e4/18/09/e418093d88e2243f2ff24702bf355780.jpg",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Harvest",
                description: "Selling this card gives you 10 flower points.",
                damage: "",
                energy: []
            },
        ],
        holo: false
    },
    {
        id: "card41",
        hp: 70,
        title: "Honeys Vs. The World",
        types: [CardType.Dark, CardType.Star],
        img: "https://i.imgur.com/V4FCfeV.png",
        rarity: Rarity.Legendary,
        moves: [
            {
                name: "Wallpaper",
                description: "This card may remain in your bench without taking a bench slot",
                damage: "",
                energy: []
            },
            {
                name: "Dark Mode",
                description: "Pick an ally or enemy, and change their type to Dark",
                damage: "50",
                energy: [CardType.Dark, CardType.Star]
            },
        ],
        holo: false
    },
    {
        id: "card42",
        hp: 40,
        title: "Winter Clothes",
        types: [CardType.Ice],
        img: "https://i.imgur.com/9Qk2L9Y.jpeg",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Bundle Up",
                description: "This card takes 1/2 damage until their next turn",
                damage: "5",
                energy: [CardType.Ice, CardType.Ice]
            },
            {
                name: "Outdoor Walk",
                description: "",
                damage: "15",
                energy: [CardType.Ice]
            },
        ],
        holo: false
    },
    {
        id: "card43",
        hp: 30,
        title: "Smeck",
        types: [CardType.Love],
        img: "https://i.imgur.com/jkSX6f0.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Muah",
                description: "Heal 5 HP",
                damage: "5",
                energy: [CardType.Love]
            },
            {
                name: "Huam",
                description: "",
                damage: "10",
                energy: [CardType.Love]
            },
        ],
        holo: false
    },
    {
        id: "card43",
        hp: 30,
        title: "Honeykawa",
        types: [CardType.Fairy],
        img: "https://i.imgur.com/eIdgbUZ.jpeg",
        rarity: Rarity.Common,
        moves: [
            {
                name: "waddahonie",
                description: "Flip a coin. If heads, confuse the opponent",
                damage: "5",
                energy: [CardType.Fairy]
            },
            {
                name: "ooh ooh na na ooh na",
                description: "waddahonie",
                damage: "10",
                energy: [CardType.Normal]
            },
        ],
        holo: false
    },
    {
        id: "card44",
        hp: 30,
        title: "Phone Stickers",
        types: [CardType.Electric, CardType.Steel],
        img: "https://i.imgur.com/haFJGUX.png",
        rarity: Rarity.Common,
        moves: [
            {
                name: "Sticker",
                description: "The target can no longer switch out",
                damage: "5",
                energy: [CardType.Steel]
            },
            {
                name: "Screentime",
                description: "Deals 5 less damage for each consecutive use",
                damage: "15",
                energy: [CardType.Electric]
            },
        ],
        holo: false
    },
    {
        id: "card45",
        hp: 35,
        title: "Slobber",
        types: [CardType.Water],
        img: "https://i.imgur.com/K88PDvs.png",
        rarity: Rarity.Uncommon,
        moves: [
            {
                name: "Scare",
                description: "Flip a coin. If heads, switch this target out with an ally on its bench",
                damage: "5",
                energy: [CardType.Water]
            },
            {
                name: "Slobber",
                description: "",
                damage: "10",
                energy: [CardType.Water]
            },
        ],
        holo: false
    },
];

export default masterCards;