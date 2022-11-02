import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { NewCountryTemplateDrivenComponent } from './components/new-country-template-driven/new-country-template-driven.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewCountryTemplateDrivenComponent],
  imports: [CommonModule, FormsModule, TemplateDrivenRoutingModule],
})
export class TemplateDrivenModule {}
