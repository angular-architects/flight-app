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
import { computed, effect, inject } from '@angular/core';
import { addMinutes } from 'date-fns';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  withEntities,
  setAllEntities,
  setEntities,
} from '@ngrx/signals/entities';
import { debounceTime, filter, switchMap, tap } from 'rxjs';
import { setLoaded, setLoading, withCallState } from '@demo/shared/util-common';

export type Criteria = {
  from: string;
  to: string;
};

export type FlightState = Flight & {
  passengerIds: number[];
};

export type Passenger = {
  id: number;
  firstName: string;
  lastName: string;
};

export type PassengerState = Passenger & {
  flightIds: number[];
};

export type FlightsWithPassengers = Flight & {
  passengers: Passenger[];
};

function toFlightState(flight: Flight): FlightState {
  return { ...flight, passengerIds: [1, 2, 3] };
}

function toFlightStateArray(flights: Flight[]): FlightState[] {
  return flights.map((f) => toFlightState(f));
}

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    from: 'Graz',
    to: 'Hamburg',
    basket: {} as Record<number, boolean>,
  }),
  withEntities({ entity: type<FlightState>(), collection: 'flight' }),
  withEntities({ entity: type<PassengerState>(), collection: 'passenger' }),
  withComputed(({ basket, from, to, flightEntities, passengerEntityMap }) => ({
    selectedFlights: computed(() =>
      flightEntities().filter((f) => basket()[f.id])
    ),
    criteria: computed(() => ({ from: from(), to: to() })),
    flightsWithPassengers: computed<FlightsWithPassengers[]>(() =>
      flightEntities().map((f) => ({
        ...f,
        passengers: f.passengerIds.map((p) => passengerEntityMap()[p]),
      }))
    ),
  })),
  withCallState({ prop: 'flights' }),
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

        patchState(
          state,
          setAllEntities(toFlightStateArray(newFlights), {
            collection: 'flight',
          })
        );
      },
      async load(): Promise<void> {
        if (!state.from() || !state.to()) {
          return;
        }

        patchState(state, setLoading('flights'));

        const flights = await flightService.findPromise(
          state.from(),
          state.to()
        );

        patchState(
          state,
          setAllEntities(toFlightStateArray(flights), { collection: 'flight' }),
          setLoaded('flights')
        );
      },
      connectCriteria: rxMethod<Criteria>((c$) =>
        c$.pipe(
          filter((c) => c.from.length >= 3 && c.to.length >= 3),
          debounceTime(300),
          tap(() => patchState(state, setLoading('flights'))),
          switchMap((c) => flightService.find(c.from, c.to)),
          tap((flights) =>
            patchState(
              state,
              setAllEntities(toFlightStateArray(flights), {
                collection: 'flight',
              }),
              setLoaded('flights')
            )
          )
        )
      ),
    };
  }),
  withHooks({
    onInit(state) {
      const { connectCriteria, criteria, flightsWithPassengers } = state;
      connectCriteria(criteria);
      patchState(
        state,
        setEntities(
          [
            {
              id: 1,
              firstName: 'Max',
              lastName: 'Muster',
              flightIds: [10, 20, 30],
            },
            {
              id: 2,
              firstName: 'Susi',
              lastName: 'Sorglos',
              flightIds: [10, 20, 30],
            },
            {
              id: 3,
              firstName: 'Jane',
              lastName: 'Doe',
              flightIds: [10, 20, 30],
            },
          ],
          { collection: 'passenger' }
        )
      );

      effect(() => {
        console.log('vm', flightsWithPassengers());
      });
    },
    onDestroy(store) {
      console.log('destroy!', store);
    },
  })
);
