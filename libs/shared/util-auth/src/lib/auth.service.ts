import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject('');
  readonly currentUser$ = this.currentUserSubject.asObservable();

  login(userName: string) {
    // Login for honest people
    this.currentUserSubject.next(userName);
  }
}
