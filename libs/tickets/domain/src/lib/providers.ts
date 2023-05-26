import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ticketsFeature } from './+state/reducer';

export function provideDomain(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(ticketsFeature),
    provideEffects(),
  ]);
}
