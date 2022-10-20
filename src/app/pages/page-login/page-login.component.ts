import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
})
export class PageLoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logIn(): void {
    sessionStorage.setItem('authenticated', 'true');
    this.router.navigate(['/countries']);
  }
}
