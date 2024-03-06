import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';
import { AuthService } from './shared/auth.service';

export const APP_ROUTES: Routes = [
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
    path: 'flight-booking',
    loadChildren: () => import('./flight-booking/flight-booking.routes'),
    canActivate: [
      () =>
        inject(AuthService).isFlightManager()
          ? true
          : inject(Router).navigate(['/home', { login: true }]),
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
