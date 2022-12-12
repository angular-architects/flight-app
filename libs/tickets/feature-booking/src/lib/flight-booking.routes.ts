import { Routes } from '@angular/router';

import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightLookupComponent } from './flight-lookup/flight-lookup.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { provideDomain } from '@flight-demo/tickets/domain';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [provideDomain()],
    children: [
      {
        path: 'flight-lookup',
        component: FlightLookupComponent,
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
      },
    ],
  },
];

export default FLIGHT_BOOKING_ROUTES;
