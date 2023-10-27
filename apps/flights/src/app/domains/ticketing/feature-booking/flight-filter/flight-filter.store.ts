import {
  immutableConfig,
  patchState,
  rxMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { FlightFilter, initialFlightFilter } from '../../data';
import { pipe, tap } from 'rxjs';
import { computed } from '@angular/core';

export type LocalState = {
  filters: FlightFilter[];
  inputFilter: FlightFilter;
  selectedFilter: FlightFilter;
};

export const initialLocalState: LocalState = {
  filters: [],
  inputFilter: initialFlightFilter,
  selectedFilter: initialFlightFilter,
};

export const FlightFilterStore = signalStore(
  // State
  withState<LocalState>(initialLocalState),
  // Selectors
  withComputed(({ filters }) => ({
    latestFilter: computed(
      () => filters().slice(-1)[0],
      // Patch for Angular 16, not necessary in Angular 17 👇
      immutableConfig
    ),
  })),
  // Updater
  withMethods((store) => ({
    updateInputFilter: (filter: FlightFilter) =>
      patchState(store, () => ({
        inputFilter: filter,
      })),
    updateSelectedFilter: (filter: FlightFilter) =>
      patchState(store, () => ({
        selectedFilter: filter,
      })),
    addFilter: (filter: FlightFilter) =>
      patchState(store, (state) => ({
        filters: [
          ...state.filters.filter(
            (f) => !(f.from === filter.from && f.to === filter.to)
          ),
          filter,
        ],
      })),
  })),
  // Effects
  withMethods(
    ({ inputFilter, addFilter, updateInputFilter, updateSelectedFilter }) => ({
      triggerSearch: () => {
        addFilter(inputFilter());
      },
      initInputFilterUpdate: rxMethod<Partial<FlightFilter>>(
        pipe(tap((filter) => updateInputFilter(filter as FlightFilter)))
      ),
      initSelectedFilterUpdate: rxMethod<FlightFilter>(
        pipe(tap((filter) => updateSelectedFilter(filter)))
      ),
    })
  )
);
