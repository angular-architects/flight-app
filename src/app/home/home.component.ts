import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../shared/logger/logger';
import { CustomLogAppender } from '../shared/logger/custom-log-appender';

@Component({
    selector: 'app-home',
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logger = inject(LoggerService);

  constructor() {
    this.logger.debug('home', 'debug');
    this.logger.info('home', 'info');
    this.logger.error('home', 'error');
  }
}
