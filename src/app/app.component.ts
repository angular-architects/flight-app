import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import {
  BehaviorSubject,
  filter,
  map,
  merge,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NextFlightsModule } from './next-flights/next-flights.module';
import { ConfigService } from './shared/config.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    NextFlightsModule,
    RouterOutlet,
    AsyncPipe,
    NgIf,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  ngOnInit(): void {
    const obs$ = new Observable<number>((observer) => {
      let counter = 0;
      const handle = setInterval(() => {
        console.log('Observerable', counter);
        observer.next(counter);
        counter++;
      }, 1000);

      return () => {
        console.log('Clear! Bin dann mal weg!');
        clearInterval(handle);
        observer.complete();
      };

      // observer.next(4711);
      // observer.next(815);

      // observer.error('Fehler!');
      // observer.complete();
    });

    // const sub = obs$.subscribe({
    //   next: (value) => console.log('value', value),
    //   error: (err) => console.error('err', err),
    //   complete: () => console.log('habe fertig!'),
    // });

    // setTimeout(() => {
    //   sub.unsubscribe();
    // }, 10_000);

    // setTimeout(() => {
    //   const sub2 = obs$.subscribe({
    //     next: (value) => console.log('value 2', value * 100),
    //     error: (err) => console.error('err', err),
    //     complete: () => console.log('habe fertig!'),
    //   });

    //   setTimeout(() => {
    //     sub2.unsubscribe();
    //   }, 10_000);

    // }, 2000);

    const sub = new BehaviorSubject<number>(14);

    sub.next(15);
    sub.next(16);
    sub.next(17);
    sub.subscribe((next) => console.log('next', next));
    sub.next(18);
  }
}
