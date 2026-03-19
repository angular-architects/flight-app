import { computed, inject, Injectable, signal } from '@angular/core';
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
import { FlightService } from '../data';
import { debounceTime, pipe, tap } from 'rxjs';

export const FlightStore = signalStore(
  { providedIn: 'root' },
  withState({
    searchParams: {
      from: 'Zürich',
      to: 'Wien',
    },
    refreshInterval: 5_000,
  }),
  withProps((state) => {
    const _flights = inject(FlightService).createResource(
      state.searchParams,
      state.refreshInterval()
    );
    return {
      _flights,
      flights: _flights.asReadonly(),
    };
  }),
  withComputed((state) => ({
    prettySearch: () =>
      `${state.searchParams.from()} nach ${state.searchParams.to()}`,
    flightsCount: () =>
      state.flights.hasValue() ? state.flights.value().length : 0,
  })),
  withMethods((state) => ({
    setSearchInterval(refreshInterval: number) {
      patchState(state, { refreshInterval });
    },

    search: rxMethod<{ from: string; to: string }>(
      pipe(
        debounceTime(700),
        tap(({ from, to }) => patchState(state, { searchParams: { from, to } }))
      )
    ),

    reload() {
      state._flights.reload();
    },

    reverseSearch() {
      patchState(state, ({ searchParams: { from, to } }) => ({
        searchParams: { from: to, to: from },
      }));
    },
  }))
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
    this._searchParams,
    this._refreshInterval()
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
