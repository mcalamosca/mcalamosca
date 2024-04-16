import { Injectable, inject } from '@angular/core';
import { Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  storage: Storage = inject(Storage);

  getLandingPhotos() {
    //get a bunch of photos from a bucket
    // const ref = ref(this.storage, '')
  }
}
