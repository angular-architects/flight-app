import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ticketingActions } from './+state/actions';
import { selectFilteredFlights } from './+state/selectors';
import { addMinutes } from '@demo/shared/util-common';

// function equal(a:unknown, b:unknown) {
//     return a === b;
// }

// -- 4 --
@Injectable({ providedIn: 'root' })
export class FlightBookingFacade {
  private store = inject(Store);
  readonly flights = this.store.selectSignal(selectFilteredFlights);

  async load(from: string, to: string): Promise<void> {
    this.store.dispatch(ticketingActions.loadFlights({ from, to }));
  }

  delay(): void {
    const date = addMinutes(this.flights()[0].date, 15);
    const flight = {
      ...this.flights()[0],
      date,
    };
    this.store.dispatch(ticketingActions.updateFlight({ flight }));
  }
}

// -- 3 --
// @Injectable({providedIn: 'root'})
// export class FlightBookingFacade {

//     private store = inject(Store);
//     private flightService = inject(FlightService);

//     readonly flights = this.store.selectSignal(selectFilteredFlights);

//     async load(from: string, to: string): Promise<void> {
//         const flights = await this.flightService.findPromise(from, to);
//         this.store.dispatch(ticketingActions.flightsLoaded({ flights }));
//     }

// }

// -- 2 --
// @Injectable({providedIn: 'root'})
// export class FlightBookingFacade {

//     private store = inject(Store);
//     private flightService = inject(FlightService);

//     readonly flights = this.store.selectSignal(ticketingFeature.selectFlights);

//     async load(from: string, to: string): Promise<void> {
//         const flights = await this.flightService.findPromise(from, to);
//         this.store.dispatch(ticketingActions.flightsLoaded({ flights }));
//     }

// }

// -- 1 --
// @Injectable({providedIn: 'root'})
// export class FlightBookingFacade {

//     private flightService = inject(FlightService);

//     private state = signal({
//         flights: [] as Flight[],
//         from: 'Hamburg',
//         to: 'Graz'
//     });

//     readonly flights = computed(() => this.state().flights, { equal });

//     async load(from: string, to: string): Promise<void> {
//         const flights = await this.flightService.findPromise(from, to);
//         this.state.update(state => ({
//             ...state,
//             flights
//         }))
//     }

// }
