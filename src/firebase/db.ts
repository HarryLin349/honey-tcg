import { db } from './config';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { UserCollection, TradingCard } from '../types/trading-card';
import { masterCards } from '../data/master-cards';

export const getUserCollection = async (userId: string): Promise<TradingCard[]> => {
    try {
        // Get user's collection document
        const userCollectionRef = doc(db, 'collections', userId);
        const userCollectionSnap = await getDoc(userCollectionRef);

        if (!userCollectionSnap.exists()) {
            return [];
        }

        const userCollection = userCollectionSnap.data() as UserCollection;
        
        // Map the user's card IDs to full card data from master cards
        return userCollection.cards.map(userCard => {
            const masterCard = masterCards.find(card => card.id === userCard.cardId);
            if (!masterCard) return null;
            
            return {
                ...masterCard,
                holo: userCard.holo // Override the holo property with user's version
            };
        }).filter((card): card is TradingCard => card !== null);
    } catch (error) {
        console.error('Error fetching user collection:', error);
        return [];
    }
}; 