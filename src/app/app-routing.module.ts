import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCountriesComponent } from './pages/page-countries/page-countries.component';

const routes: Routes = [
  {
    path: 'countries',
    component: PageCountriesComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'countries',
  },
  {
    path: '**',
    redirectTo: 'countries',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
