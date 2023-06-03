import { createSelector } from '@ngrx/store';
import { ticketingFeature } from './reducers';

export const selectFilteredFlights = createSelector(
  ticketingFeature.selectFlights,
  (flights) => flights.filter((f) => f.id % 2 === 0)
);

export const selectFilteredFlights2 = createSelector(
  ticketingFeature.selectFlights,
  ticketingFeature.selectSkip,
  (flights, skip) => flights.filter((f) => !skip.includes(f.id))
);
