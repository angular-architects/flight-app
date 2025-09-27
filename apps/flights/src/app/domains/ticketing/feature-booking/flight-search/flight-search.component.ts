import { Component, computed, inject, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { BookingStore } from '../booking.store';
import { debounceSignal } from '@demo/shared/util-common';

// import { CheckinService } from '@demo/checkin/data/checkin.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
})
export class FlightSearchComponent {
  private store = inject(BookingStore);

  from = linkedSignal(() => this.store.from());
  to = linkedSignal(() => this.store.to());

  filter = computed(() => ({
    from: this.from(),
    to: this.to(),
  }));

  // Debounce filter
  debouncedFilter = debounceSignal(this.filter, 300);

  flights = this.store.flightsValue;
  basket = this.store.basket;

  constructor() {
    // Delegate debounced filter
    // Pass in entire Signal, not just the current value
    this.store.updateFilter(this.debouncedFilter);
  }

  search(): void {
    // Reload Resource
    this.store.reload();
  }

  delay(): void {
    this.store.delay();
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.store.updateBasket(flightId, selected);
  }
}
