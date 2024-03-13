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
import { CityPipe } from '@demo/shared/ui-common';
import { Flight, FlightService } from '@demo/ticketing/data';
import { addMinutes } from 'date-fns';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, debounceTime, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  private flightService = inject(FlightService);

  from = signal('Paris');
  to = signal('London');
  flights = signal<Flight[]>([]);

  from$ = toObservable(this.from);
  to$ = toObservable(this.to);

  criteria$ = combineLatest({ from: this.from$, to: this.to$ }).pipe(
    filter((combi) => combi.from.length >= 3 && combi.to.length >= 3),
    debounceTime(300)
  );

  criteria = toSignal(this.criteria$, {
    initialValue: {
      from: '',
      to: '',
    },
  });

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
      this.search();
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
    this.flights.update((flights) => {
      const oldFlight = flights[0];
      const oldDate = new Date(oldFlight.date);

      const newDate = addMinutes(oldDate, 15);
      const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };

      return [newFlight, ...flights.slice(1)];
    });
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
