import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
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
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
