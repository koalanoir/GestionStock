import { Timestamp } from 'firebase/firestore';

export interface Article {
  id: string;
  name: string;
  quantity: number;
  price: number;
  expirationDate: Timestamp; 
}