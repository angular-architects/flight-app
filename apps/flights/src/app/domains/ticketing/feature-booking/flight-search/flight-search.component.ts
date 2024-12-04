import { Component, ElementRef, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { BookingStore } from '../booking.store';
import { FormUpdateDirective } from '@demo/shared/util-common';

// import {  } from '@demo/checkin/data';

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

  from = this.store.from;
  to = this.store.to;
  flights = this.store.flightEntities;

  basket = this.store.basket;
  selectedFlights = this.store.selectedFlights;

  search(): void {
    this.store.updateCriteria(this.from(), this.to());
    this.store.load();
  }

  delay(): void {
    this.store.delay();
  }

  update(update: { from: string; to: string }) {
    this.store.updateCriteria(update.from, update.to);
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
