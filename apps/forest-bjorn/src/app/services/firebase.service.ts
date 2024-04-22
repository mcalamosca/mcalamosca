import { Injectable, inject } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref } from '@angular/fire/storage';
import { Image } from '@mcalamosca/ui-components';
import { Observable, forkJoin, from } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  storage: Storage = inject(Storage);

  getGalleryImages(galleryType: string): Observable<Image[]> {
    const galleryRef = ref(this.storage, `gs://forest-bjorn-photography.appspot.com/${galleryType}`);

    return from(listAll(galleryRef)).pipe(
      mergeMap((result) => from(result.items.sort((a, b) => a.name.localeCompare(b.name)))),
      mergeMap((itemRef) =>
        from(getDownloadURL(itemRef)).pipe(map((url) => ({ src: url, alt: `${galleryType} photo` } as Image)))
      ),
      toArray()
    );
  }
  getSpecificImage(folder: string, imageName: string | string[]): Observable<Image | Image[]> {
    if (Array.isArray(imageName)) {
      const requests = imageName.map((name) => {
        const galleryRef = ref(this.storage, `gs://forest-bjorn-photography.appspot.com/${folder}/${name}`);
        return from(getDownloadURL(galleryRef)).pipe(map((url) => ({ src: url, alt: `${name} photo` } as Image)));
      });
      return forkJoin(requests);
    } else {
      const galleryRef = ref(this.storage, `gs://forest-bjorn-photography.appspot.com/${folder}/${imageName}`);
      return from(getDownloadURL(galleryRef)).pipe(map((url) => ({ src: url, alt: `${imageName} photo` } as Image)));
    }
  }
}
