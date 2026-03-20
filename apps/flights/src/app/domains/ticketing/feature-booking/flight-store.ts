import { computed, inject, Injectable, signal } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
  withFeature,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  withDevtools,
  withStorageSync,
} from '@angular-architects/ngrx-toolkit';
import { FlightService } from '../data';
import { debounceTime, pipe, tap } from 'rxjs';
import { withFavourites } from '@demo/shared/util-signals/with-favourites';
import { withFlightsMethods } from './with-flights-methods';

export const FlightStore = signalStore(
  { providedIn: 'root' },
  withDevtools('flights'),
  // withStorageSync('flights'),
  withState({
    searchParams: {
      from: 'Zürich',
      to: 'Wien',
    },
    refreshInterval: 5_000,
  }),
  withProps((state) => {
    const _flights = inject(FlightService).createResource(state.searchParams);
    return {
      _flights,
      flights: _flights.asReadonly(),
    };
  }),
  withFeature((state) =>
    withFavourites(() =>
      state.flights.hasValue() ? state.flights.value() : []
    )
  ),
  withComputed((state) => ({
    prettySearch: () =>
      `${state.searchParams.from()} nach ${state.searchParams.to()}`,
    flightsCount: () =>
      state.flights.hasValue() ? state.flights.value().length : 0,
  })),
  withFlightsMethods()
);

@Injectable({ providedIn: 'root' })
export class FlightStoreSelbstgemacht {
  private readonly flightService = inject(FlightService);

  // state
  private readonly _searchParams = signal<{ from: string; to: string }>({
    from: 'Zürich',
    to: 'Wien',
  });
  private _refreshInterval = signal(5_000);

  // extra
  private readonly _flights = this.flightService.createResource(
    this._searchParams
  );

  // slices
  readonly searchParams = this._searchParams.asReadonly();
  readonly refreshInterval = this._refreshInterval.asReadonly();

  // computeds
  readonly prettySearch = computed(
    () => `${this.searchParams().from} nach ${this.searchParams().to}`
  );
  readonly flightsCount = computed(() =>
    this._flights.hasValue() ? this._flights.value().length : 0
  );
  readonly flights = this._flights.asReadonly();

  // methods
  setSearchInterval(interval: number) {
    this._refreshInterval.set(interval);
  }

  search(from: string, to: string) {
    this._searchParams.set({ from, to });
  }

  reload() {
    this._flights.reload();
  }

  reverseSearch() {
    this._searchParams.update(({ from, to }) => ({ from: to, to: from }));
  }
}
