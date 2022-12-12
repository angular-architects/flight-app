import { createSelector } from '@ngrx/store';
import { FlightTicket } from '../entities/flight-ticket';
import { Passenger } from '../entities/passenger';
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

export const selectTicketsWithPassengers = createSelector(
  ticketsFeature.selectFlightTicketIds,
  ticketsFeature.selectFlightTickets,
  ticketsFeature.selectPassengers,
  (ids, tickets, passengers) =>
    ids.map((id) => {
      const ticket = tickets[id];
      const passenger = passengers[ticket.passengerId];
      return { ...ticket, passenger } as FlightTicket;
    })
);

export const selectPassengersWithTickets = createSelector(
  ticketsFeature.selectPassengerIds,
  ticketsFeature.selectPassengers,
  ticketsFeature.selectFlightTickets,
  (ids, passengers, tickets) =>
    ids.map((id) => {
      const passenger = passengers[id];
      const ticketList = passenger.ticketIds.map((id) => tickets[id]);
      return { ...passenger, tickets: ticketList } as Passenger;
    })
);
