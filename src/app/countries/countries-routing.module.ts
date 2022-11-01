import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './component/country-list/country-list.component';
import { NewCountryReactiveComponent } from './components/new-country-reactive/new-country-reactive.component';
import { PageCountriesComponent } from './pages/page-countries/page-countries.component';

const routes: Routes = [
  {
    path: '',
    component: PageCountriesComponent,
    children: [
      {
        path: 'list',
        component: CountryListComponent,
      },
      {
        path: 'create',
        component: NewCountryReactiveComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
