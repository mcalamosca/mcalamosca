import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  item$!: Observable<any[]>;
  flApp!: any;

  constructor(private afs: AngularFirestore) {
    // Access the 'fl_files' collection from Firestore
    const itemCollection: AngularFirestoreCollection<any> =
      this.afs.collection('fl_files');
    // Use snapshotChanges() if you need metadata along with the document data
    this.item$ = itemCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );

    // Example subscription to the observable (this can be done in the component)
    this.item$.subscribe((data) => {
      console.log(data);
    });
  }
}
