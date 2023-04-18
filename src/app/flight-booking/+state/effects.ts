import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject, Injectable } from '@angular/core';
import { ticketsActions } from './actions';
import { map, switchMap } from 'rxjs';
import { FlightService } from '../flight-search/flight.service';

@Injectable({ providedIn: 'root' })
export class TicketsEffects {
  flightService = inject(FlightService);
  actions$ = inject(Actions);

  loadFlights = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketsActions.loadFlights),
      switchMap((a) => this.flightService.find(a.from, a.to)),
      map((flights) => ticketsActions.flightsLoaded({ flights }))
    )
  );
}
