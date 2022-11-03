import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'app-new-country-template-driven',
  templateUrl: './new-country-template-driven.component.html',
  styles: [],
})
export class NewCountryTemplateDrivenComponent implements OnInit {
  @ViewChild('newCountry') newCountryForm: NgForm | undefined;

  initialNewCountry = {
    name: 'Nombre país a editar',
    capital: 'Nombre capital a editar',
  };

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initialNewCountry.name = 'Otro país a editar';
    this.initialNewCountry.capital = 'Otra capital a editar';
  }

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
