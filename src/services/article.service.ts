import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Article } from 'src/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private collectionName = 'articles';

  constructor(private firestore: AngularFirestore) {}

  getArticlesByUserId(userId: string): Observable<Article[]> {
    return this.firestore.collection<Article>(this.collectionName, ref => ref.where('userId', '==', userId)).valueChanges({ idField: 'id' });
  }
  getArticlesByUserIdOrderPeremptionDate(userId: string): Observable<Article[]> {
    return this.firestore.collection<Article>(this.collectionName, ref => ref.where('userId', '==', userId).orderBy('expirationDate')).valueChanges({ idField: 'id' });
  }

  getProductById(productId: string): Observable<Article[]> {
    return this.firestore.collection<Article>(this.collectionName, ref => ref.where('productId', '==', productId)).valueChanges();
  }
  
  addArticle(article: Article): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({ ...article, id });
  }
  getArticleByProductIdAndLot(productId: string, lot: string): Observable<Article[]> {
    return this.firestore.collection<Article>(this.collectionName, ref => ref.where('productId', '==', productId).where('lot', '==', lot).orderBy('expirationDate')).valueChanges();
  }
  updateArticle(article: Article): Promise<void> {
    if (article.quantity === 0) {
      return this.firestore.collection(this.collectionName).doc(article.id).delete();
    } else {
      return this.firestore.collection(this.collectionName).doc(article.id).update(article);
    }
  }
}