import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiCommonComponent } from '@demo/ui-common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, UiCommonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'boarding';
}
