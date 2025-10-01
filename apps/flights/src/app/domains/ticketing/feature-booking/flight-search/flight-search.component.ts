import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
} from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { BookingStore } from '../booking.store';
import { debounceSignal } from '@demo/shared/util-common';
import { form, required, minLength, Control } from '@angular/forms/signals';
// import { CheckinService } from '@demo/checkin/data/checkin.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent, Control, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  private store = inject(BookingStore);

  from = this.store.from;
  to = this.store.to;
  flights = this.store.flightsValue;

  criteria = linkedSignal(() => ({
    from: this.from(),
    to: this.to(),
    details: {
      onlyDirectConnections: true,
      maxPrice: 370,
    },
    stops: [{ city: 'CDG' }, { city: 'NYC' }],
  }));

  searchForm = form(this.criteria, (path) => {
    required(path.from);
    required(path.to);
    minLength(path.from, 3);
    minLength(path.to, 3);
  });

  debouncedCriteria = debounceSignal(this.searchForm().value, 300);

  error = this.store.flightsError;
  isLoading = this.store.flightsIsLoading;

  basket = this.store.basket;

  constructor() {
    this.store.updateFilter(this.debouncedCriteria);
  }

  search(): void {
    this.store.reload();
  }

  delay(): void {
    this.store.delay();
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.store.updateBasket(flightId, selected);
  }
}
