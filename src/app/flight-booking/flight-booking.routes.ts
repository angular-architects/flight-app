import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { delay } from 'rxjs';
import { checkAuth } from '../shared/auth/auth';
import { CanExit } from '../shared/can-exit';
import { provideLogger } from '../shared/logger/provider';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { provideState } from '@ngrx/store';
import { ticketsFeature } from './+state/reducer';
import { provideEffects } from '@ngrx/effects';
import { TicketsEffects } from './+state/effects';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [
      provideState(ticketsFeature),
      provideEffects(TicketsEffects),
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
        resolve: {
          flight: (r: ActivatedRouteSnapshot) =>
            inject(FlightService).findById(r.params['id']).pipe(delay(3000)),
        },
        canDeactivate: [(cmp: CanExit) => cmp.canExit()],
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent,
        canActivate: [checkAuth],
      },
    ],
  },
];

export default FLIGHT_BOOKING_ROUTES;
