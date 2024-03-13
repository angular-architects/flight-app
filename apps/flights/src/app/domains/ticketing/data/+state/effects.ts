import { Injectable, inject } from '@angular/core';
import { FlightService } from '../flight.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ticketingActions } from './actions';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class TicketingEffects {
  flightService = inject(FlightService);
  actions$ = inject(Actions);

  private find(from: string, to: string): Observable<Action> {
    return this.flightService.find(from, to).pipe(
      map((flights) => ticketingActions.flightsLoaded({ flights })),
      catchError((error) =>
        of(ticketingActions.error({ error: error.message }))
      )
    );
  }

  loadFlight = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketingActions.loadFlights),
      switchMap((a) => this.find(a.from, a.to))
    )
  );
}
