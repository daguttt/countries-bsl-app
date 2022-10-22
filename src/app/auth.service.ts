import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());
  isLoggedIn$ = this._isLoggedIn.asObservable();

  logIn() {
    sessionStorage.setItem('authenticated', 'true');
    this._isLoggedIn.next(true);
  }

  logOut() {
    sessionStorage.setItem('authenticated', 'false');
    this._isLoggedIn.next(false);
  }

  private isLoggedIn(): boolean {
    return JSON.parse(sessionStorage.getItem('authenticated') ?? 'false');
  }
}
