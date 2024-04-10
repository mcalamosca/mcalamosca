import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HealthComponent } from './health/health.component';
import { HistoryComponent } from './history/history.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { RecipesComponent } from './recipes/recipes.component';
import {TermsOfServiceComponent} from './terms-of-service/terms-of-service.component';

//Order by SEO priority for sitemap.js script
export const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'health',
    component: HealthComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
