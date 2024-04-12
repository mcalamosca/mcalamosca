import { Injectable, inject } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  items$!: Observable<DocumentData[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'drone_photos');
    this.items$ = collectionData(itemCollection);
    this.items$.subscribe((next) => console.log(next));

    // Example subscription to the observable (this can be done in the component)
    this.items$.subscribe((data) => {
      console.log(data);
    });
  }
}
