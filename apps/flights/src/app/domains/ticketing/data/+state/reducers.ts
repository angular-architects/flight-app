import { createFeature, createReducer, on } from '@ngrx/store';
import { Flight } from '../flight';
import { ticketingActions } from './actions';

export interface TicketingState {
  flights: Flight[];
  basket: unknown;
  stats: unknown;
  from: unknown;
  to: unknown;
}

export const initTicketingState: TicketingState = {
  flights: [],
  basket: {},
  from: '',
  to: '',
  stats: {},
};

export const ticketingFeature = createFeature({
  name: 'ticketing',
  reducer: createReducer(
    initTicketingState,
    on(ticketingActions.flightsLoaded, (state, action) => {
      const flights = action.flights;
      // state.flights = flights;
      return {
        ...state,
        flights,
      };
    }),

    on(ticketingActions.updateFlight, (state, action) => {
      const flight = action.flight;
      const flights = state.flights.map((f) =>
        f.id === flight.id ? flight : f
      );
      return {
        ...state,
        flights,
      };
    }),

    on(ticketingActions.clearFlights, (state) => {
      return {
        ...state,
        flights: [],
      };
    })
  ),
});
