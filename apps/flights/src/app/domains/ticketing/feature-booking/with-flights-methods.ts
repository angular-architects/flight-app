import { Resource, ResourceRef } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, filter, pipe, tap } from 'rxjs';

export function withFlightsMethods<_>() {
  return signalStoreFeature(
    type<{
      state: {
        searchParams: { from: string; to: string };
        refreshInterval: number;
      };
      props: { _flights: ResourceRef<unknown> };
    }>(),
    withMethods((state) => ({
      setSearchInterval(refreshInterval: number) {
        patchState(state, { refreshInterval });
      },

      search: rxMethod<{ from: string; to: string } | undefined>(
        pipe(
          debounceTime(700),
          filter(Boolean),
          filter(
            ({ from, to }) =>
              !(
                state.searchParams.from() === from &&
                state.searchParams.to() === to
              )
          ),
          tap(({ from, to }) =>
            patchState(state, { searchParams: { from, to } })
          )
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
}
