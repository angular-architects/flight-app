import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ManageComponent } from '@flight-demo/checkin/feature-manage';

@Component({
  standalone: true,
  imports: [CommonModule, ManageComponent],
  selector: 'flight-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'checkin';
}
