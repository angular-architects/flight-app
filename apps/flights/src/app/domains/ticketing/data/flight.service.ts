import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, interval, Observable, switchMap } from 'rxjs';
import { Flight } from './flight';
import { ConfigService } from '@demo/shared/util-config';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);
  private baseUrl = this.configService.config.value()?.baseUrl ?? ''

  find(from: string, to: string, urgent = false): Observable<Flight[]> {
    const url = `${this.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { from, to, urgent };

    return this.http.get<Flight[]>(url, { headers, params });
  }

  findPromise(from: string, to: string, urgent = false): Promise<Flight[]> {
    return firstValueFrom(this.find(from, to, urgent));
  }

  findById(id: string): Observable<Flight> {
    const url = `${this.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { id };

    return this.http.get<Flight>(url, { headers, params });
  }

  createResource(params: () => ({ from: string, to: string } | undefined), intervalMs: number) {
    return rxResource({
      params,
      stream: ({ params: { from, to } }) => interval(intervalMs).pipe(switchMap(() => this.find(from, to)))
    })
  }
}
