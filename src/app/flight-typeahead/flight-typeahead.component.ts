import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../flight-booking/flight-search/flight.service';
import {
  Observable,
  Subject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  interval,
  map,
  merge,
  of,
  startWith,
  switchMap,
  tap,
  withLatestFrom,
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

  loading = false;
  control = new FormControl();
  toControl = new FormControl();

  refresh$ = new Subject<{ input: string; to: string; online: boolean }>();

  online = false;
  online$ = interval(2000).pipe(
    startWith(0),
    map((_) => Math.random() < 0.5),
    distinctUntilChanged(),
    tap((value) => (this.online = value))
  );

  input$ = this.control.valueChanges.pipe(
    filter((v) => v.length >= 3),
    debounceTime(300)
  );

  to$ = this.toControl.valueChanges.pipe(
    filter((v) => v.length >= 3),
    debounceTime(300)
  );

  flightsCriteria$ = combineLatest({
    input: this.input$,
    to: this.to$,
    online: this.online$,
  });

  flights$ = merge(this.flightsCriteria$, this.refresh$).pipe(
    filter((combi) => combi.online),
    tap(() => (this.loading = true)),
    switchMap((combi) => this.load(combi.input, combi.to)),
    tap(() => (this.loading = false))
  );

  load(airport: string, airportTo: string): Observable<Flight[]> {
    return this.flightService.find(airport, airportTo);
  }

  refresh(): void {
    this.refresh$.next({
      input: this.control.value,
      to: this.toControl.value,
      online: this.online,
    });
  }
}
