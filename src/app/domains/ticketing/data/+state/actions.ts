import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Flight } from '../flight';

export const ticketingActions = createActionGroup({
  source: 'ticketing',
  events: {
    // event, command, document
    'flights loaded': props<{ flights: Flight[] }>(),
    // event

    'update flight': props<{ flight: Flight }>(),
    // command

    'clear flights': emptyProps(),
  },
});
