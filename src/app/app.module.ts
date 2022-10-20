import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageCountriesComponent } from './countries/pages/page-countries/page-countries.component';
import { CustomHeaderInterceptor } from './interceptors/custom-header.interceptor';
import { PageLoginComponent } from './pages/page-login/page-login.component';

@NgModule({
  declarations: [AppComponent, PageLoginComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
