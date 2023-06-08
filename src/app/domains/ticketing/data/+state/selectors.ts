import { createSelector } from '@ngrx/store';
import { ticketingFeature } from './reducers';

export const selectFilteredFlights2 = createSelector(
  ticketingFeature.selectFlights,
  ticketingFeature.selectSkip,
  (flights, skip) => flights.filter((f) => !skip.includes(f.id))
);
