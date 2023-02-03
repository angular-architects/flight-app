import { Injectable } from '@angular/core';
import { DefaultLogFormatter } from './log-formatter';
import { LogLevel } from './log-level';

@Injectable()
export class CustomLogFormatter extends DefaultLogFormatter {
  override format(level: LogLevel, categorie: string, msg: string): string {
    const formatted = super.format(level, categorie, msg);
    const date = new Date().toISOString();
    return `<${date}> ${formatted}`;
  }
}
