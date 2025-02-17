import {
  Component,
  computed,
  inject,
  resource,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { addMinutes } from '../shared/add-minutes';

import {
  firstValueFrom,
} from 'rxjs';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = signal('London');
  to = signal('Paris');
  flightRoutes = computed(() => this.from() + ' - ' + this.to());

  criteria = computed(() => ({
    from: this.from(),
    to: this.to(),
  }));

  flightsResource = resource({
    request: this.criteria,
    loader: async (params) => {
      await waitPromise(300);
      return await
        firstValueFrom(this.flightService.find(params.request.from, params.request.to /*, abortSignal*/));
    }
  });

  // flightsResource = rxResource({
  //   // Angular 19.2: defaultValue: [],
  //   request: this.criteria,
  //   loader: (params) => {
  //     return of(params).pipe(
  //       delay(300),
  //       switchMap((p) =>
  //         this.flightService.find(p.request.from, p.request.to),
  //       ),
  //     );
  //   },
  // });

  delayInMinutes = signal(0);

  flights = computed(() => this.flightsResource.value() ?? []);
  flightsWithDelay = computed(() =>
    this.toFlightsWithDelay(this.flights(), this.delayInMinutes()),
  );

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  updateBasket(fid: number, selected: boolean) {
    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  search(): void {
    // Not used anymore!
    // this.flightService.find(this.from(), this.to()).subscribe({
    //   next: (flights) => {
    //     this.flights.set(flights);
    //   },
    //   error: (errResp) => {
    //     console.error(errResp);
    //   },
    // });
  }

  delay() {
    this.delayInMinutes.update((delay) => delay + 15);
  }

  toFlightsWithDelay(flights: Flight[], delay: number): Flight[] {
    if (flights.length === 0) {
      return [];
    }

    return [
      { ...flights[0], date: addMinutes(flights[0].date, delay) },
      ...flights.slice(1),
    ];
  }
}

async function waitPromise(time: number) {
  await new Promise((resolve) => setTimeout(resolve, time));
}
