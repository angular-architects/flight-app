import { signalStore, withState } from '@ngrx/signals';
// import { with } from "@angular-architects/ngrx-toolkit";

export const flightBookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    filter: {
      from: 'Graz',
      to: 'Paris',
    },
    basket: {} as Record<number, boolean>,
  })
);
