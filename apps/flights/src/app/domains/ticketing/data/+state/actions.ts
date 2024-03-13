import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Flight } from '../flight';

export const ticketingActions = createActionGroup({
  source: 'ticketing',
  events: {
    'flights loaded': props<{ flights: Flight[] }>(),
    'load flights': props<{ from: string; to: string }>(),
    'update flight': props<{ flight: Flight }>(),
    'clear flights': emptyProps(),
    error: props<{ error: string }>(),
  },
});
