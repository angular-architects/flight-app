import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Flight } from '../entities/flight';

export const ticketsActions = createActionGroup({
  source: 'tickets',
  events: {
    'flights loaded': props<{ flights: Flight[] }>(),
    'update flight': props<{ flight: Flight }>(),
    'load flights': props<{ from: string; to: string }>(),
    'load flight by id': props<{ id: string }>(),
    'flight loaded': props<{ flight: Flight }>(),
    'save flight': props<{ flight: Flight }>(),
    'clear flights': emptyProps(),
  },
});
