import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from 'auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miles-app';
  authService = inject(AuthService);

  constructor() {
    this.authService.userName.subscribe((userName) => {
      console.log('userName', userName);
    });
  }
}

export default AppComponent;
