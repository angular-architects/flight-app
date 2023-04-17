import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../flight-booking/flight-search/flight.service';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  interval,
  map,
  of,
  startWith,
  switchMap,
  tap,
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

  flights$ = null;

  load(airport: string): Observable<Flight[]> {
    return this.flightService.find(airport, '');
  }
}
