import {
  patchState,
  signalMethod,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  concatOp,
  rxMutation,
  switchOp,
  withMutations,
  withResource,
} from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FlightService } from './flight-search/flight.service';
import { Flight } from '../model/flight';
import { httpMutation } from '@angular-architects/ngrx-toolkit/http-mutation';
import { of } from 'rxjs';

export const FlightDetailStore = signalStore(
  { providedIn: 'root' },
  withState({
    filter: {
      id: 0,
    },
  }),
  withProps(() => ({
    _flightService: inject(FlightService),
    _snackBar: inject(MatSnackBar),
  })),
  withResource((store) => ({
    flight: store._flightService.findResourceById(store.filter.id),
  })),

  withMutations((store) => ({
    saveFlight: store._flightService.createSaveMutation({
      onSuccess(flight: Flight) {
        patchState(store, { flightValue: flight });
        store._snackBar.open('Flight saved', 'OK');
      },
      onError(error: unknown) {
        store._snackBar.open('Error saving flight!', 'OK');
        console.error(error);
      },
    }),
  })),

  withMethods((store) => ({
    updateFilter: signalMethod((id: number) => {
      if (id !== store.filter.id()) {
        patchState(store, {
          filter: {
            id,
          },
        });
      }
    }),
  }))
);
