import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
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
        children: [
          {
            path: 'template-driven',
            loadChildren: () =>
              import('./template-driven/template-driven.module').then(
                (m) => m.TemplateDrivenModule
              ),
          },
          {
            path: 'reactive',
            loadChildren: () =>
              import('./reactive/reactive.module').then(
                (m) => m.ReactiveModule
              ),
          },
        ],
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
