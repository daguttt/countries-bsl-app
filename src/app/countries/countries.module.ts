import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { PageCountriesComponent } from './pages/page-countries/page-countries.component';

@NgModule({
  declarations: [PageCountriesComponent],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}
