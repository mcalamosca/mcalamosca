// File: state.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { setUser, setDroneImages } from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  user: null,
  images: {
    drone: []
  }
};

export const appStateReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({ ...state, user })),
  on(setDroneImages, (state, { droneImages }) => ({ ...state, images: { ...state.images, drone: droneImages } }))
);

