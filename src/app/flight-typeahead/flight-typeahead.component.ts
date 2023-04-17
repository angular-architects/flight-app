import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../flight-booking/flight-search/flight.service';
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  interval,
  map,
  of,
  shareReplay,
  startWith,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-flight-typeahead',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css'],
})
export class FlightTypeaheadComponent {
  flightService = inject(FlightService);

  loading$ = new BehaviorSubject(false);
  control = new FormControl();

  online$ = interval(2000).pipe(
    startWith(-1),
    tap((v) => console.log('counter', v)),
    map((_) => Math.random() < 0.5),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: false })
  );

  input$ = this.control.valueChanges.pipe(
    filter((v) => v.length >= 3),
    debounceTime(300)
  );

  flights$ = combineLatest({
    input: this.input$,
    online: this.online$,
  }).pipe(
    filter((combi) => combi.online),
    tap(() => this.loading$.next(true)),
    switchMap((combi) => this.load(combi.input)),
    tap(() => this.loading$.next(false))
  );

  load(airport: string): Observable<Flight[]> {
    return this.flightService.find(airport, '').pipe(
      catchError((err) => {
        console.error('err', err);

        // Compensate Error:
        return of([]);

        // Alternative: Throw new error:
        // return throwError(() => err)
      })
    );
  }
}
