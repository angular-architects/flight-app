import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityPipe } from '@demo/shared/ui-common';
import { Flight, FlightService } from '@demo/ticketing/data';
import { FlightCardComponent } from '../flight-card/flight-card.component';

// import { CheckinService } from '@demo/checkin/data';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  from = 'Paris';
  to = 'London';
  flights: Array<Flight> = [];

  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  private flightService = inject(FlightService);

  search(): void {
    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }
}
