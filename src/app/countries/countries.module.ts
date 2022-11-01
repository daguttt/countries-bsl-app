import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';
import { PageCountriesComponent } from './pages/page-countries/page-countries.component';
import { NewCountryComponentTemplateDriven } from './component/new-country-template-driven/new-country-template-driven.component';
import { CountryListComponent } from './component/country-list/country-list.component';

@NgModule({
  declarations: [
    PageCountriesComponent,
    NewCountryComponentTemplateDriven,
    CountryListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CountriesRoutingModule,
    NgOptimizedImage,
  ],
})
export class CountriesModule {}
