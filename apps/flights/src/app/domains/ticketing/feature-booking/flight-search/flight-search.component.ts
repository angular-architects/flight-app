import {
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe } from '@demo/shared/ui-common';
import { BookingStore } from '../booking.store';
import {} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  private store = inject(BookingStore);

  @ViewChild(NgForm)
  private form!: NgForm;

  from = this.store.from;
  to = this.store.to;
  flights = this.store.flights;

  basket = this.store.basket;
  selectedFlights = this.store.selectedFlights;

  constructor() {
    // toSignal(this.form.valueChanges).
  }

  async search(): Promise<void> {
    await this.store.load();
  }

  delay(): void {
    this.store.delay();
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
