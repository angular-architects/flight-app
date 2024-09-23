import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@demo/shared/ui-common';
import { Flight, FlightService } from '@demo/ticketing/data';
import { addMinutes } from 'date-fns';

// import {  } from '@demo/checkin/data';

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
  route = computed(() => this.from() + ' to ' + this.to());

  flights = signal<Flight[]>([]);

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

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

  updateBasket(flightId: number, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [flightId]: selected,
    }));
  }

  delay(): void {
    const oldDate = new Date(this.flights()[0].date);
    const date = addMinutes(oldDate, 15);

    const flight = {
      ...this.flights()[0],
      date: date.toISOString(),
    };

    const flights = [flight, ...this.flights()];

    this.flights.set(flights);
  }
}
