import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { FlightService } from './flight-search/flight.service';

export type FlightFilter = {
  from: string;
  to: string;
};

export const flightBookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    filter: {
      from: 'Graz',
      to: 'Paris',
    },
    basket: {} as Record<number, boolean>,
  }),

  // TODO: Add withProps

  // TODO: Add withResource

  // TODO: Add withComputed

  withMethods((store) => ({
    updateFilter: signalMethod((filter: FlightFilter) => {
      const { from, to } = store.filter();
      if (filter.from !== from || filter.to !== to) {
        patchState(store, {
          filter,
        });
      }
    }),
    updateBasket(id: number, selected: boolean) {
      patchState(store, (state) => ({
        basket: {
          ...state.basket,
          [id]: selected,
        },
      }));
    },
  }))
);
