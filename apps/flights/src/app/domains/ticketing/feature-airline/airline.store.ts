import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  withDevtools,
  withStorageSync,
} from '@angular-architects/ngrx-toolkit';
import { Airline, airlineSchema } from '@demo/ticketing/data';

type AirlineState = {
  readonly airlines: Airline[];
  readonly lastError: string | null;
  readonly lastSuccess: string | null;
};

const initialState: AirlineState = {
  airlines: [],
  lastError: null,
  lastSuccess: null,
};

const validNamePattern = /^[A-Za-z ]+$/;

export const AirlineStore = signalStore(
  { providedIn: 'root' },
  withDevtools('airlines'),
  withStorageSync('airlines'),
  withState(initialState),
  withComputed((state) => ({
    airlinesCount: computed(() => state.airlines().length),
    airlinesSorted: computed(() =>
      [...state.airlines()].sort((a, b) => a.name.localeCompare(b.name))
    ),
  })),
  withMethods((state) => ({
    addAirline(
      rawName: string
    ): { readonly ok: true } | { readonly ok: false } {
      const name = rawName.trim();

      if (!name) {
        patchState(state, {
          lastError: 'Bitte einen Airline-Namen eingeben.',
          lastSuccess: null,
        });
        return { ok: false };
      }

      if (!validNamePattern.test(name)) {
        patchState(state, {
          lastError: 'Nur Buchstaben und Leerzeichen sind erlaubt.',
          lastSuccess: null,
        });
        return { ok: false };
      }

      const hasDuplicate = state
        .airlines()
        .some((airline) => airline.name.toLowerCase() === name.toLowerCase());

      if (hasDuplicate) {
        patchState(state, {
          lastError: 'Diese Airline existiert bereits.',
          lastSuccess: null,
        });
        return { ok: false };
      }

      const nextId =
        state
          .airlines()
          .reduce((maxId, airline) => Math.max(maxId, airline.id), 0) + 1;

      const airline = airlineSchema.parse({ id: nextId, name });

      patchState(state, {
        airlines: [...state.airlines(), airline],
        lastError: null,
        lastSuccess: `"${airline.name}" wurde angelegt.`,
      });

      return { ok: true };
    },

    removeAirline(id: number): void {
      const removed = state.airlines().find((airline) => airline.id === id);
      patchState(state, {
        airlines: state.airlines().filter((airline) => airline.id !== id),
        lastError: null,
        lastSuccess: removed
          ? `"${removed.name}" wurde entfernt.`
          : 'Airline wurde entfernt.',
      });
    },

    clearFeedback(): void {
      patchState(state, { lastError: null, lastSuccess: null });
    },
  }))
);
