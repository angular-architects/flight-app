import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@demo/shared/ui-common';
import {
  FlightService,
  selectFilteredFlights,
  ticketingActions,
} from '@demo/ticketing/data';
import { addMinutes } from 'date-fns';
import { Store } from '@ngrx/store';

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
  private store = inject(Store);

  from = signal('Paris');
  to = signal('London');
  route = computed(() => this.from() + ' to ' + this.to());

  flights = this.store.selectSignal(selectFilteredFlights);

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  constructor() {
    effect(() => {
      console.log('route', this.route());
    });

    effect(() => {
      this.search();
    });
  }

  async search(): Promise<void> {
    const from = this.from();
    const to = this.to();

    if (!from || !to) {
      return;
    }

    const flights = await this.flightService.findPromise(from, to);
    this.store.dispatch(ticketingActions.flightsLoaded({ flights }));
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
