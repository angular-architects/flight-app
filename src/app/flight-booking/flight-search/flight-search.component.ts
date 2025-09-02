import {
  Component,
  computed,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { FlightBookingStore } from '../flight-booking.store';
import { Control, form } from '@angular/forms/signals';
import { debounceSignal } from 'src/app/shared/debounce-signal';
import { Flight } from 'src/app/model/flight';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FlightCardComponent, FormsModule],
})
export class FlightSearchComponent {
  store = inject(FlightBookingStore);

  // TODO: Get Signals from store

  from = signal('Graz');
  to = signal('Hamburg');
  filter = computed(() => ({ from: this.from(), to: this.to() }));

  flights = signal<Flight[]>([]);
  basket = signal<Record<number, boolean>>({});

  isLoading = signal(false);
  error = signal<unknown>(undefined);

  // Add Signal Form

  constructor() {
    // TODO: Connect filter
  }

  search(): void {
    const date = new Date().toISOString();

    // TODO (re)load flights
    this.flights.set([
      { id: 1, from: this.from(), to: this.to(), date, delayed: false },
      { id: 2, from: this.from(), to: this.to(), date, delayed: false },
      { id: 3, from: this.from(), to: this.to(), date, delayed: false },
    ]);
  }

  updateBasket(flightId: number, selected: boolean): void {
    // TODO: Delegate to store
    this.basket.update((b) => ({ ...b, [flightId]: selected }));
  }
}
