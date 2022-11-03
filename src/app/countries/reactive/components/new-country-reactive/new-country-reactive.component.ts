import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-new-country-reactive',
  templateUrl: './new-country-reactive.component.html',
  styles: [],
})
export class NewCountryReactiveComponent implements OnInit {
  newCountryForm = new FormGroup({
    name: new FormControl('Nombre país a editar', Validators.required),
    capital: new FormControl('Nombre capital a editar'),
  });

  get name(): FormControl {
    return this.newCountryForm.get('name') as FormControl;
  }

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newCountryForm.setValue({
      name: 'Otro país a editar',
      capital: 'Otra capital a editar',
    });
  }

  onSubmit() {
    const newCountry = this.newCountryForm?.value;
    this.countriesService.createCountry({
      name: {
        common: newCountry.name ?? '',
        official: newCountry.name ?? '',
      },
      capital: [`${newCountry.capital ?? ''} City`],
      flags: {
        svg: 'https://flagcdn.com/co.svg',
      },
    });
    this.router.navigate(['/countries/list']);
  }
}
