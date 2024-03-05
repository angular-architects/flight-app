import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';
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
  private flightService = inject(FlightService);
  private snackBar = inject(MatSnackBar);

  from = signal('London');
  to = signal('Paris');
  flights = signal<Flight[]>([]);

  error = signal<string>('');
  delayInMinutes = signal(0);

  flightRoute = computed(() => this.from() + ' to ' + this.to());

  selectedFlights = computed(() =>
    this.flights().filter((f) => this.basket()[f.id]),
  );

  flightsWithDelay = computed(() =>
    this.toFlightsWithDelay(this.flights(), this.delayInMinutes()),
  );

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  constructor() {
    effect(() => {
      const error = this.error();
      console.log('error', error);
      if (error) {
        this.snackBar.open(error, 'Ok', { duration: 3000 });
      }
    });
  }

  updateBasket(fid: number, selected: boolean) {
    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  search(): void {
    this.error.set('');
    this.flightService.find(this.from(), this.to()).subscribe({
      next: (flights) => {
        this.flights.set(flights);
      },
      error: (errResp) => {
        this.error.set('Error loading flights');
        console.error(errResp);
      },
    });
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
