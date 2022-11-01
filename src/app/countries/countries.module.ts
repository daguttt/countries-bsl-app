import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';
import { PageCountriesComponent } from './pages/page-countries/page-countries.component';
import { CountryListComponent } from './component/country-list/country-list.component';
import { NewCountryReactiveComponent } from './components/new-country-reactive/new-country-reactive.component';

@NgModule({
  declarations: [
    PageCountriesComponent,
    CountryListComponent,
    NewCountryReactiveComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountriesRoutingModule,
    NgOptimizedImage,
  ],
})
export class CountriesModule {}
