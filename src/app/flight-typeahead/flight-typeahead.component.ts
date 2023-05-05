import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../flight-booking/flight-search/flight.service';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  interval,
  map,
  of,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { Flight } from '../model/flight';

function log<T>(message: string) {
  return (obs: Observable<T>): Observable<T> => {
    console.log('log!');
    return obs.pipe(tap((x) => console.log('log!', message, x)));
  };
}

function log2<T>(message: string) {
  return (input$: Observable<T>): Observable<T> => {
    console.log('log!');

    return new Observable<T>((observer) => {
      const sub = input$.subscribe((value) => {
        console.log('log!', message, value);
        observer.next(value);
      });

      return () => {
        sub.unsubscribe();
      };
    });
  };
}

// switchMap(x => find(x))

type Projector<T, U> = (input: T) => Observable<U>;

function mySwitchMap<T, U>(func: Projector<T, U>) {
  return (input$: Observable<T>): Observable<U> => {
    return new Observable<U>((observer) => {
      const outerSub = input$.subscribe((value) => {
        const inner$ = func(value);
        const innerSub = inner$.subscribe((innerValue) => {
          observer.next(innerValue);
        });
      });

      return () => {
        outerSub.unsubscribe();
      };
    });
  };
}

@Component({
  selector: 'app-flight-typeahead',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css'],
})
export class FlightTypeaheadComponent implements OnDestroy {
  flightService = inject(FlightService);

  loading$ = new BehaviorSubject(false);
  control = new FormControl();

  online$ = interval(1000).pipe(
    startWith(-1),
    tap((c) => console.log('counter', c)),
    log2('after interval'),
    map((_) => Math.random() < 0.5),
    map(() => true),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true })
    // shareReplay(1)
  );

  input$ = this.control.valueChanges.pipe(
    filter((v) => v.length >= 3),
    debounceTime(300)
  );

  flights$ = combineLatest({
    input: this.input$,
    online: this.online$,
  }).pipe(
    filter((combi) => combi.online),
    tap(() => this.loading$.next(true)),
    mySwitchMap((combi) => this.load(combi.input)),
    //switchMap((combi) => this.load(combi.input)),
    tap(() => this.loading$.next(false))
  );

  close$ = new Subject<void>();

  constructor() {
    this.online$
      .pipe(takeUntil(this.close$))
      .subscribe((o) => console.log('online', o));

    // setTimeout(() => sub.unsubscribe(), 7_000 );
  }
  ngOnDestroy(): void {
    this.close$.next();
  }

  load(airport: string): Observable<Flight[]> {
    return this.flightService.find(airport, '').pipe(
      catchError((err) => {
        console.error('err', err);
        return of([]);
      })
    );
  }
}
