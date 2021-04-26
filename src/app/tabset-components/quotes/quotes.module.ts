// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

// Components
import { QuotesComponent } from 'app/tabset-components/quotes/quotes.component';

@NgModule({
  declarations: [
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    HttpClientModule,
  ],
  exports: [
    QuotesComponent
  ],
})
export class QuotesModule { }
