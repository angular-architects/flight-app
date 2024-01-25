import {
  Component,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FlightService } from './flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { CityPipe } from '../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
  imports: [FormsModule, CommonModule, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  basket = signal<Record<number, boolean>>({
    1: true,
    17: true,
  });

  from = signal('Graz');
  to = signal('Hamburg');

  flightRoute = computed(
    () => this.from() + ' to ' + untracked(() => this.to()),
  );

  selectedFlight: Flight | undefined;
  flights = signal<Flight[]>([]);

  constructor() {
    effect(() => {
      console.log('from', this.from());
      console.log('to', this.to());
    });

    // effect(() =>{
    //   this.to.set(this.from());
    // }, { allowSignalWrites: true });
  }

  search(): void {
    this.flightService.find(this.from(), this.to()).subscribe((flights) => {
      this.flights.set(flights);
    });
  }

  updateBasket(flightId: number, selected: boolean): void {
    // Mutieren ist verboten!
    // this.basket()[flightId] = selected;

    // Immutables
    this.basket.update((basket) => ({
      ...basket,
      [flightId]: selected,
    }));
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
