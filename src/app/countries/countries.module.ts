import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { PageCountriesComponent } from './pages/page-countries/page-countries.component';

@NgModule({
  declarations: [PageCountriesComponent],
  imports: [CommonModule, CountriesRoutingModule, NgOptimizedImage],
})
export class CountriesModule {}
