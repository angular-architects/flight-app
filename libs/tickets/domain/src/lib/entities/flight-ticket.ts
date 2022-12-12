import { Flight } from './flight';
import { Passenger } from './passenger';

export interface FlightTicket {
  id: number;
  price: number;
  passenger?: Passenger;
  flight?: Flight;
}
