import { createReducer, on } from '@ngrx/store';
import { loadImagesSuccess, setGalleryType } from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  user: null,
  currentGalleryType: '',
  images: {},
};

export const appStateReducer = createReducer(
  initialState,
  on(setGalleryType, (state, { galleryType }) => ({
    ...state,
    currentGalleryType: galleryType,
  })),
  on(loadImagesSuccess, (state, { images }) => ({
    ...state,
    images: { ...state.images, [state.currentGalleryType]: images },
  }))
);
