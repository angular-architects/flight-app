import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { Flight, FlightService } from '@demo/ticketing/data';
import { addMinutes } from 'date-fns';

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

  private flightService = inject(FlightService);

  from = signal('Paris');
  to = signal('London');
  flights = signal<Flight[]>([]);

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  async search(): Promise<void> {
    if (!this.from() || !this.to()) {
      return;
    }

    const flights = await this.flightService.findPromise(
      this.from(),
      this.to()
    );
    this.flights.set(flights);
  }

  delay(): void {
    this.flights.update((flights) => {
      const oldFlight = flights[0];
      const oldDate = new Date(oldFlight.date);

      const newDate = addMinutes(oldDate, 15);
      const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };

      return [newFlight, ...flights.slice(1)];
    });
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [flightId]: selected,
    }));
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
