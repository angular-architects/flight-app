import { Component, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { addMinutes } from '../shared/add-minutes';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = signal('London');
  to = signal('Paris');
  flights = signal<Flight[]>([]);

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
    this.flightService.find(this.from(), this.to()).subscribe({
      next: (flights) => {
        this.flights.set(flights);
      },
      error: (errResp) => {
        console.error(errResp);
      },
    });
  }

  delay() {
    this.flights.update((flights) => this.toFlightsWithDelay(flights, 15));
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
