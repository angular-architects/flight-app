import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  toObservable,
  toSignal,
  takeUntilDestroyed,
} from '@angular/core/rxjs-interop';

import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { combineLatest, debounceTime, filter, interval, switchMap } from 'rxjs';

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
  selectedFlight = signal<Flight | undefined>(undefined);

  flightRoute = computed(() => this.from() + ' to ' + this.to());
  selectedFlights = computed(() =>
    this.flights().filter((f) => this.basket()[f.id]),
  );

  from$ = toObservable(this.from);
  to$ = toObservable(this.to);

  flights$ = combineLatest({
    from: this.from$,
    to: this.to$,
  }).pipe(
    filter((c) => c.to.length >= 3 && c.from.length >= 3),
    debounceTime(300),
    switchMap((c) => this.flightService.find(c.from, c.to)),
  );

  // @for(flight of flights$ | async; track flight.id) { ... }

  flights = toSignal(this.flights$, {
    initialValue: [],
  });

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  private flightService = inject(FlightService);

  constructor() {
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
    // const b = this.basket();
    // const newBasket = {...b, [fid]: selected};
    // this.basket.set(b);

    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  search(): void {
    // // Reset properties
    // this.selectedFlight.set(undefined);
    // this.flightService.find(this.from(), this.to()).subscribe({
    //   next: (flights) => {
    //     this.flights.set(flights);
    //   },
    //   error: (errResp) => {
    //     console.error('Error loading flights', errResp);
    //   },
    // });
  }

  select(f: Flight): void {
    this.selectedFlight.set({ ...f });
  }
}
