import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ticketingActions } from './+state/actions';
import { selectFilteredFlights } from './+state/selectors';
import { addMinutes } from '@demo/shared/util-common';

@Injectable({ providedIn: 'root' })
export class FlightBookingFacade {
  private store = inject(Store);
  readonly flights = this.store.selectSignal(selectFilteredFlights);

  async load(from: string, to: string): Promise<void> {
    this.store.dispatch(ticketingActions.loadFlights({ from, to }));
  }

  delay(): void {
    const date = addMinutes(this.flights()[0].date, 15);
    const flight = {
      ...this.flights()[0],
      date,
    };
    this.store.dispatch(ticketingActions.updateFlight({ flight }));
  }
}
