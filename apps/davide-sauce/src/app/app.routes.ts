import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HistoryComponent } from './history/history.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { RecipesComponent } from './recipes/recipes.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
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
    path: '**',
    redirectTo: '/',
  },
];
