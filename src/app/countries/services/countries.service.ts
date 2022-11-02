import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country, CountryLike } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  apiURL: string = 'https://restcountries.com/v3.1/all';

  private _countries: (Country | CountryLike)[] = [];

  get countries() {
    return [...this._countries];
  }
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http
      .get<Country[]>(this.apiURL)
      .pipe(tap((countries) => (this._countries = countries)));
  }

  createCountry(country: CountryLike) {
    this._countries = [country, ...this._countries];
  }
}
