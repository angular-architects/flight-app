import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Flight, FlightService } from '../data';
import { computed, inject } from '@angular/core';
import { addMinutes } from 'date-fns';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { withEntities, setAllEntities } from '@ngrx/signals/entities';

import { debounceTime, filter, switchMap, tap } from 'rxjs';

export type Criteria = {
  from: string;
  to: string;
};

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    from: 'Graz',
    to: 'Hamburg',
    basket: {} as Record<number, boolean>,
  }),
  withEntities({ entity: type<Flight>(), collection: 'flight' }),
  withComputed(({ basket, from, to, flightEntities }) => ({
    selectedFlights: computed(() =>
      flightEntities().filter((f) => basket()[f.id])
    ),
    criteria: computed(() => ({ from: from(), to: to() })),
  })),
  withMethods((state) => {
    const flightService = inject(FlightService);

    return {
      updateCriteria(from: string, to: string): void {
        patchState(state, { from, to });
      },
      updateBasket(flightId: number, selected: boolean): void {
        patchState(state, ({ basket }) => ({
          basket: {
            ...basket,
            [flightId]: selected,
          },
        }));
      },
      delay(): void {
        const oldFlights = state.flightEntities();
        const oldFlight = oldFlights[0];
        const oldDate = new Date(oldFlight.date);

        const newDate = addMinutes(oldDate, 15);
        const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
        const newFlights = [newFlight, ...oldFlights.slice(1)];

        patchState(state, setAllEntities(newFlights, { collection: 'flight' }));
      },
      async load(): Promise<void> {
        if (!state.from() || !state.to()) {
          return;
        }

        const flights = await flightService.findPromise(
          state.from(),
          state.to()
        );
        patchState(state, setAllEntities(flights, { collection: 'flight' }));
      },
      connectCriteria: rxMethod<Criteria>((c$) =>
        c$.pipe(
          filter((c) => c.from.length >= 3 && c.to.length >= 3),
          debounceTime(300),
          switchMap((c) => flightService.find(c.from, c.to)),
          tap((flights) =>
            patchState(state, setAllEntities(flights, { collection: 'flight' }))
          )
        )
      ),
    };
  }),
  withHooks({
    onInit({ connectCriteria, criteria }) {
      connectCriteria(criteria);
    },
    onDestroy(store) {
      console.log('destroy!', store);
    },
  })
);
