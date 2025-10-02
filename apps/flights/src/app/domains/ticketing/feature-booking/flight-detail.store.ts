import { withMutations, withResource } from '@angular-architects/ngrx-toolkit';
import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { FlightService } from '../data';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const FlightDetailStore = signalStore(
  { providedIn: 'root' },
  withState({
    id: 0,
  }),
  withProps((_store) => ({
    _flightService: inject(FlightService),
    _snackBar: inject(MatSnackBar),
  })),
  withMethods((store) => ({
    updateId(id: number): void {
      patchState(store, { id });
    },
  })),
  withResource((store) => ({
    flight: store._flightService.findResourceById(store.id),
  })),
  withMutations((store) => ({
    saveFlight: store._flightService.createSaveFlight({
      onError: (error, params) => {
        store._snackBar.open('Error saving flight!');
        console.error('error saving flight', error, params);
      },
      onSuccess: (error, params) => {
        store._snackBar.open('Successfully saved flight!');
        console.log(error, params);
      },
    }),
  }))
);
