import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCountryTemplateDrivenComponent } from './components/new-country-template-driven/new-country-template-driven.component';

const routes: Routes = [
  {
    path: '',
    component: NewCountryTemplateDrivenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateDrivenRoutingModule {}
