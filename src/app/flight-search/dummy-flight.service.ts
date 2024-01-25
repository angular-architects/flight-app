import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { Observable, of } from 'rxjs';
import { Flight } from '../model/flight';

@Injectable({ providedIn: 'root' })
export class DummyFlightService implements FlightService {
  find(from: string, to: string): Observable<Flight[]> {
    const date = new Date().toISOString();
    const delayed = false;

    return of([
      { id: 0, from, to, date, delayed },
      { id: 1, from, to, date, delayed },
      { id: 2, from, to, date, delayed },
      { id: 3, from, to, date, delayed },
    ]);
  }
}
