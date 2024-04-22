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

  getImages(galleryType: string): Observable<Image[]> {
    const galleryRef = ref(this.storage, `gs://forest-bjorn-photography.appspot.com/${galleryType}`);

    return from(listAll(galleryRef)).pipe(
      mergeMap((result) => from(result.items.sort((a, b) => a.name.localeCompare(b.name)))),
      mergeMap((itemRef) =>
        from(getDownloadURL(itemRef)).pipe(map((url) => ({ src: url, alt: `${galleryType} photo` } as Image)))
      ),
      toArray()
    );
  }
}
