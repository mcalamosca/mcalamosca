import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { AppStateActionTypes, setDroneImages } from './app.actions';

@Injectable()
export class AppEffects {
  loadDronePhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActionTypes.LoadDronePhotos),
      switchMap(() =>
        this.firebaseService.getDronePhotos().pipe(
          map((images) => setDroneImages({ droneImages: images })),
          catchError((error) => of({ type: '[AppState] Set Drone Images Failure', error }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private firebaseService: FirebaseService) {}
}
