import { type } from '@ngrx/signals';
import { eventGroup } from '@ngrx/signals/events';
import { Criteria } from './booking.store';
import { Flight } from '../data';

export const flightEvents = eventGroup({
  source: 'Flight',
  events: {
    flightFilterChanged: type<Criteria>(),
    basketUpdated: type<{ flightId: number; selected: boolean }>(),
    flightDelayTriggered: type<{ flight: Flight; delayMin?: number }>(),
    flightsChanged: type<Flight[]>(),
    flightsChangedError: type<{ error: unknown }>(),
    flightSearchTriggered: type<void>(),
  },
});
