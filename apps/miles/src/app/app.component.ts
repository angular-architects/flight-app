import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '@flight-demo/util-auth';
import { connectMfRouter } from './mf-utils';

@Component({
  selector: 'flight-demo-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miles-app';
  authService = inject(AuthService);

  constructor() {
    connectMfRouter();
    this.authService.userName.subscribe((userName) => {
      console.log('userName', userName);
    });
  }
}

export default AppComponent;
