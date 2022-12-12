import { Actions, createEffect, ofType } from '@ngrx/effects';

import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FlightService } from '../infrastructure/flight.service';
import { ticketsActions } from './actions';
import { catchError, map, switchMap, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TicketsEffects {
  snackBar = inject(MatSnackBar);
  flightService = inject(FlightService);
  actions$ = inject(Actions);

  loadFlights = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketsActions.loadFlights),
      switchMap((a) => this.flightService.find(a.from, a.to)),
      map((flights) => ticketsActions.flightsLoaded({ flights }))
    )
  );

  loadFlightById = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketsActions.loadFlightById),
      switchMap((a) => this.flightService.findById(a.id)),
      map((flight) => ticketsActions.flightLoaded({ flight }))
    )
  );

  saveFlight = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ticketsActions.saveFlight),
        switchMap((a) => this.flightService.save(a.flight)),
        tap(() => {
          this.snackBar.open('Flight successfully saved!');
        }),
        catchError((err) => {
          this.snackBar.open('Error saving Flight!');
          return throwError(() => err);
        })
      ),
    {
      dispatch: false,
    }
  );
}
