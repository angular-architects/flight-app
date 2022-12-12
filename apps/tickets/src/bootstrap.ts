import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { bootstrapApplication } from '@angular/platform-browser';

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

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    importProvidersFrom(MatDialogModule),

    provideStore(),
    provideEffects(),
    isDevMode() ? provideStoreDevtools() : [],
  ],
});
