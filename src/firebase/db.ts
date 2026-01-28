import { db } from './config';
import { collection, getDocs, query, where, doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { UserCollection, TradingCard, UserCard } from '../types/trading-card';
import { masterCards } from '../data/master-cards';
import { UserData } from '../types/user';
import { Rarity } from '../types/trading-card';
import { auth } from './config';
import { SellResult } from '../types/trading-card';

// Get random cards from master collection with rarity weights
export function getRandomCards(count: number): TradingCard[] {
    const drawnCards: TradingCard[] = [];
    
    // Separate cards by rarity
    const commonCards = masterCards.filter(card => card.rarity === Rarity.Common);
    const uncommonCards = masterCards.filter(card => card.rarity === Rarity.Uncommon);
    const rareCards = masterCards.filter(card => card.rarity === Rarity.Rare);
    const legendaryCards = masterCards.filter(card => card.rarity === Rarity.Legendary);

    for (let i = 0; i < count; i++) {
        const roll = Math.random() * 100; // Roll 0-100
        
        let selectedCard: TradingCard;
        if (roll < 2) { // 2% Legendary
            selectedCard = legendaryCards[Math.floor(Math.random() * legendaryCards.length)];
        } else if (roll < 12) { // 10% Rare
            selectedCard = rareCards[Math.floor(Math.random() * rareCards.length)];
        } else if (roll < 32) { // 20% Uncommon
            selectedCard = uncommonCards[Math.floor(Math.random() * uncommonCards.length)];
        } else { // 70% Common
            selectedCard = commonCards[Math.floor(Math.random() * commonCards.length)];
        }
        drawnCards.push(selectedCard);
    }
    
    return drawnCards;
}

// Add cards to user's collection
export async function addCardsToCollection(userId: string, cards: UserCard[]) {
    const userCollectionRef = doc(db, 'collections', userId);
    const userCollectionSnap = await getDoc(userCollectionRef);

    if (!userCollectionSnap.exists()) {
        // Create new collection for user
        await setDoc(userCollectionRef, {
            userId,
            cards: cards
        });
    } else {
        // Add to existing collection
        const existingCollection = userCollectionSnap.data() as UserCollection;
        await updateDoc(userCollectionRef, {
            cards: [...existingCollection.cards, ...cards]
        });
    }
}

// Get user's collection with full card details
export async function getUserCollection(userId: string): Promise<TradingCard[]> {
    const userCollectionRef = doc(db, 'collections', userId);
    const userCollectionSnap = await getDoc(userCollectionRef);

    if (!userCollectionSnap.exists()) {
        return [];
    }

    const userCollection = userCollectionSnap.data();
    return userCollection.cards.map((userCard: UserCard) => {
        const masterCard = masterCards.find(card => card.id === userCard.cardId);
        if (!masterCard) return null;
        return {
            ...masterCard,
            holo: userCard.holo
        };
    }).filter((card: TradingCard | null): card is TradingCard => card !== null);
}

// Get user data
export async function getUserData(userId: string): Promise<UserData | null> {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
        return null;
    }
    
    return userSnap.data() as UserData;
}

// Initialize or update user data
export async function initializeUser(userId: string): Promise<UserData> {
    const userRef = doc(db, 'users', userId);
    const userAuth = auth.currentUser;
    
    const userData: UserData = {
        userId,
        flowerPoints: userAuth?.email === 'test@test.com' ? 10000 : 30,
        lastLoginBonus: new Date().toISOString().split('T')[0]
    };
    
    await setDoc(userRef, userData);
    return userData;
}

// Check and give daily login bonus
export async function checkLoginBonus(userId: string): Promise<number> {
    const userRef = doc(db, 'users', userId);
    const userData = await getUserData(userId);
    const today = new Date().toISOString().split('T')[0];
    
    if (!userData) {
        return (await initializeUser(userId)).flowerPoints;
    }
    
    // Handle NaN flower points
    if (isNaN(userData.flowerPoints)) {
        const fixedData = {
            ...userData,
            flowerPoints: 10
        };
        await setDoc(userRef, fixedData);
        return 10;
    }
    
    if (userData.lastLoginBonus !== today) {
        const updatedData = {
            ...userData,
            flowerPoints: userData.flowerPoints + 10,
            lastLoginBonus: today
        };
        await setDoc(userRef, updatedData);
        return updatedData.flowerPoints;
    }
    
    return userData.flowerPoints;
}

