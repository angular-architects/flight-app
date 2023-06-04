import { Injectable, computed, inject, signal } from '@angular/core';
import { FlightService } from './flight.service';
import { Flight } from './flight';
import { addMinutes } from '@demo/shared/util-common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, debounceTime, filter } from 'rxjs';

function equal(a: unknown, b: unknown): boolean {
  return a === b;
}

@Injectable({ providedIn: 'root' })
export class FlightBookingFacade {
  private flightService = inject(FlightService);

  private state = signal(
    {
      from: 'Paris',
      to: 'London',
      flights: [] as Flight[],
      basket: {} as Record<number, boolean>,
    },
    { equal }
  );

  readonly from = computed(() => this.state().from, { equal });
  readonly to = computed(() => this.state().to, { equal });
  readonly flights = computed(() => this.state().flights, { equal });
  readonly basket = computed(() => this.state().basket, { equal });

  readonly flightRoute = computed(() => this.from() + ' to ' + this.to(), {
    equal,
  });

  private from$ = toObservable(this.from);
  private to$ = toObservable(this.to);

  private criteria$ = combineLatest({
    from: this.from$,
    to: this.to$,
  }).pipe(
    filter((combi) => combi.from.length >= 3 && combi.to.length >= 3),
    debounceTime(300)
  );

  private criteria = toSignal(this.criteria$, {
    initialValue: {
      from: '',
      to: '',
    },
  });

  async load(): Promise<void> {
    const { from, to } = this.criteria();

    if (!from || !to) {
      return;
    }

    const flights = await this.flightService.findPromise(from, to);
    this.state.update((state) => ({
      ...state,
      flights,
    }));
  }

  upateCriteria(from: string, to: string): void {
    this.state.update((state) => ({
      ...state,
      from,
      to,
    }));
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

  delay() {
    const date = addMinutes(this.flights()[0].date, 15);
    this.state.update((state) => ({
      ...state,
      flights: [{ ...state.flights[0], date }, ...state.flights.slice(1)],
    }));
  }
}
