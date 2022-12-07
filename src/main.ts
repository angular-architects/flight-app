import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { DefaultFlightService } from './app/flight-search/default-flight.service';
import { FlightService } from './app/flight-search/flight.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    {
      provide: FlightService,
      useClass: DefaultFlightService,
    },
  ],
});
