import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LossReport } from '../entities/loss-report';

@Injectable({ providedIn: 'root' })
export class LossReportDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<LossReport[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<LossReport[]>(url, {params, headers});
        */

    return of([
      {
        id: 1,
        name: 'black suite case',
        description: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 2,
        name: 'blue suite case',
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        name: 'silve suite case',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
    ]);
  }
}
