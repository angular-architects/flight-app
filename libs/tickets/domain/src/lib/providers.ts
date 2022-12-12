import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';

import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ticketsFeature } from './+state/reducer';
import { TicketsEffects } from './+state/effects';

function toProviders(envProviders: EnvironmentProviders): Provider[] {
  return envProviders as unknown as Provider[];
}

export function provideDomain(): EnvironmentProviders {
  return makeEnvironmentProviders([
    toProviders(provideState(ticketsFeature)),
    toProviders(provideEffects(TicketsEffects)),
  ]);
}
