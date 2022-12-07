import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

const DEBUG = false;

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    if (DEBUG) {
      return inject(DummyFlightService);
    } else {
      return inject(DefaultFlightService);
    }
  },
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
