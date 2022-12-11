import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Luggage } from '../entities/luggage';
import { LuggageDataService } from '../infrastructure/luggage.data.service';

@Injectable({ providedIn: 'root' })
export class CheckinFacade {
  private luggageListSubject = new BehaviorSubject<Luggage[]>([]);
  luggageList$ = this.luggageListSubject.asObservable();

  constructor(private luggageDataService: LuggageDataService) {}

  load(): void {
    this.luggageDataService.load().subscribe({
      next: (luggageList) => {
        this.luggageListSubject.next(luggageList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
