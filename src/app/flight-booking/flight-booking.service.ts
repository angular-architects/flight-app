import { Injectable, computed, inject, signal } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from './flight-search/flight.service';

// NGRX Signal Store
// NGRX Store

@Injectable({
  providedIn: 'root',
})
export class FlightBookingService {
  private flightService = inject(FlightService);

  // private _from = signal('Frankfurt');
  // private _to = signal('Graz');
  // private _flights = signal<Flight[]>([]);
  // private _basket = signal<Record<number, boolean>>({});

  // #from = signal('Frankfurt');

  private state = signal({
    from: 'Frankfurt',
    to: 'Graz',
    flights: [] as Flight[],
    basket: {} as Record<number, boolean>,
  });

  readonly from = computed(() => this.state().from);
  readonly to = computed(() => this.state().to);
  readonly flights = computed(() => this.state().flights);
  readonly basket = computed(() => this.state().basket);

  updateCriteria(from: string | null, to: string | null): void {
    if (from !== null) {
      this.state.update((state) => ({ ...state, from }));
    }
    if (to !== null) {
      this.state.update((state) => ({ ...state, to }));
    }
  }

  updateBasket(fid: number, selected: boolean): void {
    this.state.update((state) => ({
      ...state,
      basket: {
        ...state.basket,
        [fid]: selected,
      },
    }));
  }

  search(): void {
    this.flightService.find(this.from(), this.to()).subscribe({
      next: (flights) => {
        this.state.update((state) => ({ ...state, flights }));
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
