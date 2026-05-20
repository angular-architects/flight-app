import { httpResource } from '@angular/common/http';
import {
  patchState,
  signalStore,
  signalStoreFeature,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { on, withReducer } from '@ngrx/signals/events';
import { flightEvents } from './flight-search/flight-search.component';
import { parseFlights } from './model/flight';

export function withFavourites() {
  return signalStoreFeature(
    withState({ favouriteIds: [] as number[] }),
    withMethods((state) => ({
      addFavourite(id: number) {
        patchState(state, ({ favouriteIds }) => ({
          favouriteIds: [...favouriteIds, id],
        }));
      },
      removeFavourite(id: number) {
        patchState(state, ({ favouriteIds }) => ({
          favouriteIds: favouriteIds.filter((fid) => fid !== id),
        }));
      },
    })),
  );
}

export function withLocalStorage() {
  return signalStoreFeature(
    withMethods(() => ({
      syncToLocalStorage: () => {},
      loadFromLocalStorage: () => {},
    })),
  );
}

const initialState = {
  currentSearch: {
    from: 'Wien',
    to: 'Berlin',
  },
  lastUpdated: new Date(),
  favouredAirline: 'Austrian',
};

export const FlightStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),
  withReducer(
    on(flightEvents.search, ({ payload: { from, to } }) => ({
      currentSearch: { from, to },
    })),
  ),
  withFavourites(),
  withProps((state) => {
    const flightResource = httpResource(
      () => ({
        params: state.currentSearch(),
        url: 'https://demo.angulararchitects.io/api/flight',
      }),
      {
        parse: parseFlights,
      },
    );
    return {
      _flights: flightResource,
      flights: flightResource.asReadonly(),
    };
  }),
  withMethods((state) => ({
    search(from: string, to: string) {
      patchState(state, { currentSearch: { from, to } });
    },
    reload() {
      state._flights.reload();
    },
    reset() {
      patchState(state, initialState);
    },
  })),
);
