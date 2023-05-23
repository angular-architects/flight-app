import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@flight-demo/shared/ui-common';
import { Flight, FlightService } from '@flight-demo/tickets/domain';

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

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  private flightService = inject(FlightService);

  async search(): Promise<void> {
    const from = this.from();
    const to = this.to();

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
