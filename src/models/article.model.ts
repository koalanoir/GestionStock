import { Timestamp } from 'firebase/firestore';

export interface Article {
  id: string;
  productId: string; // Identifiant du produit
  name: string;
  lot: string; // Lot du produit
  quantity: number;
  price: number;
  expirationDate: Timestamp; 
}