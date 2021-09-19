// Modules
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Component
import { BetterCallSaulComponent } from 'app/series/better-call-saul/better-call-saul.component';

// Child components
import { BCSCharactersComponent } from 'app/series/better-call-saul/bcs-characters/bcs-characters.component';
import { BCSQuotesComponent } from 'app/series/better-call-saul/bcs-quotes/bcs-quotes.component';

@NgModule({
  declarations: [
    BetterCallSaulComponent,
    BCSCharactersComponent,
    BCSQuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    BetterCallSaulComponent,
    BCSCharactersComponent,
    BCSQuotesComponent,
  ],
})
export class BetterCallSaulModule { }
