// Modules
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Component
import { BreakingBadComponent } from 'app/series/breaking-bad/breaking-bad.component';

// Child components
import { BBCharactersComponent } from 'app/series/breaking-bad/bb-characters/bb-characters.component';
import { BBQuotesComponent } from 'app/series/breaking-bad/bb-quotes/bb-quotes.component';

@NgModule({
  declarations: [
    BreakingBadComponent,
    BBCharactersComponent,
    BBQuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    BreakingBadComponent,
    BBCharactersComponent,
    BBQuotesComponent,
  ],
})
export class BreakingBadModule { }
