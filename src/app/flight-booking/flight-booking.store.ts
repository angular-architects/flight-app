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
import { withResource } from '@angular-architects/ngrx-toolkit';
import { rxResource } from '@angular/core/rxjs-interop';
import { httpResource } from '@angular/common/http';
import { Flight } from '../model/flight';

export type FlightFilter = {
  from: string;
  to: string;
};

// TODO: Add withProps
// TODO: Add withResource
// TODO: Add withComputed

export const FlightBookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    filter: {
      from: 'Graz',
      to: 'Paris',
    },
    basket: {} as Record<number, boolean>,
  }),

  withProps(() => ({
    _flightService: inject(FlightService),
  })),

  withResource((store) => ({
    flights: store._flightService.findResource(
      store.filter.from,
      store.filter.to
    ),
  })),

  withMethods((store) => ({
    reload() {
      store._flightsReload();
    },
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
