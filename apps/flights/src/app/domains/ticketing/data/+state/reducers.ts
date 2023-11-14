import { createFeature, createReducer, on } from '@ngrx/store';
import { Flight } from '../flight';
import { ticketingActions } from './actions';

export interface TicketState {
  id: number;
  price: number;
}

export interface PassengerState {
  id: number;
  firstName: string;
  lastName: string;
  ticketIds: number[];
}

export interface TicketingState {
  flights: Flight[];
  skip: number[];

  passengerIds: number[];
  passengers: Record<number, PassengerState>;
  tickets: Record<number, TicketState>;

  basket: unknown;
  stats: unknown;
  from: unknown;
  to: unknown;
}

export const initTicketingState: TicketingState = {
  passengerIds: [7, 8],
  passengers: {
    7: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      ticketIds: [11],
    },
    8: {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      ticketIds: [11, 12],
    },
  },
  tickets: {
    11: { id: 11, price: 400 },
    12: { id: 11, price: 300 },
  },
  flights: [],
  skip: [1176],
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
