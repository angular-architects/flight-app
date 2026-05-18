import { Component, inject } from '@angular/core';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-flight-search',
  imports: [FormsModule, JsonPipe],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {
  protected from = 'Wien';
  protected to = 'Berlin';

  private httpClient = inject(HttpClient);

  protected flights: Flight[] = [];
  protected selectedFlight: Flight | undefined

  protected async search() {
    const flights$ = firstValueFrom(
      this.httpClient.get<Flight[]>('https://demo.angulararchitects.io/api/flight', {
        params: {
          from: this.from,
          to: this.to
        }
      }));

    this.flights = await flights$;
  }

  protected selectFlight(flight: Flight) {
    this.selectedFlight = flight;
  }
}
