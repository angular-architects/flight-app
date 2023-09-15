import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ticketsActions } from './actions';
import { selectFilteredFlights } from './selectors';

// -- 4 --
@Injectable({ providedIn: 'root' })
export class FlightBookingFacade {
  store = inject(Store);

  constructor() {}

  readonly flights$ = this.store.select(selectFilteredFlights);

  load(from: string, to: string): void {
    this.store.dispatch(ticketsActions.loadFlights({ from, to }));
  }
}

// -- 3 --
// @Injectable({ providedIn: 'root' })
// export class FlightBookingFacade {
//   flightService = inject(FlightService);
//   store = inject(Store);

//   constructor() {}

//   readonly flights$ = this.store.select(selectFilteredFlights);

//   load(from: string, to: string): void {
//     this.flightService.find(from, to).subscribe((flights) => {
//       this.store.dispatch(ticketsActions.flightsLoaded({ flights }));
//     });
//   }
// }

// -- 2 --
// @Injectable({ providedIn: 'root' })
// export class FlightBookingFacade {
//   flightService = inject(FlightService);
//   store = inject(Store);

//   constructor() {}

//   readonly flights$ = this.store.select(ticketsFeature.selectFlights);

//   load(from: string, to: string): void {
//     this.flightService.find(from, to).subscribe((flights) => {
//       this.store.dispatch(ticketsActions.flightsLoaded({ flights }));
//     });
//   }
// }

// -- 1 --
// @Injectable({ providedIn: 'root' })
// export class FlightBookingFacade {
//   flightService = inject(FlightService);

//   constructor() {}

//   private flightsSubject = new BehaviorSubject<Flight[]>([]);
//   readonly flights$ = this.flightsSubject.asObservable();

//   load(from: string, to: string): void {
//     this.flightService.find(from, to).subscribe((flights) => {
//       this.flightsSubject.next(flights);
//     });
//   }
// }
