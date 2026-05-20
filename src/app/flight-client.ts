import { HttpClient, httpResource } from '@angular/common/http';
import {
  computed,
  inject,
  Injectable,
  ResourceRef,
  Signal,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { Flight, parseFlight, parseFlights } from './model/flight';
import { withPreviousValue } from './utils/with-previous-value';

@Injectable({ providedIn: 'root' })
export class FlightClient {
  private readonly httpClient = inject(HttpClient);

  private readonly url = 'https://demo.angulararchitects.io/api/flight';

  // 1. State

  private _currentSearch = signal({ from: 'Wien', to: 'Berlin' });
  currentSearch = this._currentSearch.asReadonly();

  from = computed(() => this.currentSearch().from);
  to = computed(() => this.currentSearch().to);

  reset() {
    this._currentSearch.set({ from: 'London', to: 'Paris' });
  }
  private _flights = httpResource(
    () => ({
      params: this._currentSearch(),
      url: this.url,
    }),
    {
      parse: parseFlights,
    },
  );

  flights = withPreviousValue(this._flights.asReadonly());

  _flightsValue = computed(() =>
    this._flights.hasValue() ? this._flights.value() : [],
  );

  flights$ = toObservable(this._flightsValue);

  // 2. Methods/Logic

  reload() {
    this._flights.reload();
  }

  search(from: string, to: string) {
    this._currentSearch.set({ from, to });
    // this._flights.set(await firstValueFrom(this.httpClient.get<Flight[]>(this.url, {  params })))
  }

  save(flight: Flight): Observable<Flight> {
    return this.httpClient.post(this.url, flight).pipe(map(parseFlight));
  }

  id = signal(0);

  flight = httpResource(
    () => ({
      url: `${this.url}/${this.id()}`,
    }),
    {
      parse: parseFlight,
    },
  );

  setId(id: number) {
    this.id.set(id);
  }

  // 3. Derived State

  flightsCount = computed(() =>
    this._flights.hasValue() ? this._flights.value().length : 0,
  );

  // 👇 not state management

  findById(id: Signal<number>): ResourceRef<Flight | undefined> {
    return httpResource(
      () => {
        return {
          url: `${this.url}/${id()}`,
        };
      },
      // {
      // parse: parseFlight,
      // },
    );
  }
}
