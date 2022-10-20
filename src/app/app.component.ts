import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isLoggedIn } from './shared/utils/is-logged-in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return isLoggedIn();
  }

  logOut(): void {
    sessionStorage.setItem('authenticated', 'false');
    this.router.navigate(['/login']);
  }
}
