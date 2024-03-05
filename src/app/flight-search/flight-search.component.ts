import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import {
  Observable,
  catchError,
  combineLatest,
  debounceTime,
  filter,
  interval,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { addMinutes } from '../shared/add-minutes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  from = signal('London');
  to = signal('Paris');

  error = signal<string>('');
  delayInMinutes = signal(0);

  flightRoute = computed(() => this.from() + ' to ' + this.to());

  selectedFlights = computed(() =>
    this.flights().filter((f) => this.basket()[f.id]),
  );

  flightsWithDelay = computed(() =>
    this.toFlightsWithDelay(this.flights(), this.delayInMinutes()),
  );

  from$ = toObservable(this.from);
  to$ = toObservable(this.to);

  flights$ = combineLatest({
    from: this.from$,
    to: this.to$,
  }).pipe(
    tap(() => this.error.set('')),
    filter((c) => c.to.length >= 3 && c.from.length >= 3),
    debounceTime(300),
    tap((c) => console.log('searching by', c)),
    switchMap((c) => this.find(c.from, c.to)),
  );

  flights = toSignal(this.flights$, {
    initialValue: [],
  });

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  private flightService = inject(FlightService);
  private snackBar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      const error = this.error();
      console.log('error', error);
      if (error) {
        this.snackBar.open(error, 'Ok', { duration: 3000 });
      }
    });

    effect(() => {
      console.log('from', this.from());
      console.log('to', this.to());
    });

    // effect(() => {
    //   this.to.set(this.from());
    // }, { allowSignalWrites: true });

    // effect(() => {
    //   this.from.set(this.to());
    // }, { allowSignalWrites: true });
  }

  updateBasket(fid: number, selected: boolean) {
    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  find(from: string, to: string): Observable<Flight[]> {
    return this.flightService.find(from, to).pipe(
      catchError((err: Error) => {
        this.error.set('Error loading flights!');
        console.error(err);
        return of([]);
      }),
    );
  }

  search(): void {
    // // Reset properties
    // this.selectedFlight.set(undefined);
    // this.error.set('');
    // this.flightService.find(this.from(), this.to()).subscribe({
    //   next: (flights) => {
    //     this.flights.set(flights);
    //   },
    //   error: (errResp) => {
    //     this.error.set('Error loading flights');
    //     console.error(errResp);
    //   },
    // });
  }

  delay() {
    this.delayInMinutes.update((delay) => delay + 15);
  }

  toFlightsWithDelay(flights: Flight[], delay: number): Flight[] {
    if (flights.length === 0) {
      return [];
    }

    return [
      { ...flights[0], date: addMinutes(flights[0].date, delay) },
      ...flights.slice(1),
    ];
  }
}
