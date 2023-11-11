import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { NextFlightsModule } from '@demo/ticketing/feature-next-flights';
import { LogLevel, provideLogger, withColor } from '@demo/shared/util-logger';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(APP_ROUTES),
    importProvidersFrom(NextFlightsModule),
    importProvidersFrom(MatDialogModule),

    provideLogger(
      {
        level: LogLevel.DEBUG,
      },
      withColor()
    ),
  ],
});

export type IsUnknownRecord<T> = string extends keyof T
  ? true
  : number extends keyof T
  ? true
  : false;
export type HasOptionalProps<T> = T extends Required<T> ? false : true;
export type HasFunctionKeys<T> = T extends Record<string, unknown>
  ? {
      // eslint-disable-next-line @typescript-eslint/ban-types
      [K in keyof T]: K extends keyof Function ? true : HasFunctionKeys<T[K]>;
    }[keyof T]
  : false;
export type HasNestedFunctionKeys<T> = {
  [K in keyof T]: HasFunctionKeys<T[K]>;
}[keyof T];

type WithStateCheck<State> = IsUnknownRecord<State> extends true
  ? '@ngrx/signals: root state keys must be string literals'
  : HasOptionalProps<State> extends true
  ? '@ngrx/signals: root state slices cannot be optional'
  : HasNestedFunctionKeys<State> extends false | undefined
  ? unknown
  : '@ngrx/signals: nested state slices cannot contain `Function` property or method names';

const x: WithStateCheck<{ myProperty: number }> = {
  myProperty: 1,
};

function convert(x: unknown) {
  return x as WithStateCheck<{ [x: string]: number }>;
}

const y: WithStateCheck<{ [x: string]: number }> = convert({
  ['myProperty']: 1,
});

function createState<T extends WithStateCheck<T> & Record<string, unknown>>(
  state: T
): WithStateCheck<T> & Record<string, unknown> {
  return state;
}
const dynamicY = createState({ myProperty: 1 });

function withState<State extends Record<string, unknown>>(state: State) {
  console.log(state);
}

withState(dynamicY);

console.log('x', x);
console.log('y', y);
