import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppFeature = createFeatureSelector<AppState>('app');
export const selectCurrentGalleryType = createSelector(
  selectAppFeature,
  (state: AppState) => state.currentGalleryType
);

export const selectImages = createSelector(
  selectAppFeature,
  selectCurrentGalleryType,
  (state: AppState, galleryType: string) => state.images[galleryType]
);
