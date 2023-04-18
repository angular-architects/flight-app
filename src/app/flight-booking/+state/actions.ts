import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Flight } from 'src/app/model/flight';

export const ticketsActions = createActionGroup({
  source: 'tickets',
  events: {
    'flights loaded': props<{ flights: Flight[] }>(),
    'update flight': props<{ flight: Flight }>(),
    'clear flights': emptyProps(),
  },
});
