import { Injectable } from '@angular/core';

@Injectable()
export abstract class LogFormatter {
  abstract format(message: string): string;
}

@Injectable()
export class DefaultLogFormatter extends LogFormatter {
  format(message: string): string {
    const date = new Date().toISOString();
    return `[${date}] ${message}`;
  }
}
