import { computed, inject } from '@angular/core';
import { mapResponse } from '@ngrx/operators';
import {
  signalStore,
  type,
  withComputed,
  withHooks,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  entityConfig,
  setAllEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { Events, on, withEffects, withReducer } from '@ngrx/signals/events';
import { addMinutes } from 'date-fns';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';
import { Flight, FlightService } from '../data';
import { flightEvents } from './flight.events';

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
    events: inject(Events),
  })),
  withComputed(({ basket, flightEntities }) => ({
    selectedFlights: computed(() =>
      flightEntities().filter((f) => basket()[f.id])
    ),
  })),
  // Updater
  withReducer(
    on(flightEvents.flightFilterChanged, ({ payload: filter }) => ({ filter })),
    on(flightEvents.flightsChanged, ({ payload: flights }) =>
      setAllEntities(flights, flightEntity)
    ),
    on(
      flightEvents.basketUpdated,
      ({ payload: { flightId: id, selected } }, { basket }) => ({
        basket: {
          ...basket,
          [id]: selected,
        },
      })
    ),
    on(flightEvents.flightDelayTriggered, ({ payload: { flight, delayMin } }) =>
      updateEntity(
        {
          id: flight.id,
          changes: {
            date: addMinutes(
              new Date(flight.date),
              delayMin || 15
            ).toISOString(),
            delayed: true,
          },
        },
        flightEntity
      )
    )
  ),
  // Side-Effects
  withEffects((store) => ({
    loadFlights$: store.events.on(flightEvents.flightSearchTriggered).pipe(
      map(() => store.filter()),
      filter((c) => c.from.length >= 3 && c.to.length >= 3),
      debounceTime(300),
      switchMap((c) => store.flightService.find(c.from, c.to, c.urgent)),
      tap(() => console.log('Flux!')),
      mapResponse({
        next: (flights) => flightEvents.flightsChanged(flights),
        error: (errResp) =>
          flightEvents.flightsChangedError({ error: errResp }),
      })
    ),
  })),
  withHooks({
    onDestroy: (store) => console.log('destroy!', store),
  })
);
