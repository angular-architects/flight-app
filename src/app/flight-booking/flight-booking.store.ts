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

// TODO: Add withProps
// TODO: Add withResource

export const FlightBookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    filter: {
      from: 'Graz',
      to: 'Paris',
    },
    basket: {} as Record<number, boolean>,
  }),
  withMethods((store) => ({
    updateFilter: (filter: FlightFilter) => {
      const { from, to } = store.filter();
      if (filter.from !== from || filter.to !== to) {
        // TODO: patchState
      }
    },
    updateBasket(id: number, selected: boolean) {
      // TODO: patchState
    },
  }))
);
