import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
    title: 'Map a Workflow | Forest Björn',
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
