import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { FlightBookingService } from '../flight-booking.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);
  private flightBookingService = inject(FlightBookingService);

  from = 'London';
  to = 'Paris';

  //flights: Array<Flight> = [];

  flights = this.flightBookingService.flights;

  selectedFlight: Flight | undefined;
  message = '';

  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  search(): void {
    // Reset properties

    this.flightBookingService.load(this.from, this.to);
  }

  select(f: Flight): void {
    this.selectedFlight = { ...f };
  }
}
