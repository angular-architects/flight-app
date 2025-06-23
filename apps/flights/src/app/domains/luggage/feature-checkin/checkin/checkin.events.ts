import { Luggage } from '@demo/luggage/data';
import { type } from '@ngrx/signals';
import { eventGroup } from '@ngrx/signals/events';

export const checkinEvents = eventGroup({
  source: 'checkin feature',
  events: {
    loadLuggage: type<{ passengerId: number }>(),
    loadLuggageSuccess: type<{ luggage: Luggage[] }>(),
    loadLuggageError: type<{ error: string }>(),
  },
});
