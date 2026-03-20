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
const validIataCodePattern = /^[A-Z0-9]{2,3}$/;

type AirlineInput = {
  readonly name: string;
  readonly iataCode?: string;
  readonly country?: string;
  readonly alliance?: string;
  readonly foundedYear?: number;
  readonly website?: string;
};

function normalizeOptionalText(value?: string): string | undefined {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

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
      rawAirline: AirlineInput
    ): { readonly ok: true } | { readonly ok: false } {
      const name = rawAirline.name.trim();
      const iataCode = normalizeOptionalText(
        rawAirline.iataCode
      )?.toUpperCase();
      const country = normalizeOptionalText(rawAirline.country);
      const alliance = normalizeOptionalText(rawAirline.alliance);
      const foundedYear = rawAirline.foundedYear;
      const website = normalizeOptionalText(rawAirline.website);

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

      if (iataCode && !validIataCodePattern.test(iataCode)) {
        patchState(state, {
          lastError: 'Der IATA-Code muss 2-3 Zeichen (A-Z, 0-9) enthalten.',
          lastSuccess: null,
        });
        return { ok: false };
      }

      if (
        foundedYear !== undefined &&
        (!Number.isInteger(foundedYear) ||
          foundedYear < 1900 ||
          foundedYear > new Date().getFullYear())
      ) {
        patchState(state, {
          lastError: 'Bitte ein gueltiges Gruendungsjahr angeben.',
          lastSuccess: null,
        });
        return { ok: false };
      }

      if (website) {
        try {
          new URL(website);
        } catch {
          patchState(state, {
            lastError: 'Bitte eine gueltige Website-URL angeben.',
            lastSuccess: null,
          });
          return { ok: false };
        }
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

      const airline = airlineSchema.parse({
        id: nextId,
        name,
        iataCode,
        country,
        alliance,
        foundedYear,
        website,
      });

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
