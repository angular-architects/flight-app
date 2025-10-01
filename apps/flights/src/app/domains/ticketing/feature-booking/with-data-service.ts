import { withResource } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { FlightService, Criteria } from '@demo/ticketing/data';
import { delayFirstFlight } from '@demo/ticketing/feature-booking/delay-first-flight';
import {
  patchState,
  signalMethod,
  signalStoreFeature,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

export function withDataService() {
  return signalStoreFeature(
    withState({
      from: 'Graz',
      to: 'New',
      basket: {} as Record<number, boolean>,
      delayInMin: 0,
    }),
    withComputed((store) => ({
      filter: computed(() => ({
        from: store.from(),
        to: store.to(),
      })),
    })),
    withProps((_store) => ({
      _flightService: inject(FlightService),
    })),
    withResource((store) => ({
      flights: store._flightService.createResource(store.filter),
    })),
    withComputed((store) => ({
      selected: computed(() =>
        store.flightsValue().filter((f) => store.basket()[f.id])
      ),
      flightsWithDelays: computed(() =>
        delayFirstFlight(store.flightsValue(), store.delayInMin())
      ),
    })),
    withMethods((store) => ({
      reload(): void {
        store._flightsReload();
      },
      updateFilter: signalMethod((filter: Criteria): void => {
        patchState(store, filter);
      }),
      updateBasket(flightId: number, selected: boolean): void {
        patchState(store, (state) => ({
          basket: {
            ...state.basket,
            [flightId]: selected,
          },
        }));
      },
      delay(): void {
        patchState(store, (state) => ({
          delayInMin: state.delayInMin + 15,
        }));
      },
    }))
  );
}
