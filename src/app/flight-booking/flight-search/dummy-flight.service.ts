import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../model/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DummyFlightService implements FlightService {
  findById(id: string): Observable<Flight> {
    const date = new Date().toISOString();
    return of({
      id: parseInt(id),
      from: 'here',
      to: 'there',
      date,
      delayed: false,
    });
  }
  find(from: string, to: string): Observable<Flight[]> {
    const date = new Date().toISOString();
    return of([
      { id: 7, from, to, date, delayed: false },
      { id: 8, from: 'here', to: 'there', date, delayed: false },
      { id: 9, from: 'here', to: 'there', date, delayed: false },
    ]);
  }
}
