import { HttpClient } from '@angular/common/http';
import {
  inject,
  Injectable,
  resource,
  ResourceRef,
  Signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, Observable } from 'rxjs';
import { Flight } from './flight';
import { ConfigService } from '@demo/shared/util-config';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

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

  findById(id: number): Observable<Flight> {
    const url = `${this.configService.config.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { id };

    return this.http.get<Flight>(url, { headers, params });
  }

  findAsResource(
    filter: Signal<{ from: string; to: string; urgent?: boolean }>
  ): ResourceRef<Flight[] | undefined> {
    return rxResource({
      params: filter,
      stream: ({ params: filter }) =>
        this.find(filter.from, filter.to, filter.urgent),
    });
  }

  findByIdAsResource(id: Signal<number>): ResourceRef<Flight | undefined> {
    return resource({
      params: id,
      loader: ({ params: id, abortSignal }) =>
        fetch([this.configService.config.baseUrl, 'flight', id].join('/'), {
          signal: abortSignal,
        }).then((res) => res.json() as Promise<Flight>),
    });
  }
}
