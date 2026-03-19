import { Component } from '@angular/core';

import { LoggerService } from '@demo/shared/util-logger';

@Component({
  selector: 'app-passenger-search',
  standalone: true,
  imports: [],
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
})
export class PassengerSearchComponent {
  constructor(logger: LoggerService) {
    logger.info('passenger search', 'info');
  }
}
