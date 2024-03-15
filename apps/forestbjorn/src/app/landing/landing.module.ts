import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];
@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
})
export class LandingModule {}
