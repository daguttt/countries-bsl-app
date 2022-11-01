import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country-template-driven.component.html',
  styles: [],
})
export class NewCountryComponentTemplateDriven {
  @ViewChild('newCountry') newCountryForm: NgForm | undefined;

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  onSubmit() {
    const newCountry: { name: string; capital: string } =
      this.newCountryForm?.value;
    this.countriesService.createCountry({
      name: {
        common: newCountry.name,
        official: newCountry.name,
      },
      capital: [newCountry.capital],
      flags: {
        svg: 'https://flagcdn.com/co.svg',
      },
    });
    this.router.navigate(['/countries/list']);
  }
}
