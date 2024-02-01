import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Flight } from './flight';
import { ConfigService } from '@demo/shared/util-config';
import { DataService } from '@angular-architects/ngrx-toolkit';

export type FlightFilter = {
  from: string;
  to: string;
};

@Injectable({
  providedIn: 'root',
})
export class FlightService implements DataService<Flight, FlightFilter> {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  // To keep this example simple, we just delegate to
  // the already existing methods

  load(filter: FlightFilter): Promise<Flight[]> {
    return this.findPromise(filter.from, filter.to);
  }

  loadById(id: string): Promise<Flight> {
    return this.findPromiseById(id);
  }

  // Also, for the sake of simplicity, we don't
  // implement these methods

  create(): Promise<Flight> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<Flight> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<void> {
    throw new Error('Method not implemented.');
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

  findPromiseById(id: string): Promise<Flight> {
    return firstValueFrom(this.findById(id));
  }
}
