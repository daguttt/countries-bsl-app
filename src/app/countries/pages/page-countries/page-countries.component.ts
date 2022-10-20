import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/countries/models/country.interface';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'app-page-countries',
  templateUrl: './page-countries.component.html',
})
export class PageCountriesComponent implements OnInit, OnDestroy {
  countries$!: Observable<Country[]>;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries$ = this.countriesService.getAllCountries();
  }

  ngOnDestroy(): void {
    sessionStorage.setItem('authenticated', 'false');
  }
}
