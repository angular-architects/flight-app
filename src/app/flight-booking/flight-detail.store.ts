import {
  patchState,
  signalMethod,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { withMutations, withResource } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FlightService } from './flight-search/flight.service';
import { Flight } from '../model/flight';
import { httpMutation } from '@angular-architects/ngrx-toolkit/http-mutation';

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

  // TODO: Add withMutations

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
