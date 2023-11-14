import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightService, provideFlightBooking } from '@demo/ticketing/data';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [provideFlightBooking()],
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
        resolve: {
          flight: (r: ActivatedRouteSnapshot) =>
            inject(FlightService).findById(r.params['id']),
        },
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent,
      },
    ],
  },
];

export default FLIGHT_BOOKING_ROUTES;
