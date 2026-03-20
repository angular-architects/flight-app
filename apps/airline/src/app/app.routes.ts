import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
  path: 'airline',
  loadChildren: () => import('./airline-route')
}];
