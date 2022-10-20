import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCountriesComponent } from './pages/page-countries/page-countries.component';

const routes: Routes = [
  {
    path: '',
    component: PageCountriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
