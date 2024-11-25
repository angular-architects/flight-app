import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  linkedSignal,
  signal,
  untracked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  flights = signal<Flight[]>([]);
  delayInMinutes = signal(0);

  delayedFlights = computed(() =>
    calcDelayed(this.flights(), this.delayInMinutes())
  );

  from = signal('London');
  to = signal('Paris');
  selectedFlight = signal<Flight | undefined>(undefined);
  message = signal('');

  flightRoute = computed(() => this.from() + ' to ' + this.to());

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  injector = inject(Injector);

  snackBar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      // auto-tracking
      this.logCriteria();
    });

    // TODO
    // effect(() => {
    //   const len = this.flights().length;
    //   if (len > 0) {
    //     this.snackBar.open(len + ' flights loaded!');
    //   }
    // });

    // effect(() => {
    //   this.flightService.load(this.from(), this.to());
    //   // loading()
    //   // userId()
    // })
  }

  private logCriteria() {
    console.log('from', this.from());
    console.log('to', this.to());
  }

  search(): void {
    // Reset properties
    this.message.set('');
    this.selectedFlight.set(undefined);

    this.flightService.find(this.from(), this.to()).subscribe((flights) => {
      this.flights.set(flights);
    });
  }

  select(f: Flight): void {
    this.selectedFlight.set(f);
  }

  updateBasket(fid: number, selected: boolean): void {
    // const basket = this.basket();
    // const newBasket = {...basket, [fid]: selected};
    // this.basket.set(newBasket);
    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  delay(): void {
    this.delayInMinutes.update((d) => d + 15);
  }
}

function calcDelayed(flights: Flight[], delay: number): Flight[] {
  const ONE_MINUTE = 1000 * 60;

  if (flights.length <= 0) {
    return [];
  }

  const oldFlights = flights;
  const oldFlight = oldFlights[0];
  const oldDate = new Date(oldFlight.date);

  const newDate = new Date(oldDate.getTime() + delay * ONE_MINUTE);
  const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
  const newFlights = [newFlight, ...oldFlights.slice(1)];
  return newFlights;
}
