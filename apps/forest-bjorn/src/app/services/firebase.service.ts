import { Injectable, inject } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref } from '@angular/fire/storage';
import { Image } from '@mcalamosca/ui-components';
import { Observable, from } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  storage: Storage = inject(Storage);
  droneRef = ref(this.storage, 'gs://forest-bjorn-photography.appspot.com/drone');

  getDronePhotos(): Observable<Image[]> {
    return from(listAll(this.droneRef)).pipe(
      mergeMap((result) => result.items),
      mergeMap((itemRef) =>
        from(getDownloadURL(itemRef)).pipe(map((url) => ({ src: url, alt: 'Drone photo' } as Image)))
      ),
      toArray() 
    );
  }
}
