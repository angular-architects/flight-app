import {Component, computed, effect, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FlightCardComponent} from '../flight-card/flight-card.component';
import {CityPipe} from '@demo/shared/ui-common';
import {Flight, FlightService} from '@demo/ticketing/data';
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {debounceTime} from "rxjs";

// import { CheckinService } from '@demo/checkin/data';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  from = signal('Paris');
  to = signal('London');
  flights = signal<Array<Flight>>([]);
  selectedFlight: Flight | undefined;
  message = '';
  date = new Date();

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  })

  constructor() {
    effect(
      () => console.log(this.flightRoute())
    );
  }

  lazyFrom$ = toObservable(this.from).pipe(
    debounceTime(300)
  );

  lazyFrom = toSignal(this.lazyFrom$, {
    initialValue: this.from()
  });

  flightRoute = computed(() => 'From ' + this.lazyFrom() + ' to ' + this.to() + '.');

  private flightService = inject(FlightService);

  search(): void {
    // Reset properties
    this.message = '';
    this.selectedFlight = undefined;

    this.flightService.find(this.from(), this.to()).subscribe({
      next: (flights) => {
        this.flights.set(flights);
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  select(f: Flight): void {
    this.selectedFlight = {...f};
  }

  updateBasket(id: number, selected: boolean): void {
    this.basket.update(basket => ({...basket, [id]: selected}));
  }
}
