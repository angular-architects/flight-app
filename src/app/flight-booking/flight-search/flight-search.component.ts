import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { FlightBookingComponent } from '../flight-booking.component';
import { FlightBookingService } from '../flight-booking.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  bookingService = inject(FlightBookingService);

  from = this.bookingService.from;
  to = this.bookingService.to;
  flights = this.bookingService.flights;

  selectedFlight: Flight | undefined;
  message = '';

  basket = this.bookingService.basket;

  updateCriteria(from: string | null, to: string | null): void {
    this.bookingService.updateCriteria(from, to);
  }

  updateBasket(fid: number, selected: boolean): void {
    this.bookingService.updateBasket(fid, selected);
  }

  search(): void {
    this.bookingService.search();
  }

  select(f: Flight): void {
    this.selectedFlight = { ...f };
  }
}
