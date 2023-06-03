import { Injectable, inject } from '@angular/core';
import { FlightService } from '../flight.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ticketingActions } from './actions';
import { map, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TicketingEffects {
  flightService = inject(FlightService);
  actions$ = inject(Actions);

  loadFlight = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketingActions.loadFlights),
      switchMap((a) => this.flightService.find(a.from, a.to)),
      map((flights) => ticketingActions.flightsLoaded({ flights }))
    )
  );
}
