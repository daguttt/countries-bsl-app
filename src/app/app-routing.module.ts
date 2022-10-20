import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const routes: Routes = [
  {
    path: 'countries',
    canLoad: [IsLoggedInGuard],
    loadChildren: () =>
      import('./countries/countries.module').then((m) => m.CountriesModule),
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'login',
    component: PageLoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
