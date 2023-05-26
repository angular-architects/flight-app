import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@flight-demo/shared/ui-common';
import {
  Flight,
  FlightService,
  ticketsActions,
  ticketsFeature,
} from '@flight-demo/tickets/domain';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);
  private store = inject(Store);

  flights$ = this.store.select(ticketsFeature.selectFlights);

  from = 'London';
  to = 'Paris';
  selectedFlight: Flight | undefined;

  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  search(): void {
    if (!this.from || !this.to) {
      return;
    }

    // Reset properties
    this.selectedFlight = undefined;

    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.store.dispatch(ticketsActions.flightsLoaded({ flights }));
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  select(f: Flight): void {
    this.selectedFlight = { ...f };
  }

  delay(): void {
    this.flights$.pipe(first()).subscribe((flights) => {
      const oldFlight = flights[0];
      const oldDate = new Date(oldFlight.date);

      const newDate = new Date(oldDate.getTime() + 1000 * 60 * 5); // Add 5 min
      const newFlight = {
        ...oldFlight,
        date: newDate.toISOString(),
      };

      this.store.dispatch(ticketsActions.updateFlight({ flight: newFlight }));
    });
  }
}
