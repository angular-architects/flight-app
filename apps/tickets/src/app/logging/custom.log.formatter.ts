import { Injectable } from '@angular/core';
import { LogFormatter } from '@flight-demo/shared/util-logger';

@Injectable()
export class CustomLogFormatter extends LogFormatter {
  format(message: string): string {
    const date = new Date().toISOString();
    return JSON.stringify({ date, message }, null, 2);
  }
}
