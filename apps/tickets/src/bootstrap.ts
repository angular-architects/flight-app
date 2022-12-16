import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import {
  DefaultLogFormatter,
  LogFormatter,
  LoggerConfig,
  provideLogger,
} from '@flight-demo/shared/util-logger';
import { CustomLogFormatter } from './app/logging/custom.log.formatter';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),

    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),

    provideLogger({ debug: true }, CustomLogFormatter),

    importProvidersFrom(MatDialogModule),
    importProvidersFrom(MatSnackBarModule),
    provideAnimations(),

    provideStore(),
    provideEffects(),
    isDevMode() ? provideStoreDevtools() : [],
  ],
});
