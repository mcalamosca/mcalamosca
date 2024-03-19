// Example of a Flamelink service (flamelink.service.ts)
import { Injectable, inject } from '@angular/core';
import flamelink from '@flamelink/sdk-app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../../environments/environment';
import {Firestore, collection, collectionData} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

interface Item {
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class FlamelinkService {
  firebaseApp = initializeApp(environment.firebase);
  firestore: Firestore = inject(Firestore);
  flApp;
  constructor() {
    this.flApp = flamelink({
      firebaseApp: this.firebaseApp,
      dbType: 'cf',
    });
    this.getDronePhotos();
  }

  getDronePhotos(): Observable<any> {
    console.log(this.firestore);
    console.log(
      this.flApp.content.get('dronePhotos')
    );
    const itemCollection =  collection(this.firestore, 'dronePhotos');
    return collectionData(itemCollection);
  }
}
