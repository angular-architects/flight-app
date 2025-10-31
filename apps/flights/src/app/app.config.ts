import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideLogger, LogLevel, withColor } from '@demo/shared/util-logger';
import { NextFlightsModule } from '@demo/ticketing/feature-next-flights';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(APP_ROUTES,
      withComponentInputBinding()
    ),
    importProvidersFrom(MatDialogModule, NextFlightsModule),
    provideLogger({ level: LogLevel.DEBUG }, withColor()),
  ],
};
