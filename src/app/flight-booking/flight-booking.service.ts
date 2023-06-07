import { Injectable, inject, signal } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from './flight-search/flight.service';

@Injectable({
  providedIn: 'root',
})
export class FlightBookingService {
  private flightService = inject(FlightService);

  private _flights = signal<Flight[]>([]);
  readonly flights = this._flights.asReadonly();

  load(from: string, to: string): void {
    this.flightService.find(from, to).subscribe((flights) => {
      this._flights.set(flights);
    });
  }
}
