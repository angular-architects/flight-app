import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  resource,
  ResourceStatus,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = signal('London');
  to = signal('Paris');

  criteria = computed(() => ({
    from: this.from(),
    to: this.to(),
  }));

  // Experimental
  flightsResource = resource({
    request: this.criteria,
    loader: async (params) => {
      if (params.previous.status === ResourceStatus.Idle) {
        return undefined;
      }

      const request = this.criteria();
      await wait(300 /* params.abortSignal */);
      return await firstValueFrom(
        this.flightService.find(
          request.from,
          request.to /* params.abortSignal */
        )
      );
    },
  });

  error = this.flightsResource.error;
  loading = this.flightsResource.isLoading();

  flights = computed(() => this.flightsResource.value() ?? []);
  delayInMinutes = signal(0);

  delayedFlights = computed(() =>
    calcDelayed(this.flights(), this.delayInMinutes())
  );

  // ------ BERL -----
  //     ---- GRAZ -------
  //          -------- MUC ------

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
    this.flightsResource.reload();
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

function wait(delay: number) {
  return new Promise((res) => setTimeout(res, 300));
}
