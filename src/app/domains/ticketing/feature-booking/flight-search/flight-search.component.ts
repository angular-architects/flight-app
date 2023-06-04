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
import { Flight, FlightService } from '@demo/ticketing/data';
import { addMinutes } from '@demo/shared/util-common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, debounceTime, filter } from 'rxjs';

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

  from = signal('Paris');
  to = signal('London');

  flights = signal<Array<Flight>>([]);
  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

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

  flightRoute = computed(() => this.from() + ' to ' + this.to());

  constructor() {
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
    const flights = await this.flightService.findPromise(from, to);
    this.flights.set(flights);
  }

  updateBasket(fid: number, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  delay(): void {
    const date = addMinutes(this.flights()[0].date, 15);

    this.flights.update((flights) => [
      { ...flights[0], date },
      ...flights.slice(1),
    ]);
  }
}
