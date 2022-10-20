import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { isLoggedIn } from '../shared/utils/is-logged-in';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivate, CanLoad {
  canLoad(): boolean {
    return isLoggedIn();
  }

  canActivate(): boolean {
    return isLoggedIn();
  }
}
