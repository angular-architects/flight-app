import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Flight } from '../entities/flight';

export const ticketsActions = createActionGroup({
  source: 'tickets',
  events: {
    'flights loaded': props<{ flights: Flight[] }>(),
    'update flight': props<{ flight: Flight }>(),
    'load flights': props<{ from: string; to: string }>(),
    'clear flights': emptyProps(),
  },
});