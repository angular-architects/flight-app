import { Component, inject, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { flightBookingStore } from '../flight-booking.store';
import { Control, form } from '@angular/forms/signals';
import { debounceSignal } from 'src/app/shared/debounce-signal';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, Control, FlightCardComponent],
})
export class FlightSearchComponent {
  store = inject(flightBookingStore);

  filter = linkedSignal(() => this.store.filter());

  flights = this.store.flightsValue;
  basket = this.store.basket;

  selected = this.store.selected;

  isLoading = this.store.flightsIsLoading;
  error = this.store.flightsError;

  filterForm = form(this.filter);

  debouncedFilterForm = debounceSignal(this.filterForm().value, 300);

  constructor() {
    this.store.reload();
    this.store.updateFilter(this.debouncedFilterForm);
  }

  search(): void {
    this.store.reload();
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.store.updateBasket(flightId, selected);
  }
}
