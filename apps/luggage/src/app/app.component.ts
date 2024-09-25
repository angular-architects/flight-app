import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LuggageFeatureCheckinComponent } from '@flight-demo/luggage/feature-checkin';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LuggageFeatureCheckinComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'luggage';
}
