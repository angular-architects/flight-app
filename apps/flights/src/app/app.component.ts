import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter, map, merge, Observable } from 'rxjs';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { ConfigService } from './domains/shared/util-config';
import { AuthService } from '@flight-demo/util-auth';
import { connectShellRouter } from './mf-utils';

@Component({
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, RouterOutlet, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World!';
  configService = inject(ConfigService);
  router = inject(Router);
  loading$: Observable<boolean>;

  auth = inject(AuthService);

  constructor() {
    this.auth.login('Max Mustermann');

    connectShellRouter();

    // TODO: In a later lab, we will assure that
    //  loading did happen _before_ we use the config!
    this.configService.loadConfig();

    const stop$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationEnd ||
          e instanceof NavigationError ||
          e instanceof NavigationCancel
      ),
      map(() => false)
    );

    const start$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationStart),
      map(() => true)
    );

    this.loading$ = merge(start$, stop$);
  }
}
