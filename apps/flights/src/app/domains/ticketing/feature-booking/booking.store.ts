import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  entityConfig,
  setAllEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { addMinutes } from 'date-fns';
import { debounceTime, filter, pipe, switchMap } from 'rxjs';
import { Flight, FlightService } from '../data';

export type Criteria = {
  from: string;
  to: string;
  urgent: boolean;
};

export interface BookingState {
  filter: Criteria;
  basket: Record<number, boolean>;
}

export const initialBookingState: BookingState = {
  filter: {
    from: 'Graz',
    to: 'Hamburg',
    urgent: false,
  },
  basket: {
    3: true,
    5: true,
  },
};

export const flightEntity = entityConfig({
  entity: type<Flight>(),
  collection: 'flight',
});

export const BookingStore = signalStore(
  { providedIn: 'root' },
  // State
  withState(initialBookingState),
  withEntities(flightEntity),
  withProps(() => ({
    flightService: inject(FlightService),
  })),
  withComputed(({ basket, flightEntities }) => ({
    selectedFlights: computed(() =>
      flightEntities().filter((f) => basket()[f.id])
    ),
  })),
  // Updaters
  withMethods((store) => ({
    setFilter: (filter: Criteria) => patchState(store, { filter }),
    updateBasket: (flightId: number, selected: boolean) =>
      patchState(store, ({ basket }) => ({
        basket: {
          ...basket,
          [flightId]: selected,
        },
      })),
    setFlights: (flights: Flight[]) =>
      patchState(store, setAllEntities(flights, flightEntity)),
    addFlightDelay: (flight: Flight, delayMin = 15) =>
      patchState(
        store,
        updateEntity(
          {
            id: flight.id,
            changes: {
              date: addMinutes(new Date(flight.date), delayMin).toISOString(),
              delayed: true,
            },
          },
          flightEntity
        )
      ),
  })),
  // Side-Effects
  withMethods((store) => ({
    loadFlights: rxMethod<Criteria>(
      pipe(
        filter((c) => c.from.length >= 3 && c.to.length >= 3),
        debounceTime(300),
        switchMap((c) => store.flightService.find(c.from, c.to, c.urgent)),
        tapResponse({
          next: (flights) => store.setFlights(flights),
          error: (errResp) => console.error('Error loading flights', errResp),
        })
      )
    ),
  })),
  withHooks({
    // onInit: ({ loadFlights, filter }) => loadFlights(filter),
    onDestroy: (store) => console.log('destroy!', store),
  })
);
