import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../shared/logger/logger';
import { CustomLogAppender } from '../shared/logger/custom-log-appender';
import { AuthService } from '../shared/auth/auth.service';
import { FlightTypeaheadComponent } from '../flight-typeahead/flight-typeahead.component';
import { Store } from '@ngrx/store';
import { addPassenger } from '../passengers/passenger.actions';
import { passengersFeature } from '../passengers/passenger.reducer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FlightTypeaheadComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  logger = inject(LoggerService);
  auth = inject(AuthService);
  store = inject(Store);

  constructor() {
    this.store.dispatch(
      addPassenger({
        passenger: {
          id: '1',
          firstName: 'Max',
          lastName: 'Muster',
        },
      })
    );

    this.store.dispatch(
      addPassenger({
        passenger: {
          id: '2',
          firstName: 'Susi',
          lastName: 'Sorglos',
        },
      })
    );

    this.store.select(passengersFeature.selectAll).subscribe((p) => {
      console.log('passengers', p);
    });

    this.logger.debug('home', 'debug');
    this.logger.info('home', 'info');
    this.logger.error('home', 'error');
  }
}
