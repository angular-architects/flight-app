import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {
  from = 'London';
  to = 'Paris';
  flights: Array<Flight> = [];
  selectedFlight: Flight | undefined;

  search(): void {
    // Method body will be implemented later
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
