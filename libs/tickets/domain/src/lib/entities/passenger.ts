import { FlightTicket } from './flight-ticket';

export interface Passenger {
  id: number;
  firstName: string;
  lastName: string;
  tickets?: FlightTicket[];
}
