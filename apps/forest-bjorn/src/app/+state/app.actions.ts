import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@angular/fire/auth';
import { Image } from '@mcalamosca/ui-components';
import { createAction, props } from '@ngrx/store';

//enums for action names
export enum AppStateActionTypes {
  SetUser = '[AppState] Set User',
  SetDroneImages = '[AppState] Set Drone Images',
  LoadDronePhotos = '[Firebase API] Load Drone Photos',
  LoadDronePhotosSuccess = '[Firebase API] Load Drone Photos Success',
  LoadDronePhotosFailure = '[Firebase API] Load Drone Photos Failure',
}

export const setUser = createAction(AppStateActionTypes.SetUser, props<{ user: User }>());
export const setDroneImages = createAction(AppStateActionTypes.SetDroneImages, props<{ droneImages: Image[] }>());
export const loadDronePhotos = createAction(AppStateActionTypes.LoadDronePhotos);
export const loadDronePhotosSuccess = createAction(
  AppStateActionTypes.LoadDronePhotosSuccess,
  props<{ images: Image[] }>()
);
export const loadDronePhotosFailure = createAction(
  AppStateActionTypes.LoadDronePhotosFailure,
  props<{ error: HttpErrorResponse }>()
);
