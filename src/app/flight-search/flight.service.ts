import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight';
import { ConfigService } from '../shared/config.service';

@Injectable({ providedIn: 'root' })
export class FlightService {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  find(from: string, to: string): Observable<Flight[]> {
    const url = `${this.configService.config.baseUrl}/flight`;
    // Alternative: const url = this.configService.config.baseUrl + '/flight';

    const headers = {
      Accept: 'application/json',
    };

    const params = { from, to };
    // Same as: const params = { from: from, to: to };

    return this.http.get<Flight[]>(url, { headers, params });
  }
}
