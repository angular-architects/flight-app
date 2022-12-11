import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReportLossFacade } from '@flight-demo/luggage/domain';

@Component({
  selector: 'luggage-report-loss',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-loss.component.html',
  styleUrls: ['./report-loss.component.scss'],
})
export class ReportLossComponent implements OnInit {
  lossReportList$ = this.reportLossFacade.lossReportList$;

  constructor(private reportLossFacade: ReportLossFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.reportLossFacade.load();
  }
}
