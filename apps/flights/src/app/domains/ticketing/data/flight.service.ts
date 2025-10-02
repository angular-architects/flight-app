import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Flight, initFlight } from './flight';
import { ConfigService } from '@demo/shared/util-config';
import {
  httpMutation,
  HttpMutationOptions,
} from '@angular-architects/ngrx-toolkit';

export type Criteria = {
  from: string;
  to: string;
};

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  createResource(criteria: Signal<Criteria>) {
    return httpResource<Flight[]>(
      () => ({
        url: `${this.configService.config.baseUrl}/flight`,
        headers: {
          Accept: 'application/json',
        },
        params: {
          from: criteria().from,
          to: criteria().to,
        },
      }),
      { defaultValue: [] }
    );
  }

  find(from: string, to: string, urgent = false): Observable<Flight[]> {
    const url = `${this.configService.config.baseUrl}/flight`;

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
    const url = `${this.configService.config.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { id };

    return this.http.get<Flight>(url, { headers, params });
  }

  findResourceById(id: Signal<number>) {
    return httpResource<Flight>(
      () =>
        id() === 0
          ? undefined
          : {
              url: 'https://demo.angulararchitects.io/api/flight',
              params: {
                id: id(),
              },
            },
      {
        defaultValue: initFlight,
      }
    );
  }

  createSaveFlight(options: Partial<HttpMutationOptions<Flight, undefined>>) {
    return httpMutation({
      ...options,
      request: (flight: Flight) => ({
        method: 'PUT',
        url: 'https://demo.angulararchitects.io/api/flight/' + flight.id,
        params: {
          id: flight.id,
        },
        body: flight,
      }),
    });
  }
}
