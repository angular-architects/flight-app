import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  computed,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { Flight, FlightService } from '@demo/ticketing/data';
import { addMinutes } from 'date-fns';
import { BookingStore } from '../booking.store';

// import { CheckinService } from '@demo/checkin/data/checkin.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  private store = inject(BookingStore);

  from = linkedSignal(() => this.store.filter.from());
  to = linkedSignal(() => this.store.filter.to());

  criteria = computed(() => ({
    from: this.from(),
    to: this.to(),
  }));

  flights = this.store.flights;

  basket = this.store.basket;
  selectedFlights = this.store.selectedFlights;

  constructor() {
    this.store.rxLoad(this.criteria);
  }

  search(): void {}

  delay(): void {
    // TODO
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
