import { Component, ElementRef, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { BookingStore, Criteria } from '../booking.store';
import { FormUpdateDirective } from '@demo/shared/util-common';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [
    FormUpdateDirective,
    CommonModule,
    FormsModule,
    FlightCardComponent,
  ],
})
export class FlightSearchComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);
  private store = inject(BookingStore);

  filter = this.store.filter;
  basket = this.store.basket;
  flights = this.store.flightEntities;
  selectedFlights = this.store.selectedFlights;

  search(): void {
    this.store.loadFlights(this.store.filter());
  }

  delay(flight = this.flights()[0]): void {
    if (flight) {
      this.store.addFlightDelay(flight);
    }
  }

  updateFilter(filter: Criteria) {
    this.store.setFilter({
      ...filter,
      urgent: filter.urgent ?? false,
    });
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.store.updateBasket(flightId, selected);
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
