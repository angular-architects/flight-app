import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@flight-demo/shared/ui-common';
import { Flight, FlightService } from '@flight-demo/tickets/domain';
import {
  toObservable,
  toSignal,
  takeUntilDestroyed,
} from '@angular/core/rxjs-interop';
import { combineLatest, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  from = signal('Graz');
  to = signal('Wien');
  flights = signal<Array<Flight>>([]);
  selectedFlight = signal<Flight | undefined>(undefined);

  flightRoute = computed(() => this.from() + ' to ' + this.to());
  from$ = toObservable(this.from);
  to$ = toObservable(this.to);

  criteria$ = combineLatest({
    from: this.from$,
    to: this.to$,
  }).pipe(
    filter((combi) => combi.to.length >= 3 && combi.from.length >= 3),
    debounceTime(300),
    takeUntilDestroyed()
  );

  criteria = toSignal(this.criteria$, {
    initialValue: {
      from: 'Graz',
      to: 'Hamburg',
    },
  });

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  private flightService = inject(FlightService);

  constructor() {
    effect(() => {
      console.log('from', this.from());
      console.log('to', this.to());
    });

    effect(
      () => {
        this.search();
      },
      { allowSignalWrites: true }
    );
  }

  async search(): Promise<void> {
    const { from, to } = this.criteria();

    if (!from || !to) {
      return;
    }

    this.selectedFlight.set(undefined);
    const flights = await this.flightService.findPromise(from, to);
    this.flights.set(flights);
  }

  select(f: Flight, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [f.id]: selected,
    }));
  }
}
