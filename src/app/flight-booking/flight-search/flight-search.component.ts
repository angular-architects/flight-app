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
import { Control, form, minLength, required } from '@angular/forms/signals';
import { debounceSignal } from 'src/app/shared/debounce-signal';
import { Flight } from 'src/app/model/flight';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FlightCardComponent, Control],
})
export class FlightSearchComponent {
  store = inject(FlightBookingStore);

  filter = linkedSignal(() => this.store.filter());

  flights = this.store.flightsValue;
  basket = this.store.basket;

  isLoading = this.store.flightsIsLoading;
  error = this.store.flightsError;

  filterForm = form(this.filter);

  debouncedFilter = debounceSignal(this.filterForm().value, 300);

  constructor() {
    this.store.updateFilter(this.debouncedFilter);
  }

  search(): void {
    this.store.reload();
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.store.updateBasket(flightId, selected);
  }
}
