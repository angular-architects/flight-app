import { Injectable, inject, signal } from '@angular/core';
import { FlightService } from './flight.service';
import { Flight } from './flight';
import { addMinutes } from '@demo/shared/util-common';

@Injectable({ providedIn: 'root' })
export class FlightBookingFacade {
  private flightService = inject(FlightService);
  private _flights = signal<Flight[]>([]);
  readonly flights = this._flights.asReadonly();

  load(from: string, to: string): void {
    this.flightService.find(from, to).subscribe((flights) => {
      this._flights.set(flights);
    });
  }

  delay() {
    const date = addMinutes(this.flights()[0].date, 15);
    this._flights.update((flights) => [
      { ...flights[0], date },
      ...flights.slice(1),
    ]);
  }
}
