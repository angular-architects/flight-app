import { signalStore } from '@ngrx/signals';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { withDataService } from './with-data-service';

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withDataService(),
  // withDataService({ service: FlightService }),
  withDevtools('booking')
);
