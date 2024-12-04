import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { Flight, FlightService } from '@demo/ticketing/data';
import { addMinutes } from 'date-fns';
import { MatSnackBar } from '@angular/material/snack-bar';

// import { CheckinService } from '@demo/checkin/data/checkin.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  private flightService = inject(FlightService);
  private snackBar = inject(MatSnackBar);

  from = signal('Paris');
  to = signal('London');
  flights = signal<Flight[]>([]);
  delayTime = signal(0);
  flightsWithDelays = computed(() =>
    this.toFlightsWithDelays(this.flights(), this.delayTime())
  );

  route = computed(() => this.from() + ' to ' + this.to());

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  constructor() {
    effect(() => {
      console.log('route', this.route());
    });

    effect(() => {
      if (this.from() === this.to()) {
        this.snackBar.open('Round Trips are not supported', 'Ok', {
          duration: 3000,
        });
      }
    });
  }

  search(): void {
    this.flightService.find(this.from(), this.to()).subscribe({
      next: (flights) => {
        this.flights.set(flights);
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  delay(): void {
    this.delayTime.update((delayTime) => delayTime + 15);
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

  updateBasket(flightId: number, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [flightId]: selected,
    }));
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
