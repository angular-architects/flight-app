import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'checkin',
  },
  {
    path: 'checkin',
    loadChildren: () =>
      import('@flight-demo/luggage/feature-checkin').then(
        (m) => m.CHECKIN_ROUTES
      ),
  },
  {
    path: 'report-loss',
    loadChildren: () =>
      import('@flight-demo/luggage/feature-report-loss').then(
        (m) => m.REPORT_LOSS_ROUTES
      ),
  },
];
