import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@demo/shared/ui-common';
import { FlightBookingFacade, FlightFilter } from '@demo/ticketing/data';
import { FlightFilterComponent } from '@demo/ticketing/ui-common';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    CityPipe,
    FlightCardComponent,
    FlightFilterComponent,
  ],
})
export class FlightSearchComponent {
  private facade = inject(FlightBookingFacade);

  filter = signal({
    from: 'Paris',
    to: 'London',
    urgent: false,
  });
  flightRoute = computed(() => this.filter().from + ' to ' + this.filter().to);

  flights = this.facade.flights;

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  search(filter: FlightFilter): void {
    this.filter.set(filter);
    this.facade.load(this.filter().from, this.filter().to);
  }

  updateBasket(fid: number, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [fid]: selected,
    }));
  }

  updateFilter(patchValue: Partial<FlightFilter>): void {
    this.filter.update((f) => ({
      ...f,
      ...patchValue,
    }));
  }

  delay(): void {
    this.facade.delay();
  }
}
