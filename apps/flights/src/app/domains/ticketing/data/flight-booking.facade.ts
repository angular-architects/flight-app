import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ticketingActions } from './+state/actions';
import { selectFilteredFlights } from './+state/selectors';
import { addMinutes } from 'date-fns';

@Injectable({ providedIn: 'root' })
export class FlightBookingFacade {
  private store = inject(Store);
  readonly flights = this.store.selectSignal(selectFilteredFlights);

  async load(from: string, to: string): Promise<void> {
    this.store.dispatch(ticketingActions.loadFlights({ from, to }));
  }

  delay(): void {
    const oldDate = new Date(this.flights()[0].date);
    const date = addMinutes(oldDate, 15);
    const flight = {
      ...this.flights()[0],
      date: date.toISOString(),
    };
    this.store.dispatch(ticketingActions.updateFlight({ flight: flight }));
  }
}
