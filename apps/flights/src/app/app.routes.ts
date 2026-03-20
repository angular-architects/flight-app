import { Routes } from '@angular/router';
import { FeatureManageComponent } from '@demo/checkin/feature-manage/feature-manage.component';
import { AboutComponent } from './shell/about/about.component';
import { BasketComponent } from './shell/basket/basket.component';
import { HomeComponent } from './shell/home/home.component';
import { NotFoundComponent } from './shell/not-found/not-found.component';

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
    children: [
      {
        path: 'luggage',
        loadChildren: () =>
          import('./domains/luggage/feature-checkin').then(
            (m) => m.FEATURE_CHECKIN_ROUTES
          ),
      },
      {
        path: 'checkin',
        component: FeatureManageComponent,
      },
      {
        path: 'flight-booking',
        loadChildren: () =>
          import('@demo/ticketing/feature-booking').then(
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
        path: 'airline',
        loadComponent: () =>
          import('./domains/ticketing/feature-airline/airline.component').then(
            (m) => m.AirlineComponent
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
