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
import { CityPipe } from '@demo/shared/ui-common';
import {
  FlightBookingFacade,
  FlightService,
  selectFilteredFlights,
  selectFilteredFlights2,
  selectFlightsWithParams,
  ticketingActions,
  ticketingFeature,
} from '@demo/ticketing/data';
import { addMinutes } from '@demo/shared/util-common';
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
  private facade = inject(FlightBookingFacade);

  from = signal('Paris');
  to = signal('London');
  flightRoute = computed(() => this.from() + ' to ' + this.to());

  flights = this.facade.flights;

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  search(): void {
    this.facade.load(this.from(), this.to());
  }

  updateBasket(fid: number, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  delay(): void {
    this.facade.delay();
  }
}
