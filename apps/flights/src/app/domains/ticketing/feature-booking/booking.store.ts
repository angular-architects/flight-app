import {
  patchState,
  signalStore,
  signalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { Flight, FlightService } from '../data';
import { computed, effect, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, filter, switchMap, tap } from 'rxjs';

import { tapResponse } from '@ngrx/operators';

export type Criteria = {
  from: string;
  to: string;
};

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withCrud()
  // withCrud<FlightService, Flight, Criteria>(flights),
);

export function withCrud() {
  return signalStoreFeature(
    withState({
      filter: {
        from: 'Graz',
        to: 'Hamburg',
      },
      flights: [] as Flight[],
      basket: {} as Record<number, boolean>,
      error: '',
    }),
    withProps((_store) => ({
      _flightService: inject(FlightService),
      // _flightResource: httpResource(() => ''),
    })),
    withComputed((store) => ({
      selectedFlights: computed(() =>
        store.flights().filter((f) => store.basket()[f.id])
      ),
    })),
    withMethods((store) => ({
      updateFilter(from: string, to: string): void {
        patchState(store, {
          filter: { from, to },
        });
      },

      updateBasket(flightId: number, selected: boolean): void {
        patchState(store, (state) => ({
          basket: {
            ...state.basket,
            [flightId]: selected,
          },
        }));
      },

      load(): void {
        const { from, to } = store.filter();

        store._flightService.find(from, to).subscribe({
          next: (flights) => {
            patchState(store, { flights, error: '' });
          },
          error: (err) => {
            patchState(store, { error: String(err) });
          },
        });
      },
    })),

    // withResource
    withMethods((store) => ({
      rxLoad: rxMethod<Criteria>((o$) =>
        o$.pipe(
          filter((c) => c.from.length >= 3 && c.to.length >= 3),
          debounceTime(300),
          tap((c) => patchState(store, { filter: c })),
          switchMap((c) => store._flightService.find(c.from, c.to)),
          tapResponse({
            next: (flights) => patchState(store, { flights, error: '' }),
            error: (err) => patchState(store, { error: String(err) }),
          })
        )
      ),
    })),

    withMethods(() => ({
      rxLoad: (str: string) => {
        console.log(str);
      },
    }))
  );
}
