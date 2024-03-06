import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isFlightManager(): boolean {
    return true;
  }
}
