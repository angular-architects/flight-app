import { Component, inject } from '@angular/core';
import { AuthService } from '@flight-demo/util-auth';

@Component({
  standalone: true,
  imports: [],
  selector: 'flight-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  authService = inject(AuthService);

  title = 'miles';

  constructor() {
    this.authService.userName.subscribe((userName) => {
      console.log('userName', userName);
    });
  }
}

export default AppComponent;
