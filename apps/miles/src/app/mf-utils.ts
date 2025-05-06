import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function connectMfRouter(router = inject(Router)): void {
  performRouting(router);

  window.addEventListener('route', () => {
    performRouting(router);
  });
}

function performRouting(router: Router) {
  const url = `${location.pathname.substring(1)}${location.search}`;
  router.navigateByUrl(url);
}