// Update flower points
export async function updateFlowerPoints(userId: string, amount: number): Promise<number> {
    const userRef = doc(db, 'users', userId);
    const userData = await getUserData(userId);
    
    if (!userData) {
        throw new Error('User not found');
    }
    
    // Handle NaN flower points
    const currentPoints = isNaN(userData.flowerPoints) ? 10 : userData.flowerPoints;
    const updatedPoints = currentPoints + amount;
    
    if (updatedPoints < 0) {
        throw new Error('Insufficient flower points');
    }
    
    await updateDoc(userRef, {
        flowerPoints: updatedPoints
    });
    
    return updatedPoints;
}

// Get sell price for a card
export function getCardSellPrice(card: TradingCard): number {
    let price = 0;
    switch (card.rarity) {
        case Rarity.Legendary:
            price = 20;
            break;
        case Rarity.Rare:
            price = 10;
            break;
        case Rarity.Uncommon:
            price = 3;
            break;
        case Rarity.Common:
            price = 1;
            break;
    }
    if (card.holo) price += 10;
    return price;
}

// Remove card from collection and add flower points
export async function sellCard(userId: string, cardToSell: TradingCard): Promise<SellResult> {
    const userCollectionRef = doc(db, 'collections', userId);
    const userCollectionSnap = await getDoc(userCollectionRef);
    
    if (!userCollectionSnap.exists()) {
        throw new Error('Collection not found');
    }
    
    // Get current collection and ensure it matches the UserCollection type
    const collection = userCollectionSnap.data() as UserCollection;
    
    // Find the first matching card with same id and holo status
    const cardIndex = collection.cards.findIndex(
        card => card.cardId === cardToSell.id && card.holo === cardToSell.holo
    );
    
    if (cardIndex === -1) {
        throw new Error('Card not found in collection');
    }
    
    const updatedCards = [...collection.cards];
    updatedCards.splice(cardIndex, 1);

    let specialEffect: SellResult['specialEffect'];

    // Special case: Wheel of Fortune
    if (cardToSell.id === 'card39') {
        if (Math.random() < 0.25) {
            const nonHoloCards = updatedCards.filter(card => !card.holo);
            if (nonHoloCards.length > 0) {
                const randomIndex = Math.floor(Math.random() * nonHoloCards.length);
                const cardToMakeHolo = nonHoloCards[randomIndex];
                const cardToUpdateIndex = updatedCards.findIndex(
                    card => card.cardId === cardToMakeHolo.cardId && !card.holo
                );
                if (cardToUpdateIndex !== -1) {
                    updatedCards[cardToUpdateIndex] = {
                        ...updatedCards[cardToUpdateIndex],
                        holo: true
                    };
                    // Get the card name from master cards
                    const masterCard = masterCards.find(card => card.id === cardToMakeHolo.cardId);
                    specialEffect = {
                        type: 'wheelOfFortune' as const,
                        success: true,
                        holoCardName: masterCard?.title
                    };
                }
            }
        } else {
            specialEffect = {
                type: 'wheelOfFortune' as const,
                success: false
            };
        }
    }

    await updateDoc(userCollectionRef, {
        cards: updatedCards
    });
    
    let sellPrice = getCardSellPrice(cardToSell);
    
    // Special case: Honey Pot
    if (cardToSell.id === 'card40') {
        sellPrice += 10;
        specialEffect = {
            type: 'honeypot' as const,
            success: true
        };
    }

    // Special case: Let's go gambling!
    if (cardToSell.id === 'card46') {
        const bonusPoints = Math.floor(Math.random() * 11);
        sellPrice += bonusPoints;
        specialEffect = {
            type: 'gambling' as const,
            success: true,
            bonusPoints
        };
    }
    
    const updatedPoints = await updateFlowerPoints(userId, sellPrice);
    
    return {
        updatedPoints,
        specialEffect
    };
}
