import { Component, ElementRef, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@demo/shared/ui-common';
import { BookingStore } from '../booking.store';
import { FormUpdateDirective } from '@demo/shared/util-common';
import { FlightFilter } from '@demo/ticketing/data';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [
    FormUpdateDirective,
    CommonModule,
    FormsModule,
    CityPipe,
    FlightCardComponent,
  ],
})
export class FlightSearchComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  private store = inject(BookingStore);

  from = this.store.flightFilter.from;
  to = this.store.flightFilter.to;
  flights = this.store.flightEntities;

  basket = this.store.selectedFlightIds;
  selectedFlights = this.store.selectedFlightEntities;

  async search(): Promise<void> {
    await this.store.loadFlightEntities();
  }

  delay(): void {
    this.store.delay();
  }

  update(update: FlightFilter) {
    this.store.updateFlightFilter({
      from: update.from,
      to: update.to,
    });
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.store.updateSelectedFlightEntities(flightId, selected);
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }
}
