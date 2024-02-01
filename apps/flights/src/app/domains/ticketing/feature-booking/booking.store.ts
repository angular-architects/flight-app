import { patchState, signalStore, type, withMethods } from '@ngrx/signals';
import { Flight, FlightService } from '../data';
import { addMinutes } from 'date-fns';
import { withEntities, setAllEntities } from '@ngrx/signals/entities';
import { withDataService } from '@angular-architects/ngrx-toolkit';

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withEntities({ entity: type<Flight>(), collection: 'flight' }),
  withDataService({
    collection: 'flight',
    dataServiceType: FlightService,
    filter: { from: 'New York', to: 'Paris' },
  }),
  withMethods((state) => {
    return {
      delay(): void {
        const oldFlights = state.flightEntities();
        const oldFlight = oldFlights[0];
        const oldDate = new Date(oldFlight.date);

        const newDate = addMinutes(oldDate, 15);
        const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
        const newFlights = [newFlight, ...oldFlights.slice(1)];

        patchState(state, setAllEntities(newFlights, { collection: 'flight' }));
      },
    };
  })
);
