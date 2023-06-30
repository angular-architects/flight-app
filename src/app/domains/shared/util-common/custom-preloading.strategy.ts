import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { delay, Observable, of, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<unknown>): Observable<unknown> {
    return of(true).pipe(
      delay(7000),
      switchMap(() => fn())
    );
  }
}
