import {
  Component,
  computed,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { flightBookingStore } from '../flight-booking.store';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
})
export class FlightSearchComponent {
  store = inject(flightBookingStore);

  from = linkedSignal(() => this.store.filter.from());
  to = linkedSignal(() => this.store.filter.to());
  flights = this.store.flightsValue;
  selected = this.store.selected;

  filter = computed(() => ({
    from: this.from(),
    to: this.to(),
  }));

  basket = this.store.basket;

  search(): void {
    this.store.updateFilter(this.filter());
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.store.updateBasket(flightId, selected);
  }
}
