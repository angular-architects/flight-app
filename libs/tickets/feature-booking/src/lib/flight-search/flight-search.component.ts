import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@flight-demo/shared/ui-common';
import {
  Flight,
  selectFilteredFlightsWithParams,
  ticketsActions,
} from '@flight-demo/tickets/domain';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';
import { provideLogger } from '@flight-demo/shared/util-logger';
@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
  providers: [
    // provideLogger()
  ],
})
export class FlightSearchComponent {
  private store = inject(Store);

  flights$ = this.store.select(selectFilteredFlightsWithParams([314]));

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

    this.store.dispatch(
      ticketsActions.loadFlights({ from: this.from, to: this.to })
    );
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
