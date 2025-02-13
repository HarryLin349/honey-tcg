import { db } from './config';
import { collection, getDocs, query, where, doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { UserCollection, TradingCard, UserCard } from '../types/trading-card';
import { masterCards } from '../data/master-cards';

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
    }).filter((card): card is TradingCard => card !== null);
} 