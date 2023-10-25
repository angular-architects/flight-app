import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight, FlightFilter, FlightService } from '../../data';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';

@Component({
  standalone: true,
  imports: [
    // CommonModule,
    NgIf,
    NgForOf,
    AsyncPipe,
    JsonPipe,

    FormsModule,
    FlightCardComponent,
    FlightFilterComponent,
  ],
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  filter = {
    from: 'Hamburg',
    to: 'Graz',
    urgent: false,
  };
  flights: Flight[] = [];

  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  search(filter: FlightFilter): void {
    this.filter = filter;

    if (!this.filter.from || !this.filter.to) return;

    this.flightService
      .find(this.filter.from, this.filter.to, this.filter.urgent)
      .subscribe((flights) => {
        this.flights = flights;
      });
  }
}
