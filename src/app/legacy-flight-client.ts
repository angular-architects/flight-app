import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Flight, parseFlight, parseFlights } from './model/flight';
import { BehaviorSubject, firstValueFrom, map, Observable, switchMap } from 'rxjs';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class FlightClient {
  private readonly httpClient = inject(HttpClient);
  private readonly url = 'https://demo.angulararchitects.io/api/flight';

  private _currentSearch$ = new BehaviorSubject({ from: 'Wien', to: 'Berlin' });

  flights$ = this._currentSearch$.pipe(
    switchMap(({ from, to }) => this.httpClient.get<Flight[]>(this.url, { params: { from, to } }))
  );

  flights = toSignal(this.flights$, { initialValue: [] })


  reset() {
    this._currentSearch$.next({ from: 'London', to: 'Paris' });
  }

  //{ equal: (s1, s2) => s1.from === s2.from && s1.to === s2.to }

  // _flights = rxResource({
  //   params: this._currentSearch,
  //   stream: ({ params }) => this.httpClient.get<Flight[]>(this.url, { params })
  // });


  reload() {
  }

  search(from: string, to: string) {
    this._currentSearch$.next({ from, to });
    // this._flights.set(await firstValueFrom(this.httpClient.get<Flight[]>(this.url, {  params })))
  }

  save(flight: Flight): Observable<Flight> {
    return this.httpClient.post(this.url, flight).pipe(map(parseFlight));
  }
}
