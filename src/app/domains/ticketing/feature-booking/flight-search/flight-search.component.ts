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
    const flights = await this.flightService.findPromise(
      this.from(),
      this.to()
    );
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
