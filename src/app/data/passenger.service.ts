import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, ResourceRef, Signal } from '@angular/core';
import { initPassenger, Passenger } from '../model/passenger';
import { Observable } from 'rxjs';

function isActive(name: string) {
  if (name !== '') {
    return true;
  }
  return false;
}

@Injectable({ providedIn: 'root' })
export class PassengerService {
  private http = inject(HttpClient);

  findByName(
    name: Signal<string>,
    firstName: Signal<string>,
  ): ResourceRef<Passenger[]> {
    return httpResource<Passenger[]>(
      () =>
        !isActive(name())
          ? undefined
          : {
              url: `https://demo.angulararchitects.io/api/passenger`,
              params: {
                name: name(),
                firstName: firstName(),
              },
            },
      { defaultValue: [] },
    );
  }

  findById(id: Signal<number>): ResourceRef<Passenger> {
    return httpResource<Passenger>(
      () => ({
        url: `https://demo.angulararchitects.io/api/passenger`,
        params: {
          id: id(),
        },
      }),
      { defaultValue: initPassenger },
    );
  }

  save(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(
      `https://demo.angulararchitects.io/api/passenger/${passenger.id}`,
      passenger,
    );
  }
}
