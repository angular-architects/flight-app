import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { CityPipe } from '../../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { DateCvaDirective } from 'src/app/shared/date/date-cva.directive';
import { DateStepperComponent } from 'src/app/shared/date/date-stepper/date-stepper.component';
import { Store } from '@ngrx/store';
import { ticketsActions } from '../+state/actions';
import { first } from 'rxjs';
import { selectFilteredFlights } from '../+state/selectors';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    CityPipe,
    FlightCardComponent,
    DateCvaDirective,
    DateStepperComponent,
  ],
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);
  private store = inject(Store);

  flights$ = this.store.select(selectFilteredFlights);

  from = 'London';
  to = 'Paris';
  selectedFlight: Flight | undefined;
  message = '';
  date = new Date();

  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  search(): void {
    // Reset properties
    this.message = '';
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
