import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppFeature = createFeatureSelector<AppState>('app');

export const selectDroneImages = createSelector(selectAppFeature, (state: AppState) => state.images.drone);
