import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DummyFlightService implements FlightService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findById(id: string): Observable<Flight> {
    const date = new Date().toISOString();
    return of({ id: 7, from: 'here', to: 'there', date, delayed: false });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  find(from: string, to: string): Observable<Flight[]> {
    const date = new Date().toISOString();

    return of([
      { id: 7, from: 'here', to: 'there', date, delayed: false },
      { id: 8, from: 'here', to: 'there', date, delayed: false },
      { id: 9, from: 'here', to: 'there', date, delayed: false },
    ]);
  }
}
