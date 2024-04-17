import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.routes').then((m) => m.portfolioRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
