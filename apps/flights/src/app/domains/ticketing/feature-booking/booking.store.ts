import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { withDevtools, withResource } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { Criteria, FlightService } from '../data';
import { delayFirstFlight } from './delay-first-flights';

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    from: 'Graz',
    to: 'London',
    basket: {} as Record<number, boolean>,
    delayInMinutes: 0,
  }),
  withComputed((store) => ({
    filter: computed(() => ({ from: store.from(), to: store.to() })),
  })),
  withProps(() => ({
    _flightService: inject(FlightService),
  })),
  withResource((store) => ({
    flights: store._flightService.createResource(store.filter),
  })),

  // Add computed
  withComputed((store) => ({
    selected: computed(() =>
      store.flightsValue().filter((f) => store.basket()[f.id])
    ),
    flightsWithDelay: computed(() =>
      delayFirstFlight(store.flightsValue(), store.delayInMinutes())
    ),
  })),

  withMethods((store) => ({
    updateFilter: signalMethod((filter: Criteria) => {
      patchState(store, filter);
    }),
    reload() {
      store._flightsReload();
    },
    updateBasket: (fid: number, selected: boolean) => {
      patchState(store, (state) => ({
        basket: {
          ...state.basket,
          [fid]: selected,
        },
      }));
    },
    delay(): void {
      patchState(store, (state) => ({
        delayInMinutes: state.delayInMinutes + 15,
      }));
    },
  })),
  withDevtools('booking')
);
