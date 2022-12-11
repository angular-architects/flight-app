import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ticket } from '../entities/ticket';

@Injectable({ providedIn: 'root' })
export class TicketDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Ticket[]> {
    return of([
      {
        id: 1,
        name: 'London - Paris',
        description: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 2,
        name: 'Paris - London',
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        name: 'London - Berlin',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
    ]);
  }
}
