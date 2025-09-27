import { addMinutes } from 'date-fns';
import { Flight } from '../data';

export function delayFirstFlight(flights: Flight[]): Flight[] {
  const oldFlight = flights[0];
  const oldDate = new Date(oldFlight.date);

  const newDate = addMinutes(oldDate, 15);
  const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };

  return [newFlight, ...flights.slice(1)];
}
