import {
  patchState,
  signalMethod,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { withResource } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { Flight, FlightService } from '../data';
import { addMinutes } from 'date-fns';

export type Filter = { from: string; to: string };

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    from: 'Graz',
    to: 'London',
    basket: {} as Record<number, boolean>,
  }),
  withProps(() => ({
    _flightService: inject(FlightService),
  })),
  withResource((store) => ({
    flights: store._flightService.findResource(store.from, store.to),
  })),
  withMethods((store) => ({
    updateFilter: signalMethod((filter: Filter) => {
      patchState(store, filter);
    }),
    updateBasket: (fid: number, selected: boolean) => {
      patchState(store, (state) => ({
        basket: {
          ...state.basket,
          [fid]: selected,
        },
      }));
    },
    reload() {
      store._flightsReload();
    },
    delay(): void {
      const oldFlights = store.flightsValue();
      const oldFlight = oldFlights[0];
      const oldDate = new Date(oldFlight.date);

      const newDate = addMinutes(oldDate, 15);
      const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
      const newFlights = [newFlight, ...oldFlights.slice(1)];

      patchState(store, { flightsValue: newFlights });
    },
  }))
);
