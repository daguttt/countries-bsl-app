import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  get isLoggedIn$(): Observable<boolean> {
    return this.authService.isLoggedIn$;
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
