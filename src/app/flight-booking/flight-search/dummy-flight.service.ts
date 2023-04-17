import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../model/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DummyFlightService implements FlightService {
  find(from: string, to: string): Observable<Flight[]> {
    const date = new Date().toISOString();

    return of([
      { id: 7, from: 'Graz', to: 'Hamburg', date, delayed: false },
      { id: 8, from: 'Graz', to: 'Hamburg', date, delayed: false },
      { id: 9, from: 'Hamburg', to: 'Graz', date, delayed: false },
      { id: 10, from: 'Hamburg', to: 'Graz', date, delayed: false },
      { id: 11, from: 'London', to: 'Paris', date, delayed: false },
      { id: 12, from: 'London', to: 'Paris', date, delayed: false },
      { id: 13, from: 'Paris', to: 'London', date, delayed: false },
      { id: 14, from: 'Paris', to: 'London', date, delayed: false },
    ]);
  }

  findById(id: string): Observable<Flight> {
    throw new Error('Method not implemented.');
  }
}
