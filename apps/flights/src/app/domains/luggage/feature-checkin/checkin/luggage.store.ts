import {
  patchState,
  payload,
  withDevtools,
  withRedux,
} from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { Luggage, LuggageService } from '@demo/luggage/data';
import { signalStore, withState } from '@ngrx/signals';
import { switchMap, tap } from 'rxjs';

export const LuggageStore = signalStore(
  { providedIn: 'root' },
  withState({ luggage: [] as Luggage[] }),
  withRedux({
    actions: {
      load: payload<{ passengerId: number }>(),
      loaded: payload<{ luggage: Luggage[] }>(),
    },
    reducer(actions, on) {
      on(actions.loaded, ({ luggage }, state) => {
        patchState(state, 'flights loaded', { luggage });
      });
    },
    effects(actions, create) {
      const luggageService = inject(LuggageService);
      return {
        load$: create(actions.load).pipe(
          switchMap((a) => luggageService.load(a.passengerId)),
          tap((luggage) => actions.loaded({ luggage }))
        ),
      };
    },
  }),
  withDevtools('checkin')
);
