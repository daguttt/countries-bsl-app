import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCountryReactiveComponent } from './components/new-country-reactive/new-country-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: NewCountryReactiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveRoutingModule {}
