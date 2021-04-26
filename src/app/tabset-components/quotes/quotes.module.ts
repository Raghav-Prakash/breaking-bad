// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'app/shared/shared.module';

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
    SharedModule
  ],
  exports: [
    QuotesComponent
  ],
})
export class QuotesModule { }
