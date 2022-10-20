import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-page-countries',
  templateUrl: './page-countries.component.html',
  styleUrls: ['./page-countries.component.scss'],
})
export class PageCountriesComponent implements OnInit {
  countries$!: Observable<Country[]>;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries$ = this.countriesService.getAllCountries();
  }
}
