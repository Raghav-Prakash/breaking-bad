// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Components
import { SearchBarComponent } from 'app/shared/search-bar/search-bar.component';
import { EntityDetailsComponent } from 'app/shared/entity-details/entity-details.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    EntityDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    SearchBarComponent,
    EntityDetailsComponent
  ]
})
export class SharedModule { }
