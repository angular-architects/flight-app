import { Injectable } from '@angular/core';
import { Luggage } from './luggage';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LuggageService {
  load(passengerId: number): Observable<Luggage[]> {
    return of([
      {
        id: 1,
        passengerId,
        weight: 4000,
        checkedIn: true,
        remarks: 'black trolly',
      },
      {
        id: 2,
        passengerId,
        weight: 7000,
        checkedIn: true,
        remarks: 'blue trolly',
      },
      {
        id: 3,
        passengerId,
        weight: 3000,
        checkedIn: true,
        remarks: 'yellow trolly',
      },
    ]);
  }
}
