import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import {
  debounce,
  Field,
  form,
  minLength,
  required,
  SchemaPath,
  validate,
} from '@angular/forms/signals';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent, Field],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  filter = signal({
    from: 'Graz',
    to: 'Hamburg',
  });

  filterForm = form(this.filter, (path) => {
    required(path.from);
    minLength(path.from, 3);

    required(path.to);
    minLength(path.to, 3);

    debounce(path.from, 300);
    debounce(path.to, 300);

    const allowed = ['Graz', 'Hamburg', 'Paris'];
    validateAirport(path.from, allowed);
  });

  flights = signal<Flight[]>([]);

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  private flightService = inject(FlightService);

  search(): void {
    const { from, to } = this.filterForm().value();

    if (!from && !to) {
      return;
    }

    this.flightService.find(from, to).subscribe({
      next: (flights) => {
        this.flights.set(flights);
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [flightId]: selected,
    }));
  }
}
function validateAirport(path: SchemaPath<string>, allowed: string[]) {
  validate(path, (ctx) => {
    if (allowed.includes(ctx.value())) {
      return null;
    }
    return {
      kind: 'airport_not_supported',
      allowed,
      actual: ctx.value(),
    };
  });
}
