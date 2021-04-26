// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'app/shared/shared.module';

// Custom modules
import { CharactersModule } from 'app/tabset-components/characters/characters.module';
import { DeathsModule } from 'app/tabset-components/deaths/deaths.module';
import { QuotesModule } from 'app/tabset-components/quotes/quotes.module';

@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ModalModule.forRoot(),
    HttpClientModule,
    CharactersModule,
    DeathsModule,
    QuotesModule,
    SharedModule
  ],
  exports: [
    CharactersModule,
    DeathsModule,
    QuotesModule,
    SharedModule
  ],
})
export class TabsetComponentsModule { }
