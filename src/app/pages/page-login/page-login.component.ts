import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
})
export class PageLoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logIn(): void {
    this.authService.logIn();
    this.router.navigate(['/countries']);
  }
}
