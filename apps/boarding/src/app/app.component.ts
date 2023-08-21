import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiCommonComponent } from '@workspace/ui-common';
import { UtilCommonComponent } from '@workspace/util-common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, UiCommonComponent, UtilCommonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'booking';
}
