import { Component, OnInit } from '@angular/core';
import { Country, CountryLike } from '../../models/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styles: [],
})
export class CountryListComponent implements OnInit {
  countries: (Country | CountryLike)[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    if (this.countriesService.countries.length) {
      this.countries = this.countriesService.countries;
      return;
    }
    this.countriesService.getAllCountries().subscribe(() => {
      this.countries = this.countriesService.countries;
    });
  }
}
