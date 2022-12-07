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
  from = '';
  to = '';
  flights: Array<Flight> = [];
  selectedFlight: Flight | undefined;

  private http = inject(HttpClient);

  ngOnInit(): void {}

  search(): void {
    const url = 'http://www.angular.at/api/flight';

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

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
