import { inject, Injectable } from '@angular/core';
import { AuthService } from '@demo/shared/util-auth';

@Injectable({
  providedIn: 'root',
})
export class CheckinService {
  auth = inject(AuthService);

  checkin(ticketNumber: string): void {
    console.log('checking in', ticketNumber, this.auth.userName);
  }
}
