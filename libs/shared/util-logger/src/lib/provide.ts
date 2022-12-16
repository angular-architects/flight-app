import {
  Provider,
  Type,
  makeEnvironmentProviders,
  EnvironmentProviders,
} from '@angular/core';
import { DefaultLogFormatter, LogFormatter } from './log.formatter';
import { LoggerConfig } from './logger.config';

export function provideLogger(
  config: LoggerConfig = { debug: false },
  formatterClass: Type<LogFormatter> = DefaultLogFormatter
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: LoggerConfig,
      useValue: config,
    },
    {
      provide: LogFormatter,
      useClass: formatterClass,
    },
  ]);
}
