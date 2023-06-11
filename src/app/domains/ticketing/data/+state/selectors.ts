import { createSelector } from '@ngrx/store';
import { PassengerState, TicketState, ticketingFeature } from './reducers';

export const selectFilteredFlights = createSelector(
  ticketingFeature.selectFlights,
  ticketingFeature.selectSkip,
  (flights, skip) => flights.filter((f) => !skip.includes(f.id))
);

export type PassengerVM = PassengerState & {
  tickets: TicketState[];
};

export const selectPassengersWithTickets = createSelector(
  ticketingFeature.selectPassengerIds,
  ticketingFeature.selectPassengers,
  ticketingFeature.selectTickets,
  (ids, ps, ts) =>
    ids.map((id) => ({
      ...ps[id],
      tickets: ps[id].ticketIds.map((id) => ts[id]),
    })) as PassengerVM[]
);
