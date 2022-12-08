import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking/flight-booking.routes';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  ...FLIGHT_BOOKING_ROUTES,
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  // This _needs_ to be the last route!!
  {
    path: '**',
    component: NotFoundComponent,
  },
];
