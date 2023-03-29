import {
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ConfigService } from '../config.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const configService = inject(ConfigService);
  const router = inject(Router);
  const url = `${configService.config.baseUrl}/`;

  if (req.url.startsWith(url)) {
    const headers = req.headers.append('Authorization', 'Bearer ABCDEFG');
    req = req.clone({ headers });
  }

  return next(req).pipe(
    tap((resp) => console.log('resp', resp)),
    catchError((err) => handleError(err, router))
  );
};

function handleError(
  err: unknown,
  router: Router
): Observable<HttpEvent<unknown>> {
  if (err instanceof HttpErrorResponse) {
    const authError = err.status === 401 || err.status === 403;

    if (authError) {
      router.navigate(['/home', { login: true }]);
    }
  }

  return throwError(() => err);
}
