// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Components
import { SearchBarComponent } from 'app/shared/search-bar/search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SharedModule { }
