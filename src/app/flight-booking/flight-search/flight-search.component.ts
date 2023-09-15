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
import {
  selectFilteredFlights,
  selectFilteredFlightsWithParams,
} from '../+state/selectors';

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
  private store = inject(Store);

  flights$ = this.store.select(selectFilteredFlightsWithParams([163]));

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
