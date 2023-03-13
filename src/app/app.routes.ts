import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConfigService } from './shared/config.service';

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
    path: '',
    resolve: {
      config: () => inject(ConfigService).loaded$,
    },
    children: [
      {
        path: 'flight-booking',
        loadChildren: () => import('./flight-booking/flight-booking.routes'),
      },
      {
        path: 'next-flights',
        loadChildren: () =>
          import('./next-flights/next-flights.module').then(
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
