import { makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { ticketingFeature } from './reducers';
import { provideEffects } from '@ngrx/effects';
import { TicketingEffects } from './effects';

export function provideFlightBooking() {
  return makeEnvironmentProviders([
    provideState(ticketingFeature),
    provideEffects(TicketingEffects),
  ]);
}
