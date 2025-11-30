import { Component } from '@angular/core';
import { LoggerService } from 'src/app/shared/logger/logger';

@Component({
  selector: 'app-passenger-search',
  imports: [],
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
})
export class PassengerSearchComponent {
  constructor(logger: LoggerService) {
    logger.info('passenger search', 'info');
  }
}
