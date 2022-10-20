import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { isLoggedIn } from '../shared/utils/is-logged-in';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canLoad(): boolean | UrlTree {
    return this.isLoggedIn();
  }

  canActivate(): boolean | UrlTree {
    return this.isLoggedIn();
  }

  private isLoggedIn(): boolean | UrlTree {
    return isLoggedIn() || this.router.createUrlTree(['/login']);
  }
}
