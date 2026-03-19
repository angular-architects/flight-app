import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CheckinService } from '../data/checkin.service';

// import { HiddenService } from '../data/internal/hidden.service';

// import { Flight } from '../../ticketing/data';

@Component({
  selector: 'app-feature-manage',
  standalone: true,
  imports: [FormsModule],
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
