import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthService } from '@flight-demo/util-auth';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'flight-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'miles';
  authService = inject(AuthService);

  constructor() {
    this.authService.userName.subscribe((userName) => {
      console.log('userName', userName);
    });
  }
}

export default AppComponent;
