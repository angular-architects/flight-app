import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './shell/about/about.component';
import { HomeComponent } from './shell/home/home.component';
import { BasketComponent } from './shell/basket/basket.component';
import { ConfigService } from '@demo/shared/util-config';
import { NotFoundComponent } from './shell/not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { FeatureManageComponent } from '@demo/checkin/feature-manage';

import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

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
    path: 'angular2',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry:
        'https://gray-pond-030798810.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular2',
      exposedModule: './web-components',
      elementName: 'angular2-element',
    } as WebComponentWrapperOptions,
  },

  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },

  {
    matcher: startsWith('angular3'),
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry:
        'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular3',
      exposedModule: './web-components',
      elementName: 'angular3-element',
    } as WebComponentWrapperOptions,
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
        path: 'checkin',
        component: FeatureManageComponent,
      },
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
          import('@demo/ticketing/feature-next-flights').then(
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
