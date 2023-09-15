import { Injectable, inject } from '@angular/core';
import { FlightService } from '../flight-search/flight.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ticketsActions } from './actions';
import { map, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlightBookingEffects {
  flightService = inject(FlightService);
  actions$ = inject(Actions);

  constructor() {}

  loadFlights = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketsActions.loadFlights),
      switchMap((a) => this.flightService.find(a.from, a.to)),
      map((flights) => ticketsActions.flightsLoaded({ flights }))
    )
  );
}
