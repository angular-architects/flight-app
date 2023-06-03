import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@demo/shared/ui-common';
import { Flight, FlightService } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  from = signal('Paris');
  to = signal('London');

  flightRoute = computed(() => this.from() + ' to ' + this.to());

  flights = signal<Array<Flight>>([]);
  selectedFlight = signal<Flight | undefined>(undefined);

  message = signal('');

  date = signal(new Date());

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  private flightService = inject(FlightService);

  constructor() {
    effect(
      () => {
        // console.log('from', this.from());
        // console.log('to', untracked(() => this.to()));
        this.search();
      },
      { allowSignalWrites: true }
    );

    // effect(() => {
    //   this.to.set(this.from())
    // }, { allowSignalWrites: true });
  }

  search(): void {
    // Reset properties
    this.message.set('');
    this.selectedFlight.set(undefined);

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
    this.selectedFlight.set(f);
  }

  updateBasket(fid: number, selected: boolean): void {
    // const basket = this.basket();
    // basket[fid] = selected;
    // this.basket.set(basket);

    // this.basket.mutate(basket => {
    //   basket[fid] = selected;
    // });

    console.log('basket', fid, selected);
    // Immutables
    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }
}
