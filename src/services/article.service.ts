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
  addArticle(article: Article): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({ ...article, id });
  }
}