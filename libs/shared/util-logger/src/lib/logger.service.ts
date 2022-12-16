import { inject, Injectable } from '@angular/core';
import { LogFormatter } from './log.formatter';
import { LoggerConfig } from './logger.config';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  private formatter = inject(LogFormatter);
  private config = inject(LoggerConfig);

  log(message: string): void {
    console.log(this.formatter.format(message));
  }

  debug(message: string): void {
    if (this.config.debug) {
      // eslint-disable-next-line no-restricted-syntax
      console.debug(this.formatter.format(message));
    }
  }
}
