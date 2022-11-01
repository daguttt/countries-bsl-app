import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country-reactive.component.html',
  styles: [],
})
export class NewCountryReactiveComponent {
  newCountryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    capital: new FormControl(''),
  });

  get name(): FormControl {
    return this.newCountryForm.get('name') as FormControl;
  }

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}
  onSubmit() {
    const newCountry = this.newCountryForm?.value;
    this.countriesService.createCountry({
      name: {
        common: newCountry.name ?? '',
        official: newCountry.name ?? '',
      },
      capital: [newCountry.capital ?? ''],
      flags: {
        svg: 'https://flagcdn.com/co.svg',
      },
    });
    this.router.navigate(['/countries/list']);
  }
}
