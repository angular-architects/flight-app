import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerConfig } from './logger.config';
import { DefaultLogFormatter, LogFormatter } from './log.formatter';
import { provideLogger } from './provide';

@NgModule({
  imports: [CommonModule],
})
export class SharedUtilLoggerModule {
  static forRoot(
    config: LoggerConfig = { debug: false },
    formatter: Type<LogFormatter> = DefaultLogFormatter
  ): ModuleWithProviders<SharedUtilLoggerModule> {
    return {
      ngModule: SharedUtilLoggerModule,
      providers: [...provideLogger(config, formatter)],
    };
  }
}
