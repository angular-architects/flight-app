import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { withResource } from '@angular-architects/ngrx-toolkit';
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
  withProps(() => ({
    _flightService: inject(FlightService),
  })),
  withResource((store) => ({
    flights: store._flightService.findResource(
      store.filter.from,
      store.filter.to
    ),
  })),
  withComputed((store) => ({
    selected: computed(() =>
      store.flightsValue().filter((f) => store.basket()[f.id])
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
