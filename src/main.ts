import { importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NextFlightsModule } from './app/next-flights/next-flights.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    importProvidersFrom(NextFlightsModule),
    importProvidersFrom(MatDialogModule),
  ],
});
