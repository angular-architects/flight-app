import { Injectable, inject } from '@angular/core';
import { DataService } from '@angular-architects/ngrx-toolkit';
import { Passenger } from './passenger';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '@demo/shared/util-config';
import { firstValueFrom } from 'rxjs';

export type PassengerFilter = {
  firstName: string;
  name: string;
};

@Injectable({ providedIn: 'root' })
export class PassengerService
  implements DataService<Passenger, PassengerFilter>
{
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  load(filter: PassengerFilter): Promise<Passenger[]> {
    const url = `${this.configService.config.baseUrl}/passenger`;
    const headers = { Accept: 'application/json' };
    const options = { headers, params: filter };
    return firstValueFrom(this.http.get<Passenger[]>(url, options));
  }

  // Not implemented for the sake of simplicity
  loadById(): Promise<Passenger> {
    throw new Error('Method not implemented.');
  }
  create(): Promise<Passenger> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<Passenger> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
