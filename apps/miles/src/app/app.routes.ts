import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MilesComponent } from './miles/miles.component';
import { NextLevelComponent } from './next-level/next-level.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'miles-list',
    component: MilesComponent,
  },
  {
    path: 'next-level',
    component: NextLevelComponent,
  },
];

export default APP_ROUTES;
