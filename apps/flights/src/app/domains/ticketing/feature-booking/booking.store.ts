import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { withDevtools, withResource } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { Criteria, FlightService } from '../data';

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    from: 'Graz',
    to: 'London',
    basket: {} as Record<number, boolean>,
    delayInMinutes: 0,
  }),
  withComputed((store) => ({
    // Shape needed for creating the resource
    filter: computed(() => ({
      from: store.from(),
      to: store.to(),
    })),
  })),
  withProps(() => ({
    _flightService: inject(FlightService),
  })),
  withResource((store) => ({
    flights: store._flightService.createResource(store.filter),
  })),
  withMethods((store) => ({
    updateFilter(filter: Criteria) {
      patchState(store, filter);
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
