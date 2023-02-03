import { Type } from '@angular/core';
import { DefaultLogFormatter, LogFormatter } from './log-formatter';
import { LogLevel } from './log-level';

export abstract class LoggerConfig {
  abstract level: LogLevel;
  abstract chaining: boolean;
  abstract formatter: Type<LogFormatter>;
}

export const defaultConfig: LoggerConfig = {
  level: LogLevel.DEBUG,
  chaining: false,
  formatter: DefaultLogFormatter,
};
