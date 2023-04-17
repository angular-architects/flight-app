import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../flight-booking/flight-search/flight.service';
import { Observable, debounceTime, filter, of, switchMap, tap } from 'rxjs';
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

  flights$ = this.control.valueChanges.pipe(
    filter((v) => v.length >= 3),
    debounceTime(300),
    tap(() => (this.loading = true)),
    switchMap((input) => this.load(input)),
    tap(() => (this.loading = false))
  );

  load(airport: string): Observable<Flight[]> {
    return this.flightService.find(airport, '');
  }
}
