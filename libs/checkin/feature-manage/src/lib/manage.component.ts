import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageFacade } from '@flight-demo/checkin/domain';
import { CityPipe } from '@flight-demo/shared/ui-common';
import { CityValidatorDirective } from '@flight-demo/shared/util-validation';

@Component({
  standalone: true,
  imports: [CommonModule, CityPipe, CityValidatorDirective],
  selector: 'checkin-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  ticketList$ = this.manageFacade.ticketList$;

  constructor(private manageFacade: ManageFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageFacade.load();
  }
}
