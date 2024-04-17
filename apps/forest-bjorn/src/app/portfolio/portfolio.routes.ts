//angular routes

import {Routes} from "@angular/router";
import {DroneComponent} from "./drone/drone.component";


export const portfolioRoutes: Routes = [
  {
    path: 'drone',
    component: DroneComponent,
  },
];

