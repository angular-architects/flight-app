import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LossReport } from '../entities/loss-report';
import { LossReportDataService } from '../infrastructure/loss-report.data.service';

@Injectable({ providedIn: 'root' })
export class ReportLossFacade {
  private lossReportListSubject = new BehaviorSubject<LossReport[]>([]);
  lossReportList$ = this.lossReportListSubject.asObservable();

  constructor(private lossReportDataService: LossReportDataService) {}

  load(): void {
    this.lossReportDataService.load().subscribe({
      next: (lossReportList) => {
        this.lossReportListSubject.next(lossReportList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
