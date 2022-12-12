import { createSelector } from '@ngrx/store';
import { ticketsFeature } from './reducer';

export const selectFilteredFlights = createSelector(
  ticketsFeature.selectFlights,
  ticketsFeature.selectHide,
  (flights, hide) => flights.filter((f) => !hide.includes(f.id))
);

export function selectFilteredFlightsWithParams(hide: number[]) {
  return createSelector(ticketsFeature.selectFlights, (flights) =>
    flights.filter((f) => !hide.includes(f.id))
  );
}
