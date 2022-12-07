import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {
  from = 'London';
  to = 'Paris';
  flights: Array<Flight> = [];
  selectedFlight: Flight | undefined;
  message = '';

  private http = inject(HttpClient);

  search(): void {
    // Reset properties
    this.message = '';
    this.selectedFlight = undefined;

    const url = 'https://demo.angulararchitects.io/api/flight';

    const headers = {
      Accept: 'application/json',
    };

    const params = {
      from: this.from,
      to: this.to,
    };

    this.http.get<Flight[]>(url, { headers, params }).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  save(): void {
    if (!this.selectedFlight) return;

    const url = 'https://demo.angulararchitects.io/api/flight';

    const headers = {
      Accept: 'application/json',
    };

    this.http.post<Flight>(url, this.selectedFlight, { headers }).subscribe({
      next: (flight) => {
        this.selectedFlight = flight;
        this.message = 'Update successful!';
      },
      error: (errResponse) => {
        this.message = 'Error on updating the Flight';
        console.error(this.message, errResponse);
      },
    });
  }

  select(f: Flight): void {
    this.selectedFlight = { ...f };
  }
}
