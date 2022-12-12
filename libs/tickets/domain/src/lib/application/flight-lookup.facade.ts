import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  interval,
  map,
  Observable,
  of,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Flight } from '../entities/flight';
import { FlightService } from '../infrastructure/flight.service';

@Injectable({ providedIn: 'root' })
export class FlightLookupFacade {
  flightService = inject(FlightService);

  // Source
  private input$ = new BehaviorSubject<string>('');

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<unknown>({});

  // Sinks
  readonly loading$ = this.loadingSubject.asObservable();
  readonly error$ = this.errorSubject.asObservable();

  readonly online$ = interval(2000).pipe(
    startWith(-1),
    map(() => Math.random() < 0.5),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly flights$ = combineLatest({
    input: this.input$,
    online: this.online$,
  }).pipe(
    filter((combined) => combined.online),
    tap(() => this.loadingSubject.next(true)),
    switchMap((combined) => this.load(combined.input)),
    tap(() => this.loadingSubject.next(false))
  );

  private load(filter: string): Observable<Flight[]> {
    if (!filter) {
      return of([]);
    }

    return this.flightService.find(filter, '').pipe(
      catchError((err) => {
        this.errorSubject.next(err);
        return of([]);
      })
    );
  }

  lookup(filter: string): void {
    this.input$.next(filter);
  }
}
