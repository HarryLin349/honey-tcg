import { db } from './config';
import { collection, getDocs, query, where, doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { UserCollection, TradingCard, UserCard } from '../types/trading-card';
import { masterCards } from '../data/master-cards';
import { UserData } from '../types/user';

// Get random cards from master collection
export function getRandomCards(count: number): TradingCard[] {
    const shuffled = [...masterCards].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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
        await updateDoc(userCollectionRef, {
            cards: arrayUnion(...cards)
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
    const userData: UserData = {
        userId,
        flowerPoints: 30,
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