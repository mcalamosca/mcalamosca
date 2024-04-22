import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { loadImages, loadImagesFailure, loadImagesSuccess, setGalleryType } from './app.actions';
import { selectCurrentGalleryType } from './app.selectors';

@Injectable()
export class AppEffects {
  loadImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadImages),
      withLatestFrom(this.store.select(selectCurrentGalleryType)),
      switchMap(([_, galleryType]) =>
        this.firebaseService.getGalleryImages(galleryType).pipe(
          map((images) => loadImagesSuccess({ images })),
          catchError((error) => of(loadImagesFailure({ error })))
        )
      )
    )
  );

  setGalleryType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setGalleryType),
      map(({ galleryType }) => loadImages())
    )
  );

  constructor(private actions$: Actions, private firebaseService: FirebaseService, private store: Store) {}
}
