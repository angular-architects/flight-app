import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { NextFlightsModule } from './app/next-flights/next-flights.module';

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection()],
});
