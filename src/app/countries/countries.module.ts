import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';
import { PageCountriesComponent } from './pages/page-countries/page-countries.component';
import { CountryListComponent } from './components/country-list/country-list.component';

@NgModule({
  declarations: [PageCountriesComponent, CountryListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountriesRoutingModule,
    NgOptimizedImage,
  ],
})
export class CountriesModule {}
