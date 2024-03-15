// Example of a Flamelink service (flamelink.service.ts)
import { Injectable } from '@angular/core';
import flamelink from '@flamelink/sdk-app';
import '@flamelink/sdk-content';
import '@flamelink/sdk-storage';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FlamelinkService {
  constructor() {
    const firebaseApp = initializeApp(environment.firebase);
    const firestore = getFirestore(firebaseApp);

    const flApp = flamelink({
      firebaseApp: firebaseApp,
      dbType: 'cf',
      // Other Flamelink initialization options...
    });

    // Now Flamelink is initialized and can be used throughout your application
  }
}
