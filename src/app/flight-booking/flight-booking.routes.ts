import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { provideLogger } from '../shared/logger/provider';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [
      provideLogger({
        formatter: (lvl, cat, msg) => [lvl, cat, msg].join(';'),
      }),
    ],
    children: [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full',
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent,
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent,
        canActivate: [() => inject(AuthService).isAuth()],
      },
    ],
  },
];

export default FLIGHT_BOOKING_ROUTES;
