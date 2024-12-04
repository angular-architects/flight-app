import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import {
  selectFlightsWithParams,
  ticketingActions,
} from '@demo/ticketing/data';
import { addMinutes } from 'date-fns';
import { Store } from '@ngrx/store';

// import {  } from '@demo/checkin/data';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  private store = inject(Store);

  from = signal('Paris');
  to = signal('London');
  route = computed(() => this.from() + ' to ' + this.to());

  flights = this.store.selectSignal(selectFlightsWithParams([1176]));

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  search(): void {
    this.store.dispatch(
      ticketingActions.loadFlights({
        from: this.from(),
        to: this.to(),
      })
    );
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [flightId]: selected,
    }));
  }

  delay(): void {
    const oldDate = new Date(this.flights()[0].date);
    const date = addMinutes(oldDate, 15);

    const flight = {
      ...this.flights()[0],
      date: date.toISOString(),
    };

    this.store.dispatch(ticketingActions.updateFlight({ flight }));
  }
}
