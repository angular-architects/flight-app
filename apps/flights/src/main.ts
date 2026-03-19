import { provideHttpClient } from '@angular/common/http';
import {
  createEnvironmentInjector,
  effect,
  EnvironmentInjector,
  importProvidersFrom,
  inject,
  provideAppInitializer,
} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { NextFlightsModule } from '@demo/ticketing/feature-next-flights';
import { LogLevel, provideLogger, withColor } from '@demo/shared/util-logger';
import { ConfigService } from '@demo/shared/util-config';

bootstrapApplication(AppComponent, {
  providers: [
    // provideZoneChangeDetection(),
    provideHttpClient(),
    provideRouter(APP_ROUTES),
    importProvidersFrom(NextFlightsModule),
    importProvidersFrom(MatDialogModule),
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      const parentInjector = inject(EnvironmentInjector);
      const childInjector = createEnvironmentInjector([], parentInjector);

      // Old observable variant:
      // return toObservable(configService.config.status)
      //   .pipe(filter((status) => status === 'resolved'), first());

      return new Promise<void>((resolve) => {
        effect(() => {
          const status = configService.config.status();

          if (status === 'resolved') {
            resolve();
            childInjector.destroy();
          }
        }, { injector: childInjector });
      });
    }),

    provideLogger(
      {
        level: LogLevel.DEBUG,
      },
      withColor()
    ),
  ],
});
