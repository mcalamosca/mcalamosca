import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@angular/fire/auth';
import { Image } from '@mcalamosca/ui-components';
import { createAction, props } from '@ngrx/store';

// Enums for action names
export enum AppStateActionTypes {
  SetUser = '[AppState] Set User',
  SetGalleryType = '[AppState] Set Gallery Type',
  LoadImages = '[AppState] Load Images',
  LoadImagesSuccess = '[AppState] Load Images Success',
  LoadImagesFailure = '[AppState] Load Images Failure',
}

export const setUser = createAction(AppStateActionTypes.SetUser, props<{ user: User }>());

export const setGalleryType = createAction(AppStateActionTypes.SetGalleryType, props<{ galleryType: string }>());

export const loadImages = createAction(AppStateActionTypes.LoadImages);

export const loadImagesSuccess = createAction(AppStateActionTypes.LoadImagesSuccess, props<{ images: Image[] }>());

export const loadImagesFailure = createAction(
  AppStateActionTypes.LoadImagesFailure,
  props<{ error: HttpErrorResponse }>()
);
