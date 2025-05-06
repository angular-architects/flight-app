import { inject } from '@angular/core';
import { NavigationEnd, Router, UrlMatcher, UrlSegment } from '@angular/router';
import { filter } from 'rxjs';

export function startsWith(path: string): UrlMatcher {
  return (segments: UrlSegment[]) => {
    return segments[0].path === path
      ? { consumed: segments }
      : { consumed: [] };
  };
}

export function connectShellRouter(router = inject(Router)): void {
  router.events
    .pipe(filter((e) => e instanceof NavigationEnd))
    .subscribe(() => {
      window.dispatchEvent(new CustomEvent('route'));
    });
}
