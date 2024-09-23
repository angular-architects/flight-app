import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckinService } from '../data';
import { ClickWithWarningDirective } from '../../../domains/shared/ui-common';

// import { } from '../../ticketing/data';

@Component({
  selector: 'app-feature-manage',
  standalone: true,
  imports: [CommonModule, FormsModule, ClickWithWarningDirective],
  templateUrl: './feature-manage.component.html',
  styleUrls: ['./feature-manage.component.css'],
})
export class FeatureManageComponent {
  service = inject(CheckinService);
  ticketNumber = '';

  checkin() {
    this.service.checkin(this.ticketNumber);
  }
}
