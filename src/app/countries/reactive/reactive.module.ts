import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { NewCountryReactiveComponent } from './components/new-country-reactive/new-country-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewCountryReactiveComponent],
  imports: [CommonModule, ReactiveFormsModule, ReactiveRoutingModule],
})
export class ReactiveModule {}
