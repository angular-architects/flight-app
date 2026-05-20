import { provideHttpClient } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomePage } from './app/home-page';
import { NotFoundPage } from './app/not-found-page';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideHttpClient(),
    provideRouter(
      [
        { path: '', component: HomePage },
        {
          path: 'flight-search',
          loadComponent: () =>
            import('./app/flight-search/flight-search.component'),
        },
        {
          path: 'flight-edit/:id',
          loadComponent: () => import('./app/flight-edit-page'),
        },
        { path: '**', component: NotFoundPage },
      ],
      withComponentInputBinding(),
    ),
  ],
});
