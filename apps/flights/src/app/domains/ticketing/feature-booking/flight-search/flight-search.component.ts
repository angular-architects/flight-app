import {
  Component,
  ElementRef,
  NgZone,
  computed,
  inject,
  signal,
  resource,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { Flight, FlightService } from '@demo/ticketing/data';
import { addMinutes } from 'date-fns';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
})
export class FlightSearchComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  private flightService = inject(FlightService);

  from = signal('Paris');
  to = signal('London');
  flightRoute = computed(() => this.from() + ' to ' + this.to());

  criteria = computed(() => ({
    from: this.from(),
    to: this.to(),
  }));

  flightResource = resource({
    request: this.criteria,
    loader: async (param) => {
      const c = param.request;
      await delayPromise(300);
      return await this.flightService.findPromise(
        c.from,
        c.to /*param.abortSignal*/
      );
    },
  });

  flights = computed(() => this.flightResource.value() ?? []);

  errors = this.flightResource.error;
  isLoading = this.flightResource.isLoading;

  delayInMinutes = signal(0);

  flightsWithDelay = computed(() =>
    this.toFlightsWithDelays(this.flights(), this.delayInMinutes())
  );

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  selected = computed(() => this.flights().filter((f) => this.basket()[f.id]));

  constructor() {
    effect(() => {
      this.logStuff();
    });
  }

  private logStuff() {
    console.log('from', this.from());
    console.log('to', this.to());
  }

  search(): void {
    this.flightResource.reload();
  }

  updateBasket(fid: number, selected: boolean): void {
    this.basket.update((b) => ({
      ...b,
      [fid]: selected,
    }));
  }

  delay(): void {
    this.delayInMinutes.update((m) => m + 15);
  }

  toFlightsWithDelays(flights: Flight[], delay: number): Flight[] {
    if (flights.length === 0) {
      return [];
    }

    const oldFlights = flights;
    const oldFlight = oldFlights[0];
    const oldDate = new Date(oldFlight.date);
    const newDate = addMinutes(oldDate, delay);

    const newFlight = { ...oldFlight, date: newDate.toISOString() };

    return [newFlight, ...flights.slice(1)];
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }
}

async function delayPromise(delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
}
