import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }

  // Méthode pour créer une nouvelle collection
  createCollection(collectionName: string, data: any) {
    return this.afs.collection(collectionName).add(data);
  }

  // Méthode pour modifier un document dans une collection
  updateDocument(collectionName: string, documentId: string, data: any) {
    return this.afs.collection(collectionName).doc(documentId).update(data);
  }

}
