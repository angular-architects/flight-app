import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { Criteria, Flight, FlightService } from '../data';
import { delayFirstFlight } from './delay-first-flights';
import { switchMap, tap } from 'rxjs';

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    from: 'Graz',
    to: 'London',
    flights: [] as Flight[],
    basket: {} as Record<number, boolean>,
    delayInMinutes: 0,
  }),
  withComputed((store) => ({
    filter: computed(() => ({ from: store.from(), to: store.to() })),
  })),
  withProps(() => ({
    _flightService: inject(FlightService),
  })),
  withComputed((store) => ({
    selected: computed(() =>
      store.flights().filter((f) => store.basket()[f.id])
    ),
    flightsWithDelay: computed(() =>
      delayFirstFlight(store.flights(), store.delayInMinutes())
    ),
  })),
  withMethods((store) => ({
    // rxMethod
    // Please note, for the sake of brevity, we skipped
    // error handling (e.g. via catchError) here
    updateFilter: rxMethod<Criteria>((filter$) =>
      filter$.pipe(
        tap((filter) => patchState(store, filter)),
        switchMap((filter) =>
          store._flightService.find(filter.from, filter.to)
        ),
        tap((flights) => patchState(store, { flights }))
      )
    ),
    reload() {
      this.updateFilter(store.filter());
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
