import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { DefaultFlightService } from './app/flight-search/default-flight.service';
import { FlightService } from './app/flight-search/flight.service';

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection()],
});
