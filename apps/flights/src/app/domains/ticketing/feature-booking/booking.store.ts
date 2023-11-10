import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Flight, FlightService } from '../data';
import { computed, inject } from '@angular/core';
import { addMinutes } from 'date-fns';

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    from: 'Graz',
    to: 'Hamburg',
    basket: {} as Record<number, boolean>,
    flights: [] as Flight[],
  }),
  withComputed(({ flights, basket }) => ({
    selectedFlights: computed(() => flights().filter((f) => basket()[f.id])),
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
        const oldFlights = state.flights();
        const oldFlight = oldFlights[0];
        const oldDate = new Date(oldFlight.date);

        const newDate = addMinutes(oldDate, 15);
        const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
        const newFlights = [newFlight, ...oldFlights.slice(1)];

        patchState(state, { flights: newFlights });
      },
      async load(): Promise<void> {
        if (!state.from() || !state.to()) {
          return;
        }

        const flights = await flightService.findPromise(
          state.from(),
          state.to()
        );
        patchState(state, { flights });
      },
    };
  }),
  withHooks({
    onInit({ load }) {
      load();
    },
    onDestroy(store) {
      console.log('destroy!', store);
    },
  })
);
