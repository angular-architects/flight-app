import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideRouter } from '@angular/router';
import { provideLogger, LogLevel, withColor } from '@demo/shared/util-logger';
import { NextFlightsModule } from '@demo/ticketing/feature-next-flights';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(APP_ROUTES),
    importProvidersFrom(MatDialogModule, NextFlightsModule),
    provideLogger({ level: LogLevel.DEBUG }, withColor()),
  ],
};
