import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './shell/about/about.component';
import { HomeComponent } from './shell/home/home.component';
import { BasketComponent } from './shell/basket/basket.component';
import { NotFoundComponent } from './shell/not-found/not-found.component';
import { ConfigService } from './domains/shared/util-config';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux',
  },
  {
    path: 'miles',
    loadChildren: () => loadRemoteModule('miles', './Routes'),
  },
  {
    path: '',
    resolve: {
      config: () => inject(ConfigService).loaded$,
    },
    children: [
      {
        path: 'flight-booking',
        loadChildren: () =>
          import('./domains/ticketing/feature-booking').then(
            (m) => m.FLIGHT_BOOKING_ROUTES
          ),
      },
      {
        path: 'next-flights',
        loadChildren: () =>
          import('./domains/ticketing/feature-next-flights').then(
            (m) => m.NextFlightsModule
          ),
      },
      {
        path: 'about',
        component: AboutComponent,
      },

      // This _needs_ to be the last route!!
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];
