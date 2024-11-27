import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, FormsModule, FlightCardComponent],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {
  from = 'London';
  to = 'Paris';
  flights: Array<Flight> = [];
  selectedFlight: Flight | undefined;

  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  private flightService = inject(FlightService);

  search(): void {
    // Reset properties
    this.selectedFlight = undefined;

    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
