import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@flight-demo/shared/util-auth';
import { ConfigService } from '@flight-demo/shared/util-config';
import { LoggerService } from '@flight-demo/shared/util-logger';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World!';

  configService = inject(ConfigService);
  authService = inject(AuthService);

  logger = inject(LoggerService);

  constructor() {
    // TODO: In a later lab, we will assure that
    //  loading did happen _before_ we use the config!
    this.configService.loadConfig();
    this.authService.login('Max');

    this.logger.log('Application started');
    this.logger.debug('Manfred was here...');
  }
}
