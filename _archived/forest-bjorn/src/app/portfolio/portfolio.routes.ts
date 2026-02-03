import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';

export const portfolioRoutes: Routes = [
  {
    path: ':type',
    component: GalleryComponent,
  },
];
