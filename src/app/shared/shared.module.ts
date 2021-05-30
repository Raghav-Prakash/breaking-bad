// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Components
import { NavigatePagesComponent } from 'app/shared/navigate-pages/navigate-pages.component';
@NgModule({
  declarations: [
    NavigatePagesComponent
  ],
  imports: [
    BrowserModule,
    PaginationModule.forRoot(),
    HttpClientModule,
  ],
  exports: [
    NavigatePagesComponent
  ]
})
export class SharedModule { }
