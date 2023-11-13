import { AsyncPipe, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  inject,
} from '@angular/core';
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
import { ConfigService } from '@demo/shared/util-config';

@Component({
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, RouterOutlet, AsyncPipe, NgIf],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  title = 'Hello World!';
  configService = inject(ConfigService);
  router = inject(Router);
  loading$: Observable<boolean>;

  constructor() {
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

  blink() {
    // Dirty Hack used to visualize the change detector
    this.element.nativeElement.querySelector('#info').style.backgroundColor =
      'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.querySelector(
          '#info'
        ).style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }
}
